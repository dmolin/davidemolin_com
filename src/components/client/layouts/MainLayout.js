import NavBar from "@/client/NavBar";
import { Analytics } from "@vercel/analytics/next";

const MainLayout = ({ children, _router }) => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="min-h-screen pt-12">
        {children}
        <Analytics />
      </div>
    </div>
  );
};

export default MainLayout;
