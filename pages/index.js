import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const images = ['banner-gpu.jpg', 'banner-gpu2.jpg', 'banner-gpu3.jpg'];
    const [imgState, setImgState] = useState(0);

    function updateImgState(n) {
        let imgPos = imgState + n;
        if (imgPos >= images.length) {
            setImgState(0);
        }
        else if (imgPos < 0) {
            setImgState(images.length - 1);
        }
        else {
            setImgState(imgPos);
        }
    }

    return (
        <>
            {/* 3 slides banner taking top half */}
            <section className='w-4/5 2xl:w-3/4 relative my-6 mx-auto border-4 border-gray-400 shadow'>
                {/* <h1>Banner</h1> */}
                <img src={images[imgState]} className='w-full h-80 md:h-128 2xl:h-160' />
                <a onClick={() => updateImgState(-1)} className='p-2 absolute top-1/2 bg-black bg-opacity-50 text-white cursor-pointer select-none'>&#10094;</a>
                <a onClick={() => updateImgState(1)} className='p-2 absolute top-1/2 right-0 bg-black bg-opacity-50 text-white cursor-pointer select-none'>&#10095;</a>
            </section>

            {/* featured gpus section taking the bottom half */}
            <section className='w-full mt-6 border-4 border-gray-100 p-6 grid grid-col-1 md:grid-col-2 gap-10 justify-items-center'>

                <div className='mb-4 col-start-1 md:col-span-2 text-5xl text-center font-medium'>
                    <h2>Featured Graphic Cards</h2>
                </div>

                <div className='md:self-center md:row-span-2 text-center text-lg md:text-2xl font-medium'>
                    <Link href='/components/gpus/1'>
                        <a>
                            <img src='gpu.jpg' className='2xl:max-w-screen-lg h-60 md:h-auto' />
                            <p className='mt-2'>
                                Gigabyte AORUS RTX 3080
                            </p>
                            <span>$1,109.99</span>
                        </a>
                    </Link>
                </div>

                <div className='text-center text-lg font-medium'>
                    <Link href='/components/gpus/1'>
                        <a>
                            <img src='gpu.jpg' className='h-40' />
                            <p className='mt-2'>
                                Gigabyte AORUS RTX 3080
                            </p>
                            <span>$1,109.99</span>
                        </a>
                    </Link>
                </div>

                <div className='text-center text-lg font-medium'>
                    <Link href='/components/gpus/1'>
                        <a>
                            <img src='gpu.jpg' className='h-40' />
                            <p className='mt-2'>
                                Gigabyte AORUS RTX 3080
                            </p>
                            <span>$1,109.99</span>
                        </a>
                    </Link>
                </div>

                <div className='md:col-span-2'>
                    <button className='border-2 border-green-500 py-2 px-4 rounded text-lg shadow transition duration-500 transform hover:bg-green-500 hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>
                        <Link href='/components/gpus'>View More...</Link>
                    </button>
                </div>
            </section>
        </>
    );
}
