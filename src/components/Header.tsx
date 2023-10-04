'use client';
import { Component, ReactNode } from "react";
import MainBtn from "./MainButton";
import SecBtn from "./SecondaryButton";
export default class Header extends Component {
    constructor(param : {}) {
        super(param)
    }
    render(): ReactNode {
        return (<>
            <div className="flex top-0 fixed w-full p-4 justify-between bg-white/80 items-baseline backdrop-blur-sm ">
                <div>LLaMInT AI</div>
                <div>
                    <SecBtn lable="Login" />
                    <MainBtn lable="Sign up" />
                </div>
            </div>
        </>)
    }
}