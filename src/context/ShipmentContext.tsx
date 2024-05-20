import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Shipment } from "../types/shipment";
import { ShipmentService } from "../services/ShipmentService";

interface ShipmentContextProps {
  shipment: Shipment;
  setShipment: Dispatch<SetStateAction<Shipment>>;
  trackingNumber: string;
  setTrackingNumber: Dispatch<SetStateAction<string>>;
}

const ShipmentContext = createContext<ShipmentContextProps | undefined>(
  undefined
);

export const ShipmentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [shipment, setShipment] = useState<Shipment>({} as Shipment);
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  useEffect(() => {
    (async () => {
      const shipment = await ShipmentService.fetchShipmentDetails(
        trackingNumber !== "" ? trackingNumber : "6741696"
      );
      setShipment(shipment);
    })();
  }, [trackingNumber]);
  return (
    <ShipmentContext.Provider
      value={{ shipment, setShipment, trackingNumber, setTrackingNumber }}
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
