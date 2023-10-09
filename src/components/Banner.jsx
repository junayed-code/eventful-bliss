export default function Banner({ image, children }) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content mt-16 py-5 text-center text-base-100">
        <div className="max-w-xl">{children}</div>
      </div>
    </div>
  );
}
