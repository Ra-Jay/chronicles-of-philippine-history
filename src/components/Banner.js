import Image from 'next/image'
import React from 'react'

import CoverImage from '@/assets/images/cover.jpeg'

function Banner() {
	return (
		<div className="h-[100vh] float-left text-neutral-900 w-full flex relative items-center justify-center">
			<div className="w-full h-full flex flex-col justify-center items-center gap-[20px] z-20">
				<span className="text-5xl font-bold text-white">Chronicles of Philippine History: Unveiling Our Rich Heritage</span>
				<span className="text-md text-white max-w-[800px] text-center">
					{' '}
					Embark on a captivating journey through centuries of triumphs, struggles, and cultural milestones that have shaped this archipelago into the
					vibrant nation it is today.
				</span>
			</div>
			<div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-black bg-opacity-60 z-10"></div>
			<Image
				src={CoverImage}
				alt=""
				fill
				className="w-full h-full object-center object-cover -z-10"
			/>
		</div>
	)
}

export default Banner
