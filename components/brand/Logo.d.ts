/**
 * LUX wordmark. CHOSEN: variant="bracket" (option C) is the primary lockup and the default.
 * @startingPoint section="Brand" subtitle="Wordmark lockups — bracket is primary" viewport="700x260"
 */
export interface LogoProps {
  /** bracket = left gold rule (PRIMARY, default), boxed = filled block, outline = hairline frame (print). */
  variant?: 'bracket' | 'boxed' | 'outline';
  /** Use onDark on navy or photographic backgrounds. */
  tone?: 'navy' | 'onDark';
  /** Wordmark font size in px. Default 34. */
  size?: number;
  /** Show the WELLNESS subline. */
  tagline?: boolean;
  name?: string;
  sub?: string;
}
export function Logo(props: LogoProps): JSX.Element;
