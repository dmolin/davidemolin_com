import Head from "next/head";
// import styled from "styled-components";
import NavBar from "@/client/NavBar";

const MainLayout = ({ children, _router }) => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;
