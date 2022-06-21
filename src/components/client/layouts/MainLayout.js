import NavBar from "@/client/NavBar";

const MainLayout = ({ children, _router }) => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="min-h-screen pt-12">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
