'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Cebu from '@/assets/images/cebu.jpeg'
import Cover from '@/assets/images/cover.jpeg'
import Palawan from '@/assets/images/palawan.jpeg'
import Mayon from '@/assets/images/mayon.jpeg'
import Teracess from '@/assets/images/terraces.jpeg'

let images = [Cebu, Palawan, Mayon, Teracess, Cebu, Palawan, Mayon, Teracess]

function Heritage() {
	const [currIndex, setCurrIndex] = useState(0)
	const settings = {
		className: 'center',
		centerMode: true,
		dots: true,
		infinite: true,
		centerPadding: '50px',
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: 'ease-out',
		beforeChange: (current, next) => setCurrIndex(next),
	}
	return (
		<div className="h-[100vh] float-left text-neutral-900 w-full flex items-center justify-center">
			<div className="w-full h-full px-[150px] flex flex-col gap-[20px] justify-center">
				<span className="text-green-500  text-3xl font-bold">Philippine Historical Landmarks</span>
				<span className="text-white mb-[50px]">
					Take a virtual tour of the countrys most iconic historical landmarks and heritage sites. From the ancient rice terraces of Banaue to the
					historic walled city of Intramuros, our website brings you closer to the physical remnants of the past
				</span>
				<Slider
					className="h-fit mt-[50px]"
					{...settings}
				>
					{/* <div className="w-1/3 bg-gray-500 border">1</div>
					<div className="w-1/3 bg-gray-500 border">2</div>
					<div className="w-1/3 bg-gray-500 border">3</div>
					<div className="w-1/3 bg-gray-500 border">4</div> */}
					{images.map((item, index) => (
						<div
							className={currIndex == index ? `slide activeSlide` : `slide`}
							key={index}
						>
							<Image
								src={item}
								key={index}
								alt={item}
								width={400}
								height={350}
							/>
							<span className="text-white">Philippine</span>
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default Heritage
