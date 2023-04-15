import React from "react";
import { AppRouter } from "../approutes/approutes";
import { Aside } from "../features/components/aside/aside";
import { Logo } from "../features/components/logo/logo";
import "./App.css";

export function App() {
  return (
    <main className="app">
      <Aside></Aside>
      <Logo></Logo>
      <AppRouter></AppRouter>
    </main>
  );
}
