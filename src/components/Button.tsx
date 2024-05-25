const Button = ({
  children,
  onClick,
  optionalStyles,
  id,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  optionalStyles?: string;
  id?: string;
}) => {
  return (
    <button
      id={id}
      className={`py-2 px-4 rounded-md ${optionalStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
