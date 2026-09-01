/**
 * Labelled text field (and Textarea) — 44px min height, gold focus ring.
 * @startingPoint section="Forms" subtitle="Text inputs, hints, error and focus states" viewport="700x300"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Helper text under the field. */
  hint?: string;
  /** Error message; replaces hint and reddens the border. */
  error?: string;
  /** Leading adornment, e.g. a Lucide icon. */
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}
export function Input(props: InputProps): JSX.Element;

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  rows?: number;
}
export function Textarea(props: TextareaProps): JSX.Element;
