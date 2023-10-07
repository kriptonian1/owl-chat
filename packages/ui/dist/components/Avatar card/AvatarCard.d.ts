interface CardProps {
    name: string;
    message: string;
    timestamp: string;
    src?: string;
    alt?: string;
    active?: boolean;
    count: number;
}
declare function Card({ name, message, timestamp, src, alt, active, count, }: CardProps): JSX.Element;

export { Card as default };
