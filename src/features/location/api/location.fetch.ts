import { GetServerSidePropsContext } from 'next';

export const locationFetch = async (context: GetServerSidePropsContext, timeOut = 1500) => {
  const getQueryParam = (param: string | string[] | undefined): string => {
  if (Array.isArray(param)) return param[0];
  return param || '';
};

  
  const term = getQueryParam(context.query.keyword) || getQueryParam(context.query.utm_term);
  const forwarding = context.req.headers['x-forwarded-for'] || '';
  const remotes = typeof forwarding === 'string' ? forwarding.split(', ') : [''];
  const remoteIp = remotes.shift();

  console.warn('remoteIp:', remoteIp);

  const res = await fetch(
    createApiEndpoint() + createSearchParams(term, remoteIp),
    {
      headers: createHeaders(),
    }
  );

  if (!res.ok) {
    throw new Error(`Response failed: ${res.status}`);
  }

  return await res.json();
};

const createApiEndpoint = () =>
  `${process.env.GEO_API_URL}/parse/with-groups-per-client?`;

const createSearchParams = (term: string, remoteIp: string | undefined | null) =>
  new URLSearchParams({
    search_string: term,
    user_ip: remoteIp || '',
    default_city: process.env.GEO_DEFAULT_LOCATION || '',
    state: process.env.GEO_DEFAULT_STATE || '',
  });

const createHeaders = () => {
  const credentials = Buffer.from(
    `${process.env.USERNAME}:${process.env.PASSWORD}`
  ).toString('base64');
  return {
    'x-client-unique': process.env.GEO_API_CLIENT || '',
    'x-ignore-validation': 'true',
    Authorization: `Basic ${credentials}`,
  };
};