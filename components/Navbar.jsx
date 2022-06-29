import ImageSource from './ImageSource';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CartList from './CartList'
import { useCartContext } from '../pages/_app';
import {MdReorder} from 'react-icons/md'

const Navbar = () => {
    const [ShowCart, setShowCart] = useState(false)
    const { amount } = useCartContext();
    return (
        <div className='flex flex-col'>
            <nav className="py-4 flex justify-between h-[100px] w-screen lg:w-[80vw] border-b border-grayish-blue">
                <ul className="flex lg:w-[1200px] items-center">
                    <li className="list-link ml-6 lg:ml-0">
                        <MdReorder className='text-3xl'/>
                    </li>
                    <li><ImageSource.logo /></li>
                    <li className="nav-link">
                        <Link href='/'>
                            Men
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href='/'>
                            Women
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href='/'>
                            About
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href='/'>
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className='flex items-center'>
                    <button className={`group flex items-center duration-150 hover:scale-105 active:translate-y-1 cursor-pointer`} onClick={() => setShowCart(!ShowCart)}>
                        <ImageSource.cart />
                        <div className={`bg-orange text-xs text-white px-1 rounded-full relative w-8 -top-2 right-2 duration-200 ${amount === 0 ? 'scale-0' : 'scale-100'}`}>{amount}</div>
                    </button>
                    <div className='ml-4 border-white hover:border-orange border-2 rounded-full duration-150 active:translate-y-1 cursor-pointer mr-6 lg:mr-0 w-10 lg:w-16 '>
                        <Image src={ImageSource.avatar} alt='user' />
                    </div>
                </div>
            </nav>
            <CartList ShowCart={ShowCart} />
        </div>
    )
}
export default Navbar;