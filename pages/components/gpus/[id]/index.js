import { useState } from 'react';
import Link from 'next/link';
import { connectToDatabase } from '../../../../util/mongodb';
import Alert from '../../../../components/Alert';

const index = ({ gpu }) => {
    const [added, setAdded] = useState(false);

    function addToCart() {
        const cart = localStorage.getItem('cart');
        const cartItems = cart && cart.length ? JSON.parse(cart) : [];
        const cartItem = {
            id: gpu._id,
            item: `${gpu.brand} ${gpu.series} ${gpu.gpuModel}`,
            price: gpu.price.$numberDecimal
        };
        // cartItems.push(gpu._id);
        cartItems.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        // console.log('Item is added to cart');
        setAdded(true);
    }

    return (
        <>
            <div className='py-2 pl-4 bg-gray-200'>
                <Link href='/'>Home&ensp;&gt;&ensp;</Link>
                <Link
                    href='/components/gpus/pages/[page]'
                    as='/components/gpus/pages/1'>
                    GPUs&ensp;&gt;&ensp;
                </Link>
                <span>Item {gpu._id}</span>
            </div>
            <div className='pt-10 px-6 flex flex-col md:flex-row space-x-8'>
                {/* top left is the image section */}
                <div className='md:w-1/2'>
                    <img src={gpu.image} className='max-h-96' />
                </div>

                {/* top right is the description & price */}
                <div className='md:w-1/2 md:pt-8'>
                    <h2 className='mb-4 text-2xl font-medium'>
                        {`${gpu.brand} ${gpu.series} ${gpu.gpuModel}`}
                    </h2>
                    <ul className='mb-2 list-disc list-inside text-lg'>
                        {gpu.descArray.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                    <div className='text-right'>
                        <span className='text-xl font-medium'>
                            ${gpu.price.$numberDecimal}
                        </span>
                        <button
                            onClick={addToCart}
                            className='ml-4 border-2 border-green-500 py-2 px-4 rounded shadow text-lg transition duration-300 transform hover:bg-green-500 hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>
                            Add To Cart
                        </button>
                    </div>
                    {added ? (
                        <Alert setShow={setAdded} message='Item Added' />
                    ) : null}
                </div>
            </div>

            {/* buttom  */}
            <div className='mt-10 px-6'>
                <h2 className='mb-2 text-3xl'>Specs</h2>
                <table className='w-full table-fixed text-lg'>
                    <tbody>
                        <tr className='border-t border-b border-gray-300'>
                            <th scope='row' className='w-2/5 py-2 bg-gray-200'>
                                Brand
                            </th>
                            <td className='w-3/5 pl-2'>{gpu.brand}</td>
                        </tr>
                        <tr className='border-b border-gray-300'>
                            <th scope='row' className='py-2 bg-gray-200'>
                                Series
                            </th>
                            <td className='pl-2'>{gpu.series}</td>
                        </tr>
                        <tr className='border-b border-gray-300'>
                            <th scope='row' className='py-2 bg-gray-200'>
                                Chipset Manufacturer
                            </th>
                            <td className='pl-2'>{gpu.chipsetManufacturer}</td>
                        </tr>
                        <tr className='border-b border-gray-300'>
                            <th scope='row' className='py-2 bg-gray-200'>
                                GPU
                            </th>
                            <td className='pl-2'>{gpu.gpuModel}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export async function getStaticProps(context) {
    let ObjectId = require('mongodb').ObjectId;
    const { db } = await connectToDatabase();

    const gpu = await db
        .collection('gpus')
        .find({ _id: ObjectId(`${context.params.id}`) })
        .toArray();

    return {
        props: {
            gpu: JSON.parse(JSON.stringify(gpu))[0]
        }
    };
}

export async function getStaticPaths() {
    const { db } = await connectToDatabase();

    const gpus = await db.collection('gpus').find({}).toArray();

    const ids = gpus.map((gpu) => gpu._id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));
    return {
        paths,
        fallback: false
    };
}

export default index;
