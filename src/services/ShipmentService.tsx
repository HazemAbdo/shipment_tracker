import { Shipment } from "../types/shipment";

const API_URL = import.meta.env.VITE_API_URL;

export interface ShipmentService {
  fetchShipmentDetails: (trackingNumber: string) => Promise<Shipment | null>;
}

export const ShipmentService: ShipmentService = {
  fetchShipmentDetails: async (
    trackingNumber: string
  ): Promise<Shipment | null> => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "Accept-Language": "ar", // Set language header if needed
    });
    try {
      const response = await fetch(`${API_URL}/${trackingNumber}?lang=ar`, {
        headers,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let shipment: Shipment = await response.json();
      shipment = {
        ...shipment,
        DropOffAddress: {
          firstLine:
            "امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك ٢٢",
          city: {
            _id: "FceDyHXwpSYYF9zGW",
            name: "Cairo",
          },
          zone: {
            _id: "KxzeJ5RZEszYYbok9",
            name: "Cairo",
          },
          buildingNumber: "0",
        },
      };
      return shipment;
    } catch (error) {
      console.error("Fetch error:", error);
      return null;
    }
  },
};
