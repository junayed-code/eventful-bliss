export default function Container({ className = "", children }) {
  return (
    <div
      className={"mx-auto ".concat(className).trim()}
      style={{ width: "95%" }}
    >
      {children}
    </div>
  );
}

Container.Main = ({ className, children }) => {
  return <main className={className}>{children}</main>;
};
