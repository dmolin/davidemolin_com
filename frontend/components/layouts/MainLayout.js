import Head from "next/head";
// import styled from "styled-components";
import NavBar from "/components/NavBar";

const MainLayout = ({ children, _router }) => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Davide Molin - Homepage</title>
      </Head>

      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;
