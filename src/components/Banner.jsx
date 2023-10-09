export default function Banner({ className = "", image, children }) {
  return (
    <div
      className={"hero ".concat(className).trim()}
      style={
        image
          ? {
              backgroundImage: `url('${image}')`,
            }
          : null
      }
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content py-24 text-center text-base-100">
        <div className="max-w-xl">{children}</div>
      </div>
    </div>
  );
}
