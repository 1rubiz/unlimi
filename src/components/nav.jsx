import React from 'react'
import Input from './input'
import { FaChevronDown } from 'react-icons/fa'
function Nav() {
	return (
		<div className='bg-white'>
			<div className='flex items-center justify-between pr-4'>
				<div className='flex items-center gap-8 p-2'>
					<img src='/img.svg'/>
					<Input/>
				</div>
				<div className='gap-4 hidden md:flex items-center justify-between '>
					<img src='/img2.svg'/>
					<img src='/img3.svg'/>
					<div className='flex items-center justify-center gap-2'>Dave <FaChevronDown/></div>
				</div>
			</div>
		</div>
	)
}

export default Nav