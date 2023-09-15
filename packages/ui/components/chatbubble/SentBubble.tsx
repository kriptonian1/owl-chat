import React from "react";

interface SentProps {
    text: string;
    timestamp: string;
}


const SentBubble = ({ text, timestamp }: SentProps) => {
    return (
        <div className="bg-blue-500 text-white rounded-b-3xl grid gap-y-2 max-w-[368px] min-w-[100px] w-fit h-fit rounded-tr-3xl px-[0.94rem] pt-[0.94rem] pb-[0.38rem]">
            <div className="max-w-[368px]">{text}</div>
            <p className="flex flex-row-reverse items-end text-xs text-white/60">
                {timestamp}
            </p>
        </div>
    );
};

export default SentBubble;
