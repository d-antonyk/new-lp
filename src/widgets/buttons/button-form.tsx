interface ButtonFormProps {
  title: string;
}

export const ButtonForm: React.FC<ButtonFormProps> = ({
  title
}) => {

  return (
      <a
        href='https://calendar.app.google/U1De7CiWuLjDmFbr6'
        className="button-form"
        role="button"
        tabIndex={0}
      >
        <span className="button-title">{title}</span>
      </a>
  );
};
