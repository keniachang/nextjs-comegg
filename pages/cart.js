import Meta from '../components/Meta';

const cart = () => {
    return (
        <>
            <Meta title='Comegg | Cart' />
            <h1 className='my-6 text-4xl text-center font-medium'>
                Shopping Cart (10 Items)
            </h1>
            <div className='pt-6 grid grid-cols-3 justify-items-center'>
                <div className='col-span-2'>
                    <div className='mb-6'>Item 1</div>
                    <div className='mb-6'>Item 2</div>
                    <div className='mb-6'>Item 3</div>
                    <div className='mb-6'>Item 4</div>
                    <div className='mb-6'>Item 5</div>
                    <div className='mb-6'>Item 6</div>
                    <div className='mb-6'>Item 7</div>
                    <div className='mb-6'>Item 8</div>
                    <div className='mb-6'>Item 9</div>
                    <div className='mb-6'>Item 10</div>
                </div>
                <div className='text-2xl'>
                    <h2 className='mb-2 font-medium'>Summary</h2>
                    <p>Estimated Total: $513.84</p>
                </div>
            </div>
        </>
    );
};

export default cart;
