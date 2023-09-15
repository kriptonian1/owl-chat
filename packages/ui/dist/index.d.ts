export { Button } from './Button.js';
export { Header } from './Header.js';

interface RecieveProps {
    text: string;
    timestamp: string;
}
declare const RecieveBubble: ({ text, timestamp }: RecieveProps) => JSX.Element;

interface SentProps {
    text: string;
    timestamp: string;
}
declare const SentBubble: ({ text, timestamp }: SentProps) => JSX.Element;

export { RecieveBubble, SentBubble };
