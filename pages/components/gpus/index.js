import Link from 'next/link';

const index = () => {
    return (
        <>
            <h1 className='my-6 text-4xl text-center font-medium'>
                All Graphic Cards
            </h1>
            <div className='md:pt-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center'>

                <div className='border-2 boder-gray-100 p-2 text-lg'>
                    <Link href='/components/gpus/1'>
                        <a>
                            <img src='/gpu.jpg' className='m-w-full h-auto' />
                            <h2 className='my-2 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellat?</h2>
                            <p className='text-right'>$1,109.99</p>
                        </a>
                    </Link>
                </div>
                <div className='border-2 boder-gray-100 p-2 text-lg'>
                    <Link href='/components/gpus/1'>
                        <a>
                            <img src='/gpu.jpg' className='m-w-full h-auto' />
                            <h2 className='my-2 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellat?</h2>
                            <p className='text-right'>$1,109.99</p>
                        </a>
                    </Link>
                </div>
                <div className='border-2 boder-gray-100 p-2 text-lg'>
                    <Link href='/components/gpus/1'>
                        <a>
                            <img src='/gpu.jpg' className='m-w-full h-auto' />
                            <h2 className='my-2 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellat?</h2>
                            <p className='text-right'>$1,109.99</p>
                        </a>
                    </Link>
                </div>
                <div className='border-2 boder-gray-100 p-2 text-lg'>
                    <Link href='/components/gpus/1'>
                        <a>
                            <img src='/gpu.jpg' className='m-w-full h-auto' />
                            <h2 className='my-2 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellat?</h2>
                            <p className='text-right'>$1,109.99</p>
                        </a>
                    </Link>
                </div>
 
            </div>
        </>
    );
};

export default index;
