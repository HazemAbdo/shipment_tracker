// Core i18next library.
import i18n from "i18next";
// Bindings for React: allow components to
// re-render when language changes.
import { initReactI18next } from "react-i18next";

i18n
  // Add React bindings as a plugin.
  .use(initReactI18next)
  // Initialize the i18next instance.
  .init({
    // Config options

    // Specifies the default language (locale) used
    // when a user visits our site for the first time.
    // We use English here, but feel free to use
    // whichever locale you want.
    lng: "ar",

    // Fallback locale used when a translation is
    // missing in the active locale. Again, use your
    // preferred locale here.
    fallbackLng: "en",

    // Enables useful output in the browser’s
    // dev console.
    debug: true,

    // Normally, we want `escapeValue: true` as it
    // ensures that i18next escapes any code in
    // translation messages, safeguarding against
    // XSS (cross-site scripting) attacks. However,
    // React does this escaping itself, so we turn
    // it off in i18next.
    interpolation: {
      escapeValue: false,
    },

    // Translation messages. Add any languages
    // you want here.
    resources: {
      // English
      en: {
        // `translation` is the default namespace.
        // More details about namespaces shortly.
        translation: {
          navbar: {
            main: "Home",
            prices: "Pricing",
            call_sales: "Call Sells",
            track_shipment: "Track Shipment",
            login: "Sign In",
          },
          shipment: {
            drop_off_header: "Drop Off Address",
            report_problem_btn: "Report a Problem",
            report_problem_header: "Is there a problem with your shipment?",
            search_placeholder: "Tracking Number",
            search_label: "Track your shipment",
            stepper: {
              state_created: "The shipment has been created",
              state_received:
                "The shipment has been received from the merchant",
              state_in_transit: "The shipment is out for delivery",
              state_delivered: "sent delivered handed",
            },
            details: {
              card: {
                shipment_id: "Shipment ID",
                last_update: "Last Update",
                merchant_name: "Merchant Name",
                delivery_time: "Delivery Time",
                state: {
                  DELIVERED: "Delivered",
                  TICKET_CREATED: "Ticket Created",
                  PACKAGE_RECEIVED: "Package Received",
                  NOT_YET_SHIPPED: "Not Yet Shipped",
                  OUT_FOR_DELIVERY: "Out For Delivery",
                  RECEIVED_DELIVERY_LOCATION: "Received Delivery Location",
                  CANCELLED: "Cancelled",
                  DID_NOT_DELIVERED: "Did Not Delivered",
                  IN_TRANSIT: "In Transit",
                },
              },
              table: {
                main_header: "shipment details",
                headers: {
                  first: "Branch",
                  second: "Date",
                  third: "Time",
                  fourth: "Details",
                },
              },
            },
          },
          cities: {
            Cairo: "Cairo",
            Giza: "Giza",
            Alexandria: "Alexandria",
            Dakahlia: "Dakahlia",
            "Red Sea": "Red Sea",
            Beheira: "Beheira",
            Fayoum: "Fayoum",
            Gharbiya: "Gharbiya",
            Ismailia: "Ismailia",
            Menofia: "Menofia",
            Minya: "Minya",
            Qaliubiya: "Qaliubiya",
            "New Valley": "New Valley",
            Suez: "Suez",
            Aswan: "Aswan",
            Assiut: "Assiut",
            "Beni Suef": "Beni Suef",
            "Port Said": "Port Said",
            Damietta: "Damietta",
            Sharkia: "Sharkia",
            "South Sinai": "South Sinai",
            "Kafr Al sheikh": "Kafr Al sheikh",
            Matrouh: "Matrouh",
            Luxor: "Luxor",
            Qena: "Qena",
            "North Sinai": "North Sinai",
            Sohag: "Sohag",
          },
        },
      },
      // Arabic
      ar: {
        translation: {
          navbar: {
            main: "الرئيسية",
            prices: "الأسعار",
            call_sales: "كلم المبيعات",
            track_shipment: "تتبع شحنتك",
            login: "تسجيل دخول",
          },
          shipment: {
            drop_off_header: "عنوان التسليم",
            report_problem_btn: "إبلاغ عن مشكلة",
            report_problem_header: "هل توجد مشكلة في شحنتك؟",
            search_placeholder: "رقم التتبع",
            search_label: "تتبع شحنتك",
            stepper: {
              state_created: "تم إنشاء الشحنة",
              state_received: "تم إستلام الشحنة من التاجر",
              state_in_transit: "الشحنة خرجت للتسليم",
              state_delivered: "تم التسليم",
            },
            details: {
              card: {
                shipment_id: "رقم الشحنة",
                last_update: "آخر تحديث",
                merchant_name: "اسم التاجر",
                delivery_time: "موعد التسليم خلال",
                state: {
                  DELIVERED: "تم التسليم",
                  TICKET_CREATED: "تم إنشاء التذكرة",
                  PACKAGE_RECEIVED: "تم استلام الطرد",
                  NOT_YET_SHIPPED: "لم يتم الشحن بعد",
                  OUT_FOR_DELIVERY: "خرجت للتسليم",
                  RECEIVED_DELIVERY_LOCATION: "تم استلام موقع التسليم",
                  CANCELLED: "تم الإلغاء",
                  DID_NOT_DELIVERED: "لم يتم التسليم",
                  IN_TRANSIT: "في مرحلة التوصيل",
                },
              },
              table: {
                main_header: "تفاصيل الشحنة",
                headers: {
                  first: "الفرع",
                  second: "التاريخ",
                  third: "الوقت",
                  fourth: "التفاصيل",
                },
              },
            },
          },
          cities: {
            Cairo: "القاهرة",
            Giza: "الجيزة",
            Alexandria: "الأسكندرية",
            Dakahlia: "الدقهلية",
            "Red Sea": "البحر الأحمر",
            Beheira: "البحيرة",
            Fayoum: "الفيوم",
            Gharbiya: "الغربية",
            Ismailia: "الإسماعلية",
            Menofia: "المنوفية",
            Minya: "المنيا",
            Qaliubiya: "القليوبية",
            "New Valley": "الوادي الجديد",
            Suez: "السويس",
            Aswan: "اسوان",
            Assiut: "اسيوط",
            "Beni Suef": "بني سويف",
            "Port Said": "بورسعيد",
            Damietta: "دمياط",
            Sharkia: "الشرقية",
            "South Sinai": "جنوب سيناء",
            "Kafr Al sheikh": "كفر الشيخ",
            Matrouh: "مطروح",
            Luxor: "الأقصر",
            Qena: "قنا",
            "North Sinai": "شمال سيناء",
            Sohag: "سوهاج",
          },
        },
      },
    },
  });

export default i18n;
