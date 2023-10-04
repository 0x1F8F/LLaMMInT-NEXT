export default function SecBtn({ lable }:{lable:string}){
    return (<>
        <button className="bg-white text-black rounded-full border-black border-[2px] px-4 py-[6px] m-1">
            {lable}
        </button>
    </>)
}