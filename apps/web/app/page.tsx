'use client';
import { AvatarCard, RecieveBubble } from 'ui';

export default function Page() {
  return (
    <>
      {/* <Button /> */}
      <AvatarCard
        name={'Tiku'}
        message={'massege'}
        src={''}
        alt={'test'}
        active={true}
        timestamp={'2.23pm'}
        count={11}
      />
      {/* <div className="bg-slate-800 text-white">test</div> */}
    </>
  );
}
