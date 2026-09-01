/** Centered modal over a blue-black scrim; 10px radius, level-4 shadow. Positions absolutely inside a relative parent. */
export interface DialogProps {
  open?: boolean;
  title?: string;
  eyebrow?: string;
  onClose?: () => void;
  /** Action row, right-aligned. */
  footer?: React.ReactNode;
  /** Panel width in px. Default 520. */
  width?: number;
  children?: React.ReactNode;
}
export function Dialog(props: DialogProps): JSX.Element | null;
