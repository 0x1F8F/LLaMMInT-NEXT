import { FC } from "react";

export default function MainBtn({ lable }:{lable:string}){
    return (<>
        <button className="bg-black text-white rounded-full px-4 py-[8px] m-1">
            {lable}
        </button>
    </>)
}