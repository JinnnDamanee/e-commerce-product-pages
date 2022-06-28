import Image from 'next/image'
import { useCartContext } from '../pages/_app'
import ImageSource from './ImageSource'

const CartList = ({ShowCart}) => {
    const {amount,setAmount} = useCartContext();

    const CartItem = () => {
        return (
            <>
                <div className='my-4 flex'>
                    <div className='w-[50px] h-[50px] rounded-lg overflow-hidden'>
                        <Image src={ImageSource.thumbnail1} alt='thumbnail'/>
                    </div>
                    <div className='flex flex-col ml-4'>
                        <h1 className='text-dark-grayish-blue'>Fall Limited Edition Sneaker</h1>
                        <p className='text-dark-grayish-blue'>$125.00 x {amount} <span className='font-bold text-black'>$375.00</span></p>
                    </div>
                    <button className='pl-4 duration-150 hover:scale-105 active:translate-y-1' onClick={()=>setAmount(0)}>
                        <ImageSource.deleteIcon/>
                    </button>
                </div>
                <button className='bg-orange rounded-xl font-bold text-white p-2 mb-2 hover:brightness-110 active:translate-y-1 duration-150'>
                    Checkout
                </button>
            </>
        )
    }
    const EmptyCart = () => {
        return (
            <div className='my-4 flex justify-center items-center w-[300px]'>
                <p className='text-dark-grayish-blue font-bold py-8'>Your cart is empty!</p>
            </div>
        )
    }

    return (
        <div className={`bg-white w-fit rounded-xl shadow-2xl mt-4 m-5 m absolute z-20 md:right-0 lg:right-[9vw] top-24 duration-150 ${ShowCart===true?'scale-100':'scale-0'}`}>
            <header className='border-b-[1px] p-2 border-grayish-blue'>
                <h1 className='font-bold flex'>Cart</h1>
            </header>
            <div className='flex flex-col px-4 pb-4'>
                {amount>0?<CartItem/>:<EmptyCart/>}
            </div>
        </div>
    )
}
export default CartList;