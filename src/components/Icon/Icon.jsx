
const Icon = ({ name, width, height }) => {
  const size = { width: 24, height: 24 };
  
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
