/** Hover/focus label on a royal-blue chip. Short strings only — no interactive content. */
export interface TooltipProps {
  content: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
}
export function Tooltip(props: TooltipProps): JSX.Element;
