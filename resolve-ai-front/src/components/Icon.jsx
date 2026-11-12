// Ícone do sprite SVG que está no index.html. Ex.: <Icon name="star" className="size-5" />
export default function Icon({ name, className = "" }) {
  return (
    <svg className={`inline-block shrink-0 fill-current align-middle ${className}`} aria-hidden="true">
      <use href={`#icon-${name}`} />
    </svg>
  );
}
