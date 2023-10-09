import Image from "next/image"

export default function Home() {
    return (
        <>
            <div className=" pt-16">
                <Image src="/mint.svg" unoptimized={true} width={628} height={512} alt='Logo'></Image>
                {/* <img src="../public/next.svg" alt="Logo" /> */}
                
                <button className="mainButton">Get Started</button>
                {Array.from({ length: 30 }).map(i => <><h1 className=" text-[4rem]">PPPPP</h1></>)}
            </div>
        </>
    )
}