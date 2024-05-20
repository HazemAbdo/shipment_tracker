export enum SHIPMENT_STATE {
  TICKET_CREATED = "TICKET_CREATED",
  PACKAGE_RECEIVED = "PACKAGE_RECEIVED",
  NOT_YET_SHIPPED = "NOT_YET_SHIPPED",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  RECEIVED_DELIVERY_LOCATION = "RECEIVED_DELIVERY_LOCATION",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  DID_NOT_DELIVERED = "DID_NOT_DELIVERED",
  IN_TRANSIT = "IN_TRANSIT",
}
export interface DropOffAddress {
  firstLine: string;
  city: {
    _id: string;
    name: string;
  };
  zone: {
    _id: string;
    name: string;
  };
  buildingNumber: string;
}

export interface CurrentState {
  state: SHIPMENT_STATE;
  timestamp: string;
}

export interface TransitEvent {
  state: SHIPMENT_STATE;
  timestamp: string;
  hub?: string;
}

export interface Shipment {
  provider: string;
  CurrentStatus: CurrentState;
  PromisedDate: string | null;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: TransitEvent[];
  CreateDate: string;
  isEditableShipment: boolean;
  DropOffAddress: DropOffAddress;
}

export enum COLORSCHEME {
  red = "red",
  green = "green",
  yellow = "yellow",
}
