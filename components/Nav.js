import Link from 'next/link';

const Nav = () => {
    return (
        <nav className='z-10 container min-w-full sm:h-24 sticky top-0 py-2 sm:p-0 bg-green-400 flex flex-col sm:flex-row justify-between items-center'>
            <div className='sm:pl-6 2xl:pl-16 text-6xl font-bold text-white'>
                <Link href='/'>Comegg</Link>
            </div>
            <div className='mt-6 sm:m-0'>
                <input
                    type='text'
                    placeholder='Search...'
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
