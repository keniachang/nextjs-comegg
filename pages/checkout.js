const checkout = () => {
    function onSubmit(e) {
        e.preventDefault();
        localStorage.removeItem('cart');
    }

    return (
        <div className='py-6'>
            <h2 className='text-4xl font-bold text-center'>Checkout</h2>
            <div className='max-w-md mt-8 mx-auto'>
                <form onSubmit={onSubmit}>
                    <div className='grid grid-cols-1 gap-6'>
                        <label className='block'>
                            <span className='text-gray-700'>Name on Card</span>
                            <input type='text' className='block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50' />
                        </label>
                        <label className='block'>
                            <span className='text-gray-700'>Card Number</span>
                            <input type='text' className='block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50' placeholder='1111-2222-3333-4444' />
                        </label>
                        <label className='block'>
                            <span className='text-gray-700'>Expiration (mm/yy)</span>
                            <input type='text' className='block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50' placeholder='03/21' />
                        </label>
                        <label className='block'>
                            <span className='text-gray-700'>Security Code</span>
                            <input type='text' className='block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50' placeholder='123' />
                        </label>
                        <input type="submit" value="Checkout" className='block w-full mt-1 py-2 bg-green-500 rounded shadow-sm text-white hover:bg-green-400  focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default checkout;
