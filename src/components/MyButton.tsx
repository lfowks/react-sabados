const MyButton = ({
  text,
  action,
}: MyButtonProps) => {
    return <button type="button" onClick={action}>{text}</button>
};

export default MyButton;