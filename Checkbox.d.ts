/** Square checkbox and round radio; both fill royal blue with a gold indicator when selected. */
export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}
export function Checkbox(props: CheckboxProps): JSX.Element;

export interface RadioProps extends CheckboxProps {
  /** Radio group name. */
  name?: string;
}
export function Radio(props: RadioProps): JSX.Element;
