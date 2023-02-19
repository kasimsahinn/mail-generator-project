import RootLayout from '@/app/layout';
import { store } from '@/stores';
import '@/styles/fonts.scss';
import '@/styles/globals.scss';
import { NextPageWithLayout } from '@/types';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: {
    [key: string]: unknown;
  };
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Mathility</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      
        <Provider store={store}  >
          <RootLayout
          >
            {getLayout(<Component {...pageProps} />)}
          </RootLayout>
        </Provider>
    </>
  );
}
