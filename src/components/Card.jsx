export default function Card({ className = "", children }) {
  return (
    <div className={"card rounded-lg ".concat(className).trim()}>
      {children}
    </div>
  );
}

// Card image component
Card.Image = ({ className, src, alt }) => (
  <figure className={className}>
    <img className="w-full aspect-video object-cover" src={src} alt={alt} />
  </figure>
);

// Card body component
Card.Body = ({ className = "", children }) => (
  <div className={"card-body ".concat(className).trim()}>{children}</div>
);

// Card title component
Card.Title = ({ className, children }) => (
  <h3 className={"card-title ".concat(className).trim()}>{children}</h3>
);

// Card text component
Card.Text = ({ className, children }) => (
  <p className={className}>{children}</p>
);

// Card box component
Card.Box = ({ className, children }) => (
  <div className={className}>{children}</div>
);
