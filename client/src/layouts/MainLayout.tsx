import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="h-dvh flex flex-col bg-white overflow-hidden">
      {/* Navbar */}
      <header className="h-20 shrink-0">
        <Navbar />
      </header>

      {/* Scrollable Content Area */}
      <main className="flex-1 overflow-y-auto px-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="shrink-0 border-t py-4 text-center px-16">
        <p>Copyright © 2026</p>
      </footer>
    </div>
  );
};

export default MainLayout;
