/** Typ ikony komponentu JPSvgIcon */
export type SvgIconType = "chevron-forward"

/** Kolor ikony */
type ColorType = "primary" | "secondary" | "danger" | "warning" | "blue"

/** Właściwości komponentu JPSvgIcon */
interface SvgIconProps {
  /** Typ ikony */
  iconType: SvgIconType

  /** Rozmiar w 'px' */
  size?: number

  /** Kolor */
  color?: ColorType

  /** Jednostka  */
  unit?: "px" | "em" | "rem" | "%" | "vw" | "vh"

  /** Dodatkowe style */
  style?: React.CSSProperties
}

/** Ikona w formacie svg */
export const JPSvgIcon: React.FC<SvgIconProps> = ({
  iconType,
  size = 32,
  color,
  unit = "px",
  style,
}) => {
  return (
    <span className={`${color ? `text-${color}` : "text-white"}`} style={style}>
      <svg width={`${size}${unit}`} height={`${size}${unit}`}>
        <use xlinkHref={`/icons.svg#${iconType}`} />
      </svg>
    </span>
  )
}
