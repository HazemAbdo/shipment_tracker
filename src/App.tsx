import "./App.css";
import Navbar from "./components/Navbar";
import {
  ChakraProvider,
  Box,
  extendTheme,
} from "@chakra-ui/react";
import ShipmentStepper from "./components/ShipmentStepper";
import ShipmentDetailsTable from "./components/ShipmentDetailsTable";
import DropOffAddressCard from "./components/DropOffAddressCard";
import ReportProblemCard from "./components/ReportProblemCard";

const colors = {
  brand: "#E30613",
  brandDark: "#6b0108",
  text: {
    bold: "#111619",
    light: "#667085",
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
      <Box
        py={{ base: 4, md: 6 }}
        px={{ base: 8, xl: 32, lg: 24 }}
        display={{ base: "flex", xl: "grid" }}
        gridTemplateColumns="1fr 2fr"
        gridTemplateRows="auto auto"
        gridTemplateAreas=" 'drop-off-address table' 'report-problem table' "
        gap={8}
        flexDirection={{
          base: "column",
          xl: "unset",
        }}
      >
        <ShipmentDetailsTable />
        <DropOffAddressCard />
        <ReportProblemCard />
      </Box>
    </ChakraProvider>
  );
}

export default App;
