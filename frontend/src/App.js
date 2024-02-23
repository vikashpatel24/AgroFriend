import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Crop from "./components/featuresInput/Crop";
import Fertilizer from "./components/featuresInput/Fertilizer";
import Disease from "./components/featuresInput/Disease";
import Features from "./components/Features";
import Integrations from "./components/Integrations";
import About from "./components/About";
import Contact from "./components/Contact";
import Background from "./components/Background";
import UnderDevelopment from "./components/UnderDevelopment";
import DiseaseResult from "./components/featuresOutput/DiseaseResult";
import FertilizerResult from "./components/featuresOutput/FertilizerResult";
import CropResult from "./components/featuresOutput/CropResult";
import Weather from "./components/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/crop", element: <Crop /> },
      { path: "/crop-result", element: <CropResult /> },
      { path: "/fertilizer", element: <Fertilizer /> },
      { path: "/fertilizer-result", element: <FertilizerResult /> },
      { path: "/disease", element: <Disease /> },
      { path: "/disease-result", element: <DiseaseResult /> },
      { path: "/features", element: <Features /> },
      { path: "/integrations", element: <Integrations /> },
      { path: "/weather", element: <Weather /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/bg", element: <Background /> },
      { path: "/ud", element: <UnderDevelopment /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
