import { Route, Routes } from "react-router-dom";
import { Display } from "../features/components/display/display";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Display />}></Route>
    </Routes>
  );
}
