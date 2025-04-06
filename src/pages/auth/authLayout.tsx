import Header from "../../components/layout/header";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="flex items-center justify-center bg-secondary min-h-screen w-full relative overflow-hidden">
      <Header />
      <div className="bg-white backdrop-blur-md p-8 rounded-xl shadow-2xl shadow-shadow border border-white/20 max-w-md w-full mx-4 z-10">
        <Outlet />
      </div>
    </main>
  );
}
