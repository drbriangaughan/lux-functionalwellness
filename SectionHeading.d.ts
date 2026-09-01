/**
 * Eyebrow + H2 + lede block that opens every marketing section.
 * @startingPoint section="Core" subtitle="Section opener with eyebrow, heading and lede" viewport="700x260"
 */
export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  action?: React.ReactNode;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
