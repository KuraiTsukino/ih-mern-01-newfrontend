import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      <div class="flex flex-col h-screen justify-between">
        <Header />

        <main class="mb-auto">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
