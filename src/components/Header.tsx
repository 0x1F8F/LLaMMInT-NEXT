'use client';
import { Component, ReactNode } from "react";
import Router from "next/navigation";
import "@/style/header.css"
export default class Header extends Component {
    constructor(param: {}) {
        super(param)
    }
    render(): ReactNode {
        return (<>
            <div className="flex top-0 fixed w-full p-2 justify-between bg-white/80 items-baseline backdrop-blur-sm ">
                <div className=" py-2">
                    <p>Exprimental Design</p>
                </div>

            </div>
        </>)
    }
}