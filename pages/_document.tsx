import Document, { Head, Html, Main, NextScript } from 'next/document';
import { createGetInitialProps } from '@mantine/next';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
    static getInitialProps = getInitialProps;

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://use.typekit.net/ehh6oiv.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
