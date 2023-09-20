import Avatar from "./Avatar";
import NotificationCount from "./NotificationCount";

interface CardProps {
  name: string;
  message: string;
  timestamp: string;
  src?: string;
  alt?: string;
  active?: boolean;
}

export default function Card({
  name,
  message,
  timestamp,
  src,
  alt,
  active,
}: CardProps) {
  return (
    <>
      <div className="inline-flex items-center bg-stone-900 w-80  ">
        <Avatar src={src} alt={alt} active={active} />
        
          <div className="flex flex-col">
            <h1 className="text-white">{name}</h1>
            <p className="text-white">{message}</p>
          </div>
          <div className=" relative flex flex-col items-end">
            <NotificationCount count={132} />
            <p className="text-white">{timestamp}</p>
          </div>
        </div>
      
    </>
  );
}
