enum ShipmentState {
  TICKET_CREATED = "TICKET_CREATED",
  PACKAGE_RECEIVED = "PACKAGE_RECEIVED",
  NOT_YET_SHIPPED = "NOT_YET_SHIPPED",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  RECEIVED_DELIVERY_LOCATION = "RECEIVED_DELIVERY_LOCATION",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  DID_NOT_DELIVERED = "DID_NOT_DELIVERED",
}

export interface CurrentStatus {
  state: ShipmentState;
  timestamp: string;
}

export interface TransitEvent {
  state: ShipmentState;
  timestamp: string;
  hub?: string;
}

export interface Shipment {
  provider: string;
  CurrentStatus: CurrentStatus;
  PromisedDate: string | null;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: TransitEvent[];
  CreateDate: string;
  isEditableShipment: boolean;
}
