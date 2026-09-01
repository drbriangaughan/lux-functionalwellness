/** Small status label in mono type. Not interactive — use Tag for removable filters. */
export interface BadgeProps {
  tone?: 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'danger';
  /** Leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
