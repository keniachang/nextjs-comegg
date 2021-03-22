const Alert = ({ setShow, message }) => {
    return (
        <div className='relative my-4 p-4 bg-green-500 rounded text-white'>
            <div className='text-lg font-medium text-center'>
                <span>{message}</span>
            </div>
            <button
                onClick={() => setShow(false)}
                className='absolute top-0 right-0 mr-2 bg-transparent text-2xl font-semibold leading-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50'>
                <span>x</span>
            </button>
        </div>
    );
};

export default Alert;
