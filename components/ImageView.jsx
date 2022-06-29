import Image from "next/image";
import { useState } from "react";
import ImageSource from "./ImageSource";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";
import useWindowDimensions from "./useWindowDimension";

const ImageView = () => {
    const [pages, setPages] = useState(1);
    const [showOverlay, setOverlay] = useState(false);

    const pageHandler = (direction) => {
        const newPages = direction==='next'?(pages+1)%5:(pages-1)%5
        setPages(newPages===0?1:newPages)
    }
    const {width,height} = useWindowDimensions();

    const ImageOverlay = () => {
        return (
            <div className="absolute top-0 left-0 z-10 flex justify-center items-center w-screen h-screen flex-col">
                <div className="bg-black opacity-75 w-screen h-screen absolute"></div>
                <div className="w-[30vw] mt-4 flex flex-col relative items-end">
                    <button
                        className="relative right-8 hover:brightness-110 hover:scale-110 duration-200"
                        onClick={() => setOverlay(false)}
                    >
                        <ImageSource.closeIcon />
                    </button>
                    <main className="flex items-center">
                        <MdKeyboardArrowLeft className="navigate-icon translate-x-4" onClick={()=>pageHandler('back')}/>
                        <div className="image-lg-view mt-4 flex">
                            <Image src={ImageSource[`shoe${pages}`]} alt="shoeBig" />
                        </div>
                        <MdKeyboardArrowRight className="navigate-icon -translate-x-4" onClick={()=>pageHandler('next')}/>
                    </main>
                    <div className="flex items-center justify-center m-8">
                        <div
                            className={`image-sm-view ${pages === 1 ? "image-current" : 'border-0'
                                }`}
                            onClick={() => setPages(1)}
                        >
                            <Image src={ImageSource.thumbnail1} alt="shoetn1" />
                        </div>
                        <div
                            className={`image-sm-view ${pages === 2 ? "image-current" : 'border-0'
                                }`}
                            onClick={() => setPages(2)}
                        >
                            <Image src={ImageSource.thumbnail2} alt="shoetn2" />
                        </div>
                        <div
                            className={`image-sm-view ${pages === 3 ? "image-current" : 'border-0'
                                }`}
                            onClick={() => setPages(3)}
                        >
                            <Image src={ImageSource.thumbnail3} alt="shoetn3" />
                        </div>
                        <div
                            className={`image-sm-view mr-0 ${pages === 4 ? "image-current" : 'border-0'
                                }`}
                            onClick={() => setPages(4)}
                        >
                            <Image src={ImageSource.thumbnail4} alt="shoetn4" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    if(width<=650){
        return (
            <>
                <div className="absolute">
                    <div className="cursor-pointer object-contain">
                        <Image src={ImageSource[`shoe${pages}`]} alt="shoeBig"/>
                    </div>
                    <div className="flex w-screen justify-between px-4 absolute -translate-y-52">
                        <MdKeyboardArrowLeft className="navigate-icon" onClick={()=>pageHandler('back')}/>
                        <MdKeyboardArrowRight className="navigate-icon" onClick={()=>pageHandler('next')}/>
                    </div>
                </div>
                {showOverlay && <ImageOverlay />}
            </>
            
        )
    } else {
        return (
            <>
                <div className="flex flex-col w-[30vw] md:my-4">
                    <div className="image-lg-view" onClick={() => setOverlay(true)}>
                        <Image src={ImageSource[`shoe${pages}`]} alt="shoeBig" />
                    </div>
                    <div className="flex mt-6 w-full">
                        <div
                            className={`image-sm-view ${pages === 1 ? "image-current" : null}`}
                            onClick={() => setPages(1)}
                        >
                            <Image src={ImageSource.thumbnail1} alt="shoetn1" />
                        </div>
                        <div
                            className={`image-sm-view ${pages === 2 ? "image-current" : null}`}
                            onClick={() => setPages(2)}
                        >
                            <Image src={ImageSource.thumbnail2} alt="shoetn2" />
                        </div>
                        <div
                            className={`image-sm-view ${pages === 3 ? "image-current" : null}`}
                            onClick={() => setPages(3)}
                        >
                            <Image src={ImageSource.thumbnail3} alt="shoetn3" />
                        </div>
                        <div
                            className={`image-sm-view mr-0 ${pages === 4 ? "image-current" : null
                                }`}
                            onClick={() => setPages(4)}
                        >
                            <Image src={ImageSource.thumbnail4} alt="shoetn4" />
                        </div>
                    </div>
                </div>
                {showOverlay && <ImageOverlay />}
            </>
        );
    }
    
};
export default ImageView;
