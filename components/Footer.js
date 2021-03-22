const Footer = () => {
    return (
        <footer className='min-w-full h-40 mt-10 py-3 bg-green-600 text-white text-center flex flex-col justify-between'>
            <div>
                Icons made by{' '}
                <a href='https://www.freepik.com' title='Freepik'>
                    Freepik
                </a>{' '}
                from{' '}
                <a href='https://www.flaticon.com/' title='Flaticon'>
                    www.flaticon.com
                </a>
            </div>
            <div>
                <h2 className='leading-relaxed'>
                    Disclaimer: This site does NOT involve any real trading
                    <br/>
                    <span> (banner images, gpu images and info are from{' '}
                        <a href='https://www.newegg.com/' title='Newegg'>
                            Newegg)
                        </a>
                    </span>
                </h2>
            </div>
            <div>
                <p>Copyright &copy; 2021, Comegg</p>
            </div>
        </footer>
    );
};

export default Footer;
