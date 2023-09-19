

interface AvatarProps {
  src?: string;
  alt?: string;
  active?: boolean;
}
export default function Avatar({ src, alt, active }: AvatarProps) {
  return (
    <>
      {active ? (
        <img src="" alt="online"  />
      ) : (
        ""
      )}
      <div>
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <img
            className="rounded-full h-16 w-16 object-cover"
            src={
              "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            }
            alt={alt}
          />
        )}
      </div>
    </>
  );
}
