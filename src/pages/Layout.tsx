import { Outlet } from "react-router-dom";
import { Footer } from "../Components";

export default function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
