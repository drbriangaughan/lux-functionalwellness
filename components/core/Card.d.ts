/**
 * Content container — square white surface, 4px gold top rule, soft wide shadow.
 * @startingPoint section="Core" subtitle="Card surfaces: default, sunken, accent, inverse" viewport="700x320"
 */
export interface CardProps {
  variant?: 'default' | 'sunken' | 'inverse' | 'accent';
  /** Adds a 4px hover lift and a deeper shadow. */
  interactive?: boolean;
  eyebrow?: string;
  /** Rendered uppercase in the display face. */
  title?: string;
  /** The 4px gold top rule. On by default; turn off for plain panels. */
  topRule?: boolean;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
