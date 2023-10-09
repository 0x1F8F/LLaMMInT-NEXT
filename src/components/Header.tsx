
export default function Header() {
    return <header className=" px-6 top-0 fixed navbar bg-base-100/70 backdrop-blur-3xl flex justify-between">
        <div>
            <a href="/" className="btn btn-sm btn-ghost normal-case text-xl hover:bg-white">LLaM
                <span className=" text-green-500">MInT</span>
            </a>
        </div>
        <div className=" transition-all ease-linear duration-300">
            <div className="sm:hidden">
                <a href="/auth/login" className="btn btn-sm btn-ghost btn-square">
                    <img src="/log-in.svg" alt="menu" />
                </a>
            </div>
            <div className="max-sm:hidden">
                <a href="/auth/login" className="btn btn-sm normal-case mx-1">login</a>
                <a href="/auth/signup" className="btn btn-sm bg-base-content text-base-100 hover:bg-base-content normal-case mx-1">Sign up</a>
            </div>
        </div>
    </header>
}