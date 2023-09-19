export { Button } from './Button.js';
export { default as RecieveBubble } from './components/chatbubble/RecieveBubble.js';
export { default as SentBubble } from './components/chatbubble/SentBubble.js';

interface CardProps {
    name: string;
    message: string;
    timestamp: string;
    src?: string;
    alt?: string;
    active?: boolean;
}
declare function Card({ name, message, timestamp, src, alt, active }: CardProps): JSX.Element;

export { Card as AvatarCard };
