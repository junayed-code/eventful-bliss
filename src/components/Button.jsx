export default function Button({
  type = "button",
  className = "",
  onClick,
  children,
  ...rest
}) {
  return (
    <button
      {...rest}
      onClick={onClick}
      type={type}
      className={"btn min-h-0 h-auto w-auto px-[1em] py-[0.5em] normal-case rounded-md "
        .concat(className)
        .trim()}
    >
      {children}
    </button>
  );
}
