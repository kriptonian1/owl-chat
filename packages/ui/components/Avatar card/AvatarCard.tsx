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
      <div className="flex items-center bg-stone-900 w-96 justify-between p-4 rounded ">
        <Avatar src={src} alt={alt} active={active} />
        <div className="flex items-center ">
          <div className="flex flex-col ">
            <h1 className="text-white text-xl">{name}</h1>
            <p className="text-slate-500">{message}</p>
          </div>
          <div className=" relative flex flex-col items-end pl-36 pr-4">
            <NotificationCount count={997}  />
            <p className="text-slate-500 pt-1">{timestamp}</p>
          </div>
        </div>
      </div>
    </>
  );
}
