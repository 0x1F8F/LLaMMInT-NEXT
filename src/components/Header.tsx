'use client';
import { Component, ReactNode } from "react";
import MainBtn from "./MainButton";
import SecBtn from "./SecondaryButton";
import Router from "next/navigation";
import "@/style/header.css"
export default class Header extends Component {
    constructor(param : {}) {
        super(param)
    }
    render(): ReactNode {
        return (<>
            <div className="flex top-0 fixed w-full p-2 justify-between bg-white/80 items-baseline backdrop-blur-sm ">
                <div>LLaMInT AI</div>
                <div className=" header-list">
                    <SecBtn lable="Login" />
                    <MainBtn lable="Sign up" onClick={()=>{console.log(Router)}} />
                </div>
            </div>
        </>)
    }
}