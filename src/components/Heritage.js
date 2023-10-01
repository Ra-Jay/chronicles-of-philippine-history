'use client'

import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Cebu from '@/assets/images/cebu.jpeg'
import Cover from '@/assets/images/cover.jpeg'
import Palawan from '@/assets/images/palawan.jpeg'
import Mayon from '@/assets/images/mayon.jpeg'
import Teracess from '@/assets/images/terraces.jpeg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Heritage() {
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 3,
		speed: 500,
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
					<img
						src="https://images.pexels.com/photos/2798477/pexels-photo-2798477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="React Image"
					/>
					<img
						src="https://images.pexels.com/photos/1364554/pexels-photo-1364554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="React Image"
					/>
					<img
						src="https://images.pexels.com/photos/1364558/pexels-photo-1364558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="React Image"
					/>
					<img
						src="https://images.pexels.com/photos/2798477/pexels-photo-2798477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="React Image"
					/>
					<img
						src="https://images.pexels.com/photos/1364554/pexels-photo-1364554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="React Image"
					/>
					<img
						src="https://images.pexels.com/photos/1364558/pexels-photo-1364558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="React Image"
					/>

					{/* <Image
						src={Cebu}
						alt="Cebu"
						width={100}
						height={350}
						className="max-h-[350px] mx-[20px"
					/>
					<Image
						src={Palawan}
						alt="Palawan"
						width={100}
						height={350}
						className="max-h-[350px] mx-[20px"
					/>
					<Image
						src={Cover}
						alt="Cover"
						width={100}
						height={350}
						className="max-h-[350px]"
					/>
					<Image
						src={Teracess}
						alt="Teracess"
						width={100}
						height={350}
						className="max-h-[350px]"
					/>
					<Image
						src={Mayon}
						alt="Mayon"
						width={100}
						height={350}
						className="max-h-[350px]"
					/> */}
				</Slider>
			</div>
		</div>
	)
}

export default Heritage
