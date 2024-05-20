import { DropOffAddress } from "../types/shipment";

export const formatLastUpdateDate = (
  dateString: string,
  locale: string
): string => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  const dateFormatter = new Intl.DateTimeFormat(
    locale == "ar" ? "ar-EG" : "en-US",
    {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }
  );
  return dateFormatter.format(date);
};
export const formatDeliveryTimeDate = (
  dateString: string,
  locale: string
): string => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  const dateFormatter = new Intl.DateTimeFormat(
    locale == "ar" ? "ar-EG" : "en-US",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );
  return dateFormatter.format(date);
};

export const formatDetailsTableDate = (
  dateString: string,
  locale: string
): string => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  const dateFormatter = new Intl.DateTimeFormat(
    locale == "ar" ? "ar-EG" : "en-US",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );
  return dateFormatter.format(date);
};

export const formatDetailsTableTime = (
  dateString: string,
  locale: string
): string => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  const dateFormatter = new Intl.DateTimeFormat(
    locale == "ar" ? "ar-EG" : "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }
  );
  return dateFormatter.format(date);
};

