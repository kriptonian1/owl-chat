import Avatar from "./Avatar"

interface CardProps{
    name:string;
    message:string;
    timestamp:string;
    src?:string;
    alt?:string;
    active?:boolean;
}

export default function Card({name,message,timestamp,src,alt,active}:CardProps) {
  return (
    <>
    <div className="flex items-center">

      <Avatar src={src} alt={alt} active={active}/>
      <div className="flex flex-col">

      <h1>{name}</h1>
      <p>{message}</p>
      </div>
    <div className="">

      <p>{timestamp}</p>
    </div>
    </div>

    </>
  )
}
