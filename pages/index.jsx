import Navbar from '../components/Navbar.jsx'
import ImageSource from '../components/ImageSource'
import { useCartContext } from './_app'
import ImageView from '../components/ImageView.jsx';

const Home = () => {

  const {amount,setAmount} = useCartContext();

  const ButtonPanel = () => {
    return (
      <div className='bg-light-grayish-blue px-4 font-bold flex justify-between items-center drop-shadow-lg rounded group mb-4 lg:mb-0 w-full'>
        <button className='p-2 text-orange hover:brightness-110' onClick={()=>amount===0?0:setAmount(amount-1)}>-</button>
        <span className='px-6 w-6 flex justify-center duration-100 group-active:translate-y-1'>{amount}</span>
        <button className='p-2 text-orange hover:brightness-110' onClick={()=>setAmount(amount+1)}>+</button>
      </div>
    )
  }
  const TextArea = () => {
    return(
      <article className='w-full lg:w-[30vw]'>
        <h2 className='text-orange font-bold mb-2 lg:mb-4 -mt-4 lg:-mt-0 text-sm lg:text-base'>SNEAKER COMPANY</h2>
        <h1 className='font-bold text-3xl lg:text-5xl text-vark-blue'>Fall Limited Edition Sneakers </h1>
        <p className='text-dark-grayish-blue mt-4 lg:mt-10'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&#39;ll withstand everything the weather can offer.</p>
        <div className='flex items-center lg:flex-col lg:items-start justify-between'>
          <div className='flex mt-6 items-center'>
            <h1 className='font-bold text-2xl mr-2'>$125.00</h1>
            <span className='font-bold text-orange text-sm bg-pale-orange py-1 px-2 rounded'>50%</span>
          </div>
          <small className='text-grayish-blue line-through font-bold relative top-3 lg:top-0'>$250.00</small>
        </div>
        <div className='flex mt-6 flex-col w-full lg:flex-row'>
          <ButtonPanel/>
          <button className='bg-orange text-white p-2 rounded-lg font-bold flex items-center w-full justify-center lg:ml-5 mb-5 lg:mb-0 shadow-lg shadow-pale-orange hover:brightness-110 duration-150 active:translate-y-2'>
            <ImageSource.cartWhite/>
            <span className='ml-2'>Add to cart</span>
          </button>
        </div>
      </article>
    )
  }
  
  return (
    <>
      <main className='bg-white flex flex-col items-center justify-start h-full w-screen lg:h-screen overflow-hidden'>
          <Navbar/>
          <section className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none w-[80vw] h-full '>
            <div className='flex lg:items-center justify-center tablet:items-center'>
              <ImageView/>
            </div>
            <div className='flex items-center justify-center'>
              <TextArea/>
            </div>
          </section>
      </main>
    </>
    
  )
}

export default Home
