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
}

const ShipmentContext = createContext<ShipmentContextProps | undefined>(
  undefined
);

export const ShipmentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [shipment, setShipment] = useState<Shipment>({} as Shipment);
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [colorScheme, setColorScheme] = useState("red");
  useEffect(() => {
    (async () => {
      const shipment = await ShipmentService.fetchShipmentDetails(
        trackingNumber !== "" ? trackingNumber : "6741696"
      );
      setShipment(shipment);
    })();
  }, [trackingNumber]);

  useEffect(() => {
    setColorScheme(
      shipment.CurrentStatus?.state === SHIPMENT_STATE.DELIVERED
        ? "green"
        : shipment.CurrentStatus?.state === SHIPMENT_STATE.DID_NOT_DELIVERED
        ? "yellow"
        : "red"
    );
  }, [shipment]);

  return (
    <ShipmentContext.Provider
      value={{
        shipment,
        setShipment,
        trackingNumber,
        setTrackingNumber,
        colorScheme,
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
