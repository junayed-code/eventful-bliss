export default function FieldCheckbox({
  id,
  className = "",
  name = "",
  children,
}) {
  return (
    <div className={"flex items-center gap-2 ".concat(className).trim()}>
      <input
        id={id}
        name={name || id}
        type="checkbox"
        className="w-4 h-4 border-gray-400 rounded"
      />
      <label htmlFor={id} className="text-sm font-medium text-gray-900">
        {children}
      </label>
    </div>
  );
}
