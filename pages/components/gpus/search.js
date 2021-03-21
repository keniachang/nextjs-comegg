import Link from 'next/link';
import { server } from '../../../config';
import Meta from '../../../components/Meta';
import GPU from '../../../components/GPU';

const search = ({ gpus }) => {
    return (
        <>
            <Meta title='Comegg | Search' />
            <h1 className='my-6 text-4xl text-center font-medium'>
                Search Results
            </h1>
            <div className='md:pt-4 px-4 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center'>
                {gpus.map(gpu => (
                    <GPU key={gpu._id} gpu={gpu} />
                ))}
            </div>
            <div className='mt-12 text-center'>
                <button className='border-2 border-green-500 py-2 px-4 rounded shadow text-lg transition duration-500 transform hover:bg-green-500 hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>
                    <Link href='/components/gpus/pages/[page]' as='/components/gpus/pages/1'>
                        <a>View All GPUs</a>
                    </Link>
                </button>
            </div>
        </>
    );
};

export async function getServerSideProps(context) {
    const searchText = context.query.term;
    const res = await fetch(`${server}/api/search?term=${searchText}`);
    const data = await res.json();
    // console.log(data);

    return {
        props: {
            gpus: data
        }
    };
}

export default search;
