import { useState } from "react";
interface Props {
  count: number;
}
export default function NotificationCount({ count }: Props) {
  const [indicator, setIndicator] = useState(true);

  return (
    <>
      <div
        className={`bg-blue-500 rounded-full text-white text-xs ${
          indicator ? "w-4" : "w-7"
        } h-4 flex items-center justify-center`}
        onLoad={() => {
          if (count > 100) {
            setIndicator(false);
          } else {
            setIndicator(true);
          }
        }}
      >
        {count > 100 ? "99+" : count}
      </div>
    </>
  );
}
