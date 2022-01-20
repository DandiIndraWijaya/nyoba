/* eslint-disable react/no-danger */
import React from 'react';
import Document, {
    Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/theme';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* PWA primary color */}
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    
                    {/* 
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-WT4J8KWQMG" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WT4J8KWQMG');
        `,
                        }}
                    />
                    */
                    }
                    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-602351423" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-602351423');
                    `,
                        }}
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                    window.addEventListener('DOMContentLoaded', function(event){
                        document.querySelectorAll("a[href*='wa.me']").forEach(function(e) {
                            e.addEventListener('click', function(e) {
                                gtag('event', 'conversion', {'send_to': 'AW-602351423/HbIICMWX_f8CEL_OnJ8C'});
                            });
                        });
                    })`,
                    }}
                    />

                    <script dangerouslySetInnerHTML={{
                        __html: `
                    document.querySelector("div > button.jss315").addEventListener('click', function() {
                        gtag('event', 'conversion', {'send_to': 'AW-602351423/SfE8CNz754ADEL_OnJ8C'});
                    });`
                    }}
                    />
                    
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Nunito&family=Poppins:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};