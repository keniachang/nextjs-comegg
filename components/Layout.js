import Meta from './Meta';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <main className='container min-w-full min-h-screen'>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
