import Link from 'next/link';
import { connectToDatabase } from '../../../util/mongodb';

const index = ({ gpus }) => {
    return (
        <>
            <h1 className='my-6 text-4xl text-center font-medium'>
                All Graphic Cards
            </h1>
            <div className='md:pt-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center'>
                {gpus.map(gpu => (
                    <div key={gpu._id} className='border-2 boder-gray-100 p-2 text-lg'>
                    {/* <Link href={`/components/gpus/${gpu._id}`}> */}
                    <Link href='/components/gpus/[id]' as={`/components/gpus/${gpu._id}`}>
                        <a>
                            <img src={gpu.image} className='m-w-full h-auto' />
                            <h2 className='my-2 font-medium'>
                                {`${gpu.brand} ${gpu.series} ${gpu.gpuModel}`}
                            </h2>
                            <p className='text-right'>$ {gpu.price.$numberDecimal}</p>
                        </a>
                    </Link>
                </div>
                ))}
            </div>
        </>
    );
};

export async function getStaticProps() {
    const { db } = await connectToDatabase();

    const gpus = await db
        .collection('gpus')
        .find({})
        .toArray();

    return {
        props: {
            gpus: JSON.parse(JSON.stringify(gpus))
        }
    };
}

export default index;
