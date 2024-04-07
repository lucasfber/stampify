import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Cards from "./pages/Cards";
import Promotions from "./pages/Promotions";
import Customers from "./pages/Customers";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Dashboard />} />
            <Route path="cartoes" element={<Cards />} />
            <Route path="clientes" element={<Customers />} />
            <Route path="promocoes" element={<Promotions />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
