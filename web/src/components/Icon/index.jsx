function Icon({ name, width = 32, height = 32 }) {
  return (
    <svg width={width} height={height}>
      <use
        href={`/images/sprite.svg#icon-${name.toLowerCase()}`}
        xlinkHref={`/images/sprite.svg#icon-${name.toLowerCase()}`}
      />
    </svg>
  )
}

export default Icon
