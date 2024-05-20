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
              },
              table: {},
            },
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
              },
              table: {},
            },
          },
        },
      },
    },
  });

export default i18n;
