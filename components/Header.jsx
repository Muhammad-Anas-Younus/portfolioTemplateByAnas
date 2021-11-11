import React from 'react'
import Link from "next/link"
import data from "../assets/data"
import {LinkedinSquare} from "@styled-icons/boxicons-logos/LinkedinSquare"
import {Github} from "@styled-icons/boxicons-logos"

const Header = () => {
	return (
		<header className="w-80% 1440:w-50% mx-auto h-15vh flex justify-between items-center">
			<Link href="/">
				<a className="font-poppins">Home</a>
			</Link>
			<nav className="md:hidden">
				<a className="mr-8 font-poppins" href="#about">About</a>
				<a className="mr-8 font-poppins" href="#projects">Projects</a>
				<a className="font-poppins" href="#contact">Contact</a>
			</nav>
			<nav className="hidden md:flex">
				<a href={data.links.linkedin} className="mr-2">
					<LinkedinSquare size="30"/>		
				</a>
				<a href={data.links.github} target="_blank">
					<Github size="30"/>
				</a>
			</nav>
		</header>
	)
}

export default Header