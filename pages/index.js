import { useState } from 'react';

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
        <div className='min-h-full flex flex-col'>
            {/* 3 slides banner taking top half */}
            <section className='w-4/5 2xl:w-1/2 relative my-6 mx-auto border-2 border-gray-400'>
                {/* <h1>Banner</h1> */}
                <img src={images[imgState]} className='w-full h-128' />
                <a onClick={() => updateImgState(-1)} className='p-2 absolute top-1/2 bg-black bg-opacity-50 text-white cursor-pointer select-none'>&#10094;</a>
                <a onClick={() => updateImgState(1)} className='p-2 absolute top-1/2 right-0 bg-black bg-opacity-50 text-white cursor-pointer select-none'>&#10095;</a>
            </section>
            {/* popular gpus section taking the bottom half */}
            <section className=''>
                <h1>Popular GPUs</h1>
            </section>
        </div>
    );
}
