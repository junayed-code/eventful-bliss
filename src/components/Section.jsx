export default function Section({ className, children, ...rest }) {
  return <section className={className}>{children}</section>;
}

// Section title component
Section.Title = ({ className = "", children }) => (
  <h2
    className={"text-4xl font-bold mb-5 max-w-2xl mx-auto text-center "
      .concat(className)
      .trim()}
  >
    {children}
  </h2>
);

// Section description component
Section.Description = ({ className = "", children }) => (
  <p
    className={"text-base-content/75 max-w-2xl mx-auto text-lg text-center "
      .concat(className)
      .trim()}
  >
    {children}
  </p>
);

// Section content component
Section.Content = ({ className, children }) => (
  <div className={className}>{children}</div>
);
