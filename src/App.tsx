import "./App.css";
import Create from "./pages/Create";
import Navbar from "./pages/Navbar";
import Cart from "./pages/Cart";
import LanguageSelector from "./components/LanguageSelector";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import i18n, { t } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "dayjs/locale/ro";
import "dayjs/locale/ru";
import { createContext, useState } from "react";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["navigator"],
    },
    backend: {
      loadPath: "/assets/locale/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
  });

export const CartContext = createContext<any>(null);

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Create />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="*" element={<p>There's nothing here: 404!</p>} />
  </Routes>
);

function App() {
  const [currentComanda, setCurrentComanda] = useState<any>(null);

  const addToCart = (item: any) => {
    setCurrentComanda((prevComanda: any) => [...(prevComanda ?? []), item]);
  };

  return (
    <CartContext.Provider
      value={{ currentComanda, setCurrentComanda, addToCart }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
