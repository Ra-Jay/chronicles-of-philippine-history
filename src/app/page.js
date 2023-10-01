import Image from 'next/image'
import Nav from '@/components/Nav'
import Banner from '@/components/Banner'
import Heritage from '@/components/Heritage'
import Footer from '@/components/Footer'
import Articles from '@/components/Articles'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="w-full h-[300vh] float-left">
				<Nav />
				<Banner />
				<Heritage />
				<Articles />
			</div>
			<Footer />
		</main>
	)
}
