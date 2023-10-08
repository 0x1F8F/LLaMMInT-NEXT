import { FC } from "react";

export default function MainBtn({ lable,onClick }: { lable: string,onClick: ()=>any }) {
    return (<>
        <button className="bg-black text-white rounded-full px-2 py-[8px] m-1 text-sm shadow-sm" onClick={onClick()}>
            <p>
                {lable}
            </p>
        </button>
    </>)
}