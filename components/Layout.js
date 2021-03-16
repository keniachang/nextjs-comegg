import Meta from './Meta';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <header>Navbar</header>
            <main>{children}</main>
            <footer>
                <div>
                    Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
                <div>
                    <p>Copyright &copy; 2021, Comegg</p>
                </div>
            </footer>
        </>
    );
};

export default Layout;
