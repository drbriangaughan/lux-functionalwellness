/**
 * Action control — square, uppercase Archivo, 0.12em tracking. Lifts 2px on hover.
 * @startingPoint section="Core" subtitle="Button variants, sizes and states" viewport="700x220"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** accent = gold (the standard CTA, default), primary = navy fill, secondary = navy outline, ghost = gold text link, onDark = translucent outline on navy. */
  variant?: 'accent' | 'primary' | 'secondary' | 'ghost' | 'onDark';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  /** Render as another element, e.g. 'a'. */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
