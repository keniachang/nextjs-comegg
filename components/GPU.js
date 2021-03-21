import Link from 'next/link';

const GPU = ({ gpu }) => {
    return (
        <div className='relative border-2 boder-gray-100 p-2 shadow text-lg'>
            {/* <Link href={`/components/gpus/${gpu._id}`}> */}
            <Link href='/components/gpus/[id]' as={`/components/gpus/${gpu._id}`}>
                <a>
                    <img src={gpu.image} className='m-w-full h-auto' />
                    <h2 className='mt-2 mb-6 font-medium'>
                        {`${gpu.brand} ${gpu.series} ${gpu.gpuModel}`}
                    </h2>
                    <p className='absolute bottom-0 right-1.5'>
                        $ {gpu.price.$numberDecimal}
                    </p>
                </a>

                {/* <a>
                    <div className='h-full flex flex-col justify-items-auto'>
                        <div>
                            <img src={gpu.image} className='m-w-full h-auto' />
                        </div>
                        <div>
                            <h2 className='my-2 font-medium'>
                                {`${gpu.brand} ${gpu.series} ${gpu.gpuModel}`}
                            </h2>
                        </div>
                        <div className='justify-self-end'>
                            <p className='text-right'>
                                $ {gpu.price.$numberDecimal}
                            </p>
                        </div>
                    </div>
                </a> */}
            </Link>
        </div>
    )
}

export default GPU
