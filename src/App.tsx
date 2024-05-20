import "./App.css";
import Navbar from "./components/Navbar";
import {
  ChakraProvider,
  Box,
  extendTheme,
  CircularProgress,
} from "@chakra-ui/react";
import ShipmentStepper from "./components/ShipmentStepper";
import ShipmentDetailsTable from "./components/ShipmentDetailsTable";
import DropOffAddressCard from "./components/DropOffAddressCard";
import ReportProblemCard from "./components/ReportProblemCard";
import { useShipment } from "./context/ShipmentContext";
import ErrorMessage from "./components/ErrorMessage";

const colors = {
  brand: "#E30613",
  brandDark: "#ca0f1b",
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
  const { showLoader, showErrorMessage } = useShipment();
  return (
    <ChakraProvider theme={extendedtheme} resetCSS>
      <Navbar />
      {showLoader ? (
        <Box
          width="100%"
          height="80dvh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress isIndeterminate color="brand" />
        </Box>
      ) : showErrorMessage ? (
        <Box
          width="100%"
          height="80dvh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ErrorMessage />
        </Box>
      ) : (
        <>
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
        </>
      )}
    </ChakraProvider>
  );
}

export default App;
