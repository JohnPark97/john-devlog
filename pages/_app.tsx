import { AppProps } from 'next/app';
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from 'next/head';
import Layout from '@components/IconLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
