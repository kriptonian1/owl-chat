import Avatar from "./Avatar";
import NotificationCount from "./NotificationCount";

interface CardProps {
  name: string;
  message: string;
  timestamp: string;
  src?: string;
  alt?: string;
  active?: boolean;
  count: number;
}

export default function Card({
  name,
  message,
  timestamp,
  src,
  alt,
  active,
  count,
}: CardProps) {
  return (
    <>
      <div className="flex items-center bg-stone-900 w-96 justify-between p-4 rounded ">
        <div className="flex items-center justify-between">
          <Avatar src={src} alt={alt} active={active} />
          <div className="flex flex-col pl-5">
            <h1 className="text-white text-xl whitespace-nowrap w-40 overflow-hidden text-ellipsis">
              {name}
            </h1>
            <p className="text-slate-500 whitespace-nowrap w-40 overflow-hidden text-ellipsis">
              {message}
            </p>
          </div>
        </div>
        <div className=" relative flex flex-col items-center">
          <NotificationCount count={count} />
          <p className="text-slate-500 pt-1">{timestamp}</p>
        </div>
      </div>
    </>
  );
}
