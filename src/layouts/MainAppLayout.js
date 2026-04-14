import React from 'react'
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

export default function MainAppLayout() {
  return (
    <>
      <Menu />
      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  )
}
