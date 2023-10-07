import { useEffect, useState } from "react";
interface Props {
  count: number;
}
export default function NotificationCount({ count }: Props) {
  const [indicator, setIndicator] = useState(true);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    if (count > 100) {
      setIndicator(false);
    }
    if (count > 0 && count <= 100) {
      setIndicator(true);
    } else {
      setNotify(true);
    }
  }, [count]);

  return (
    <>
      <div
        className={`bg-blue-500 rounded-full text-white text-sm ${
          indicator ? "w-5" : "w-7 "
        } ${notify ? "" : "invisible"} flex items-center justify-center m-1`}
      >
        {count <= 0 ? "" : count > 100 ? "99+" : count}
      </div>
    </>
  );
}
