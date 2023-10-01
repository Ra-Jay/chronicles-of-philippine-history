import React from 'react'
// import img from 'next/img'

function Articles() {
	return (
		<div className=" h-[100vh] float-left text-neutral-900 w-full flex items-center justify-center">
			<div className="w-full flex items-center flex-col gap-y-[80px]">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-5xl font-bold text-green-500">Articles</h1>
					<span className="text-white w-[90%] lg:w-[60%] text-center mt-[10px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris at dui rhoncus, vel accumsan mi vestibulum. Praesent non
						placerat sapien, sed maximus risus.
					</span>
				</div>
				<div className="flex flex-col lg:flex-row text-white">
					<div className="flex items-center justify-start lg:justify-center flex-col lg:border-r-[1px] border-neutral-700 gap-y-[15px] p-[20px]">
						<div className="flex flex-col items-center gap-[20px]">
							<img
								src={'https://i.pinimg.com/564x/b3/40/d8/b340d814711f8edcdccfbd4afba646f5.jpg'}
								alt="feature1"
								className="w-full max-h-[200px]"
							/>
							<h1 className="text-green-500 text-[20px] font-bold">Article 1</h1>
						</div>
						<span className="text-justify">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris at dui rhoncus, vel accumsan mi vestibulum. Praesent non
							placerat sapien, sed maximus risus.
						</span>
					</div>
					<div className="flex items-center justify-start lg:justify-center flex-col lg:border-r-[1px] border-neutral-700 gap-y-[15px] p-[20px]">
						<div className="flex flex-col items-center gap-[20px]">
							<img
								src={'https://i.pinimg.com/564x/b3/40/d8/b340d814711f8edcdccfbd4afba646f5.jpg'}
								alt="feature1"
								className="w-full max-h-[200px]"
							/>
							<h1 className="text-green-500 text-[20px] font-bold">Article 2</h1>
						</div>
						<span className="text-justify">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris at dui rhoncus, vel accumsan mi vestibulum. Praesent non
							placerat sapien, sed maximus risus.
						</span>
					</div>
					<div className="flex items-center justify-center flex-col lg:border-r-[1px] border-neutral-700 gap-y-[15px] p-[20px]">
						<div className="flex flex-col items-center gap-[20px]">
							<img
								src={'https://i.pinimg.com/564x/b3/40/d8/b340d814711f8edcdccfbd4afba646f5.jpg'}
								alt="feature2"
								className="w-full max-h-[200px]"
							/>
							<h1 className="text-green-500 text-[20px] font-bold">Article 3</h1>
						</div>
						<span className="text-justify">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris at dui rhoncus, vel accumsan mi vestibulum. Praesent non
							placerat sapien, sed maximus risus.
						</span>
					</div>
					<div className="flex items-center justify-center flex-col gap-y-[15px] p-[20px]">
						<div className="flex flex-col items-center gap-[20px]">
							<img
								src={'https://i.pinimg.com/564x/b3/40/d8/b340d814711f8edcdccfbd4afba646f5.jpg'}
								alt="feature3"
								className="w-full max-h-[200px]"
							/>
							<h1 className="text-green-500 text-[20px] font-bold">Article 4</h1>
						</div>
						<span className="text-justify">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris at dui rhoncus, vel accumsan mi vestibulum. Praesent non
							placerat sapien, sed maximus risus.
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Articles
