/** Immediate on/off toggle — 44×26 track, gold knob when on. */
export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}
export function Switch(props: SwitchProps): JSX.Element;
