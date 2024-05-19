import "./App.css";
import Navbar from "./components/Navbar";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ShipmentStepper from "./components/ShipmentStepper";
const colors = {
  brand: "#E30613",
  text: {
    bold: "#111619",
    light: "#A1D6FF",
  },
  border: "#E9E9E9",
};

const fonts = {
  heading: `'Cairo','Open Sans', sans-serif`,
  body: `'Cairo','Raleway', sans-serif`,
};
function App() {
  const extendedtheme = extendTheme({ colors, fonts });
  return (
    <ChakraProvider theme={extendedtheme} resetCSS>
      <Navbar />
      <ShipmentStepper />
    </ChakraProvider>
  );
}

export default App;
