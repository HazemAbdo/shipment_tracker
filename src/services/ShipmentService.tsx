import { Shipment } from "../types/shipment";

const API_URL = import.meta.env.VITE_API_URL;

export interface ShipmentService {
  fetchShipmentDetails: (trackingNumber: string) => Promise<Shipment>;
}

export const ShipmentService: ShipmentService = {
  fetchShipmentDetails: async (trackingNumber: string): Promise<Shipment> => {
    try {
      const response = await fetch(`${API_URL}/${trackingNumber}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const shipment: Shipment = await response.json();
      return shipment;
    } catch (error) {
      console.error("Fetch error:", error);
      return {} as Shipment;
    }
  },
};
