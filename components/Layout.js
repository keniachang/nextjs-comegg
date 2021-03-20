import Meta from './Meta';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <h2 className='my-6 py-2 bg-red-500 text-5xl leading-relaxed text-gray-100 font-bold text-center'>
                Disclaimer: This site does NOT involve real trading
                <br/>
                <span> (banner images, gpu images and info are from newegg)</span>
            </h2>
            <main className='container min-w-full min-h-screen'>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
