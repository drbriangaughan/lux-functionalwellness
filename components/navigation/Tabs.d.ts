/**
 * Section switcher. underline = gold 2px indicator (page level); segmented = sand track (in-panel).
 * @startingPoint section="Navigation" subtitle="Underline and segmented tab sets" viewport="700x180"
 */
export interface TabsProps {
  tabs?: Array<string | { label: string; value: string }>;
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'underline' | 'segmented';
}
export function Tabs(props: TabsProps): JSX.Element;
