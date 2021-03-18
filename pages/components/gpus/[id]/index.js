import Link from 'next/link';

const index = () => {
    return (
        <>
            <div className='py-2 pl-4 bg-gray-200'>
                <Link href='/'>Home&ensp;&gt;&ensp;</Link>
                <Link href='/components/gpus'>GPUs&ensp;&gt;&ensp;</Link>
                <span>Item</span>
            </div>
            <div className='pt-10 px-6 flex flex-col md:flex-row space-x-8'>
                {/* top left is the image section */}
                <div className='md:w-1/2'>
                    <img src='/gpu.jpg' className='max-h-96' />
                </div>

                {/* top right is the description & price */}
                <div className='md:w-1/2'>
                    <h2 className='mb-4 text-2xl font-medium'>
                        Gigabyte AORUS RTX 3080
                    </h2>
                    <p className='mb-2 text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo fugiat ducimus cumque quam aperiam quae dolores blanditiis pariatur hic reprehenderit qui exercitationem ut laudantium dolorum temporibus autem fugit distinctio error, unde nostrum odio amet. Eius aliquam perferendis maiores laborum doloribus. Id architecto cupiditate dolorum adipisci distinctio consectetur vero nam! Reiciendis.
                    </p>
                    <div className='text-right'>
                        <span className='text-xl font-medium'>$1,109.99</span>
                        <button className='ml-4 border-2 border-green-500 py-2 px-4 rounded text-lg shadow transition duration-300 transform hover:bg-green-500 hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* buttom  */}
            <div className='mt-10 px-6'>
                <h2 className='mb-2 text-3xl'>
                    Specs
                </h2>
                <table className='w-full table-fixed text-lg'>
                    <tr className='border-t border-b border-gray-300'>
                        <th scope='row' className='w-2/5 bg-gray-200 py-2'>Brand</th>
                        <td className='w-3/5 pl-2'>Gigabyte</td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                        <th scope='row' className='bg-gray-200 py-2'>Series</th>
                        <td className='pl-2'>AORUS</td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                        <th scope='row' className='bg-gray-200 py-2'>Chipset Manufacturer</th>
                        <td className='pl-2'>NVIDIA</td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                        <th scope='row' className='bg-gray-200 py-2'>GPU</th>
                        <td className='pl-2'>RTX 3080</td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default index;
