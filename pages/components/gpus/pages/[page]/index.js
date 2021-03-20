import Link from 'next/link';
import { connectToDatabase } from '../../../../../util/mongodb';

const index = ({ gpus, pages, page }) => {
    return (
        <>
            <h1 className='my-6 text-4xl text-center font-medium'>
                Graphic Cards
            </h1>
            <div className='flex flex-col justify-items-start space-y-6'>
                <div className='md:pt-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center'>
                    {gpus.map((gpu) => (
                        <div
                            key={gpu._id}
                            className='border-2 boder-gray-100 p-2 text-lg'>
                            {/* <Link href={`/components/gpus/${gpu._id}`}> */}
                            <Link
                                href='/components/gpus/[id]'
                                as={`/components/gpus/${gpu._id}`}>
                                <a>
                                    <img
                                        src={gpu.image}
                                        className='m-w-full h-auto'
                                    />
                                    <h2 className='my-2 font-medium'>
                                        {`${gpu.brand} ${gpu.series} ${gpu.gpuModel}`}
                                    </h2>
                                    <p className='text-right'>
                                        $ {gpu.price.$numberDecimal}
                                    </p>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='justify-self-end text-xl text-center'>
                    {pages.map(p => (
                        <span
                            key={p}
                            className={'mr-2 py-1 px-2 bg-gray-200 text-blue-500'}
                        >
                            <Link
                                href='/components/gpus/pages/[page]'
                                as={`/components/gpus/pages/${p}`}
                            >
                                <a className={`${p == page ? 'text-black cursor-default' : ''}`}>
                                    {p}
                                </a>
                            </Link>
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export async function getStaticProps(context) {
    const { page } = context.params;
    const { db } = await connectToDatabase();

    const allGpus = await db.collection('gpus').find({}).toArray();
    const pageAmount = Math.ceil(allGpus.length / 9);
    let pages = [];
    for (let i = 0; i < pageAmount; i++) {
        pages.push(i + 1);
    }
    const start = (page - 1) * 9;
    const end = page * 9;
    const gpusInPage = allGpus.slice(start, end);

    return {
        props: {
            gpus: JSON.parse(JSON.stringify(gpusInPage)),
            pages,
            page
        }
    };
}

export async function getStaticPaths() {
    const { db } = await connectToDatabase();

    const gpus = await db.collection('gpus').find({}).toArray();
    const pageAmount = Math.ceil(gpus.length / 9);
    let pages = [];
    for (let i = 0; i < pageAmount; i++) {
        pages.push(i + 1);
    }
    const paths = pages.map((page) => ({ params: { page: page.toString() } }));

    return {
        paths,
        fallback: false
    };
}

export default index;
