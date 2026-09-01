/** Transient confirmation, bottom-right. White card with a 4px status bar on the leading edge. */
export interface ToastProps {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  message?: string;
  onDismiss?: () => void;
  /** Optional inline action, e.g. an undo Button size="sm". */
  action?: React.ReactNode;
}
export function Toast(props: ToastProps): JSX.Element;
