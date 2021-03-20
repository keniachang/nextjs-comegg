import { useState } from 'react';
import Link from 'next/link';
import { connectToDatabase } from '../util/mongodb';
import Meta from '../components/Meta';

export default function Home({ isConnected, topThree }) {
    const images = [
        'https://promotions.newegg.com/nepro/21-0577/1920x360.jpg',
        'https://promotions.newegg.com/amd/21-0589/1920x360.jpg',
        'https://promotions.newegg.com/asus/21-0523/1920x360.jpg'
    ];
    const [imgState, setImgState] = useState(0);

    function updateImgState(n) {
        let imgPos = imgState + n;
        if (imgPos >= images.length) {
            setImgState(0);
        } else if (imgPos < 0) {
            setImgState(images.length - 1);
        } else {
            setImgState(imgPos);
        }
    }

    return (
        <>
            {/* Connected to MongoDB? */}
            {isConnected
                ? console.log('You are connected to MongoDB')
                : console.log('You are NOT connected to MongoDB')}

            <Meta title='Comegg | Simple GPU Market' />

            {/* 3 slides banner taking top half */}
            <section className='w-9/10 2xl:w-3/4 relative my-6 mx-auto border-4 border-gray-400 shadow'>
                {/* <h1>Banner</h1> */}
                <img src={images[imgState]} className='w-full h-52 md:h-72' />
                <a
                    onClick={() => updateImgState(-1)}
                    className='p-2 absolute top-1/2 bg-black bg-opacity-50 text-white cursor-pointer select-none'>
                    &#10094;
                </a>
                <a
                    onClick={() => updateImgState(1)}
                    className='p-2 absolute top-1/2 right-0 bg-black bg-opacity-50 text-white cursor-pointer select-none'>
                    &#10095;
                </a>
            </section>

            {/* featured gpus section taking the bottom half */}
            <section className='w-full mt-6 border-4 border-gray-100 p-6 grid grid-col-1 md:grid-col-2 gap-10 justify-items-center'>
                <div className='mb-4 col-start-1 md:col-span-2 text-5xl text-center font-medium'>
                    <h2>Featured Graphic Cards</h2>
                </div>

                <div className='md:self-center md:row-span-2 text-center text-lg md:text-2xl font-medium'>
                    <Link
                        href='/components/gpus/[id]'
                        as={`/components/gpus/${topThree[0]._id}`}>
                        <a>
                            <img
                                src={topThree[0].image}
                                className='2xl:max-w-screen-lg h-60 md:h-auto'
                            />
                            <p className='mt-2'>
                                {`${topThree[0].brand} ${topThree[0].series} ${topThree[0].gpuModel}`}
                            </p>
                            <span>$ {topThree[0].price.$numberDecimal}</span>
                        </a>
                    </Link>
                </div>

                <div className='text-center text-lg font-medium'>
                    <Link
                        href='/components/gpus/[id]'
                        as={`/components/gpus/${topThree[1]._id}`}>
                        <a>
                            <img src={topThree[1].image} className='h-40' />
                            <p className='mt-2'>
                                {`${topThree[1].brand} ${topThree[1].series} ${topThree[1].gpuModel}`}
                            </p>
                            <span>$ {topThree[1].price.$numberDecimal}</span>
                        </a>
                    </Link>
                </div>

                <div className='text-center text-lg font-medium'>
                    <Link
                        href='/components/gpus/[id]'
                        as={`/components/gpus/${topThree[2]._id}`}>
                        <a>
                            <img src={topThree[2].image} className='h-40' />
                            <p className='mt-2'>
                                {`${topThree[2].brand} ${topThree[2].series} ${topThree[2].gpuModel}`}
                            </p>
                            <span>$ {topThree[2].price.$numberDecimal}</span>
                        </a>
                    </Link>
                </div>

                <div className='md:col-span-2'>
                    <button className='border-2 border-green-500 py-2 px-4 rounded text-lg shadow transition duration-500 transform hover:bg-green-500 hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>
                        <Link href='/components/gpus/pages/1'>
                            View More...
                        </Link>
                    </button>
                </div>
            </section>
        </>
    );
}

export async function getServerSideProps() {
    const { client, db } = await connectToDatabase();

    const isConnected = await client.isConnected();

    const topThree = await db.collection('gpus').find({}).limit(3).toArray();

    return {
        props: { isConnected, topThree: JSON.parse(JSON.stringify(topThree)) }
    };
}
