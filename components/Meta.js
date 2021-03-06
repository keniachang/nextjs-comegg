import Head from 'next/head';

const Meta = ({ title }) => {
    return (
        <Head>
            <link
                rel='icon'
                type='image/png'
                sizes='32x32'
                href='/favicon-32x32.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='16x16'
                href='/favicon-16x16.png'
            />
            <link
                rel='apple-touch-icon'
                sizes='180x180'
                href='/apple-touch-icon.png'
            />
            <link rel='manifest' href='/manifest.json' />
            <link
                rel='mask-icon'
                href='/safari-pinned-tab.svg'
                color='#5bbad5'
            />
            <meta name='theme-color' content='#ffffff' />
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
            />
            <meta name='description' content='Buy graphic cards' />
            <meta name='keywords' content='Graphic Cards' />
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: 'Comegg'
};

export default Meta;
