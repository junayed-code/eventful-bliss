export default function ASOFade({
  children,
  fade = "up",
  offset = "100",
  delay = "100",
  duration = "1000",
  easing = "ease-in-out",
}) {
  return (
    <div
      data-aos={`fade-${fade}`}
      data-aos-offset={offset}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-easing={easing}
    >
      {children}
    </div>
  );
}
