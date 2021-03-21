import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { server } from '../config';

const Nav = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState('');

    async function search() {
        const searchFor = searchText;
        setSearchText('');

        const href = `${server}/components/gpus/search?term=${searchFor}`;
        router.push(href);
    }

    return (
        <nav className='sticky top-0 z-10 container min-w-full sm:h-24 py-2 sm:p-0 bg-green-400 flex flex-col sm:flex-row justify-between items-center'>
            <div className='sm:pl-6 2xl:pl-16 text-6xl font-bold text-white'>
                <Link href='/'>Comegg</Link>
            </div>
            <div className='mt-6 sm:m-0'>
                <input
                    type='text'
                    placeholder='Search...'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={(e) => {
                        e.key === 'Enter' ? search() : null;
                    }}
                    className='w-auto lg:w-96 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-white'
                />
            </div>
            <button className='my-6 sm:mr-6 2xl:mr-16 py-1 px-4 border-2 border-white rounded shadow text-lg font-medium text-white hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50'>
                <Link href='/cart'>Cart</Link>
            </button>
        </nav>
    );
};

export default Nav;
