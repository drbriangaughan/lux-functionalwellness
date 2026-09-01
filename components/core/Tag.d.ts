/** Pill-shaped selectable / removable chip for filters and symptom pickers. */
export interface TagProps {
  selected?: boolean;
  /** Shows an × affordance. */
  onRemove?: () => void;
  onClick?: () => void;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
