import '/styles/global.css'
import Head from "next/head";

import MainLayout from "@/client/layouts/MainLayout";

const App = ({ Component, pageProps, router }) => {
  const Layout = Component?.layout || MainLayout;
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Davide Molin</title>
      </Head>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </div>
  );
};

export default App;
