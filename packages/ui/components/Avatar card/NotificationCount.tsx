import { useEffect, useState } from "react";
interface Props {
  count: number;
}
export default function NotificationCount({ count }: Props) {
  const [indicator, setIndicator] = useState(true);
  useEffect(() => {
    if (count > 100) {
      setIndicator(false);
    }
    else {
      setIndicator(true);
    }
  }, [count]);

  return (
    <>
      <div
        className={`bg-blue-500 rounded-full text-white text-xs ${
          indicator ? "w-4" : "w-7"
        } h-4 flex items-center justify-center`}
        
        
      >
        {count > 100 ? "99+" : count}
      </div>
    </>
  );
}
