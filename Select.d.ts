/** Native single-select with brand chrome and a caret adornment. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  /** Strings, or {label, value} pairs. */
  options?: Array<string | { label: string; value: string }>;
}
export function Select(props: SelectProps): JSX.Element;
