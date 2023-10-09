export default function FrostedGlassBg({ className = "", children }) {
  return (
    <div
      className={"bg-center bg-cover bg-no-repeat ".concat(className).trim()}
    >
      <div className="bg-white/70 backdrop-blur-md">{children}</div>
    </div>
  );
}
