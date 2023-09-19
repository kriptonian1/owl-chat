interface AvatarProps {
  src?: string;
  alt?: string;
  active?: boolean;
}
export default function Avatar({ src, alt, active }: AvatarProps) {
  return (
    <>
      <div className="inline-flex flex-col-reverse items-end relative">
    
      <div className="absolute right-1">
        {active ? (
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="status=online">
              <circle
                id="Ellipse 42"
                cx="6.5"
                cy="6.5"
                r="6.5"
                fill="#4ADE80"
              />
            </g>
          </svg>
        ) : (
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="status=idle">
              <circle
                id="Ellipse 42"
                cx="6.5"
                cy="6.5"
                r="6.5"
                fill="#FBBF24"
              />
            </g>
          </svg>
        )}
      </div>
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <img
            className="rounded-full h-16 w-16 object-cover "
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
