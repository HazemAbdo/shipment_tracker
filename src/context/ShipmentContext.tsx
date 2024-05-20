import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Shipment, SHIPMENT_STATE } from "../types/shipment";
import { ShipmentService } from "../services/ShipmentService";

interface ShipmentContextProps {
  shipment: Shipment;
  setShipment: Dispatch<SetStateAction<Shipment>>;
  trackingNumber: string;
  setTrackingNumber: Dispatch<SetStateAction<string>>;
  colorScheme: string;
  showLoader: boolean;
  showErrorMessage: boolean;
}

const ShipmentContext = createContext<ShipmentContextProps | undefined>(
  undefined
);

export const ShipmentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [shipment, setShipment] = useState<Shipment>({} as Shipment);
  const [trackingNumber, setTrackingNumber] = useState<string>("6741696");
  const [colorScheme, setColorScheme] = useState("red");
  const [showLoader, setShowLoader] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  useEffect(() => {
    if (trackingNumber) {
      (async () => {
        setShowLoader(true);
        setShowErrorMessage(false);
        const shipment = await ShipmentService.fetchShipmentDetails(
          trackingNumber
        );
        if (!shipment) {
          setShowErrorMessage(true);
        } else {
          setShipment(shipment);
          setColorScheme(
            shipment.CurrentStatus?.state === SHIPMENT_STATE.DELIVERED
              ? "green"
              : shipment.CurrentStatus?.state ===
                SHIPMENT_STATE.DID_NOT_DELIVERED
              ? "yellow"
              : "red"
          );
        }
        setShowLoader(false);
      })();
    }
  }, [trackingNumber]);

  return (
    <ShipmentContext.Provider
      value={{
        shipment,
        setShipment,
        trackingNumber,
        setTrackingNumber,
        colorScheme,
        showLoader,
        showErrorMessage,
      }}
    >
      {children}
    </ShipmentContext.Provider>
  );
};

export const useShipment = (): ShipmentContextProps => {
  const context = useContext(ShipmentContext);
  if (!context) {
    throw new Error("useShipment must be used within a ShipmentProvider");
  }
  return context;
};
