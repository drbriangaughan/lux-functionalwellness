/** Square icon-only control; always pass an accessible label. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required accessible name (also used as the tooltip title). */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'outline' | 'solid';
  /** A 20px Lucide icon. */
  children?: React.ReactNode;
}
export function IconButton(props: IconButtonProps): JSX.Element;
