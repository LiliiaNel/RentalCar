const Icon = ({ name, width, height, className, viewBox, preserveAspectRatio = "xMidYMid meet" }) => (
  <svg
    className={className}
    width={width}
    height={height}
     viewBox={viewBox || "0 0 32 32"}
    preserveAspectRatio={preserveAspectRatio}
    xmlns="http://www.w3.org/2000/svg"
  >
    <use href={`/icons/svg-sprite.svg#${name}`} />
  </svg>
);

export default Icon;
