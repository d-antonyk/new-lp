declare module '@u-wave/react-vimeo' {
  import * as React from 'react';

  export interface VimeoProps {
    video: string | number;
    autoplay?: boolean;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    showTitle?: boolean;
    showPortrait?: boolean;
    showByline?: boolean;
    color?: string;
    width?: number | string;
    height?: number | string;
    responsive?: boolean;
    dnt?: boolean;
    className?: string;
    style?: React.CSSProperties;
    loading?: 'lazy' | 'eager';
  }

  export default class Vimeo extends React.Component<VimeoProps> {}
}
