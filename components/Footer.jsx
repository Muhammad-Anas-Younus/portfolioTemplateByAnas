import React from 'react'
import data from "../assets/data"
import Image from "next/image"
import {LinkedinSquare} from "@styled-icons/boxicons-logos/LinkedinSquare"
import {Github} from "@styled-icons/boxicons-logos"
import envelope from "../assets/envelope_front.png"

const Footer = () => {
    return (
        <div className="w-full h-50vh bg-secondary">
            <div className="w-80% 1440:w-50% mx-auto flex h-full">
                <div className="w-1/2 md:w-full flex flex-col justify-center h-full">
                    <h4 className="text-3xl xsm:text-xl mb-2 font-bold text-white font-poppins">{data.name} - {data.role}</h4>
                    <p className="text-md md:text-sm mb-8 text-white font-poppins">{data.email}</p>
                    <div className="flex mb-8">
                        <a href={data.links.github}>
                            <Github color="white" size="40"/>
                        </a>
                        <a href={data.links.linkedin}>
                            <LinkedinSquare color="white" size="40"/>
                        </a>
                    </div>
                    <a className="text-2xl md:text-lg mb-2 font-bold text-white font-poppins" href="#about">About</a>
                    <a className="text-2xl md:text-lg font-bold text-white font-poppins" href="#projects">Projects</a>
                </div>
                <div className="w-1/2 md:hidden h-full flex items-center justify-center">
                    <Image height={300} width={300} src={envelope}/>
                </div>
            </div>
        </div>
    )
}

export default Footer
