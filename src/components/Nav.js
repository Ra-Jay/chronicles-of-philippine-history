'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { SvgIcon } from '@mui/material'
import { Settings } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

const dropdownMenu = [
	{
		title: 'Profile',
		icon: Settings,
		route: '/profile',
	},
]

function NavBar(props) {
	const router = useRouter()
	const [dropdown, setDropdown] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const navbar = document.querySelector('.nav-bar')

			if (window.scrollY > 100) {
				navbar.style.backgroundColor = 'black'
			} else {
				navbar.style.backgroundColor = 'transparent'
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const renderNav = () => {
		return (
			<div className="z-40 float-left w-full h-[80px] shadow-sm fixed text-white px-[100px] nav-bar">
				<div className="lg:block xl:block 2xl:block sm:hidden md:hidden xs:hidden">
					<div className={'w-3/4 h-[80px] float-left content-center items-center flex href-link'}>
						<Link
							href="/phil-history"
							className="ml-[40px] mr-[20px] hover:underline"
						>
							Phil History
						</Link>
						<Link
							href="/quizzes"
							className="mx-[20px] hover:underline"
						>
							Quizzes
						</Link>
					</div>
				</div>
			</div>
		)
	}

	return <div>{renderNav()}</div>
}

export default NavBar
