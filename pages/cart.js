import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Meta from '../components/Meta';

const cart = () => {
    /* 
    should run on client, and cartItems need to be retrieved 
    everytime the page is requested (update it)
    */
    // currently both options 1 & 2 only run once (at built item) on client
    /* option 1.
    const isServer = typeof window === 'undefined';
    let cartItems = [];
    if (!isServer) {
        const cart = localStorage.getItem('cart');
        cartItems = (cart && cart.length) ?? JSON.parse(cart);
    }
    */
    /* option 2.
    let cartItems = [];
    useEffect(() => {
        const cart = localStorage.getItem('cart');
        cartItems = (cart && cart.length) ?? JSON.parse(cart);
    }, []);
    */

    const router = useRouter();
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const cart = localStorage.getItem('cart');
        const currentCartItems = (cart && cart.length) ? JSON.parse(cart) : null;
        if(currentCartItems){
            setCartItems(currentCartItems);
        }
    }, []);

    // calculate total price
    function total() {
        if(cartItems) {
            const prices = cartItems.map(cartItem => parseFloat(cartItem.price));
            const totalPrice = prices.reduce(((sum, price) => sum + price), 0);
            return totalPrice;
        }
        return 0;
    }

    // delete a cart item
    function removeCartItem(cartItemIndex) {
        cartItems.splice(cartItemIndex, 1)
        setCartItems(cartItems);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        router.reload();
    }

    return (
        <>
            <Meta title='Comegg | Cart' />
            <h1 className='my-6 text-4xl text-center font-medium'>
                Shopping Cart
            </h1>
            {/* Cart */}
            <div className='pt-6 grid md:grid-cols-3 justify-items-center'>
                {/* Items */}
                {(cartItems && cartItems.length) ? (
                    cartItems.map((cartItem, itemIndex) => (
                        <div
                            key={cartItem.id}
                            className='relative w-full mb-6 ml-4 border-2 border-gray-200 p-6 px-4 md:col-span-2 md:row-span-1'
                        >
                            {/* Item info */}
                            <div className='pt-2 flex justify-between text-lg font-medium'>
                                <h2>{cartItem.item}</h2>
                                <h2>$ {cartItem.price}</h2>
                            </div>
                            {/* Delete button */}
                            <div className='absolute top-1 right-1'>
                                <button onClick={() => removeCartItem(itemIndex)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className='w-5 text-gray-700'>
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    // No item
                    <div className='mb-6 md:mb-0 md:col-span-2 text-center text-4xl'>
                        <h2>Cart is empty</h2>
                    </div>
                )}
                {/* Cart summary */}
                <div className='w-1/2 mt-4 md:mt-0 p-4 border-2 border-gray-200 md:col-start-3 md:row-start-1 md:row-span-full text-2xl'>
                    <h2 className='mb-2 font-medium'>Summary</h2>
                    <p>Total: ${total()}</p>
                </div>
            </div>
        </>
    );
};

export default cart;
