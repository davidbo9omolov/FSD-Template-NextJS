'use client'

const HomePage = () => {

	return (
		<div className={'flex flex-col h-screen items-center justify-center'}>
			<div className={'flex justify-center group'}>
				<p
					className={'text-2xl shadow-xl p-4 rounded-md duration-300 cursor-pointer group-hover:animate-bounce'}
					draggable
				>
					Hello from Workspace!
				</p>
			</div>
		</div>
	)
}

export default HomePage