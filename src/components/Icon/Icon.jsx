const defaultSizes = {
  check: { width: 24, height: 24 },
  user: { width: 40, height: 40 },
};

const Icon = ({ name, width, height }) => {
  const size = defaultSizes[name] || { width: 24, height: 24 };
  
  return (
    <svg
      width={width || size.width}
      height={height || size.height}
    >
      <use href={`/icons/svg-sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
