type Props = {
  src?: string
  alt?: string
  placeholder: string
  fit?: 'cover' | 'contain'
  /** Ponto de foco do recorte (CSS object-position), ex.: 'center 20%'. */
  position?: string
  transparent?: boolean
}

/** Imagem que preenche o container; sem `src`, mostra um placeholder com a dimensão recomendada. */
export function ImageSlot({ src, alt = '', placeholder, fit = 'cover', position, transparent }: Props) {
  if (src) {
    return <img className="slot" src={src} alt={alt} style={{ objectFit: fit, objectPosition: position }} />
  }
  return (
    <div className={`slot slot--empty${transparent ? ' slot--transparent' : ''}`} role="img" aria-label={placeholder}>
      <span>{placeholder}</span>
    </div>
  )
}
