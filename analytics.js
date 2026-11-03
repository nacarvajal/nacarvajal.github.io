/* Google Analytics 4 configuration.
 * Replace the empty ID with your genuine GA4 Web data stream Measurement ID.
 * Until configured, this file sends NO data and loads NO Google scripts.
 */
(() => {
  "use strict";

  const MEASUREMENT_ID = ""; // Example format: G-XXXXXXXXXX (do not use this example).
  const configured = /^G-[A-Z0-9]{6,}$/i.test(MEASUREMENT_ID);

  if (configured) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID);

    const tag = document.createElement("script");
    tag.async = true;
    tag.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(MEASUREMENT_ID);
    document.head.appendChild(tag);
  }

  // These events describe a request to open WhatsApp, not a confirmed conversation.
  // Do not transmit visitor names, journal names or the pre-filled WhatsApp message.
  window.trackWhatsAppIntent = function () {
    if (!configured || typeof window.gtag !== "function") return;
    window.gtag("event", "generate_lead", {
      lead_source: "whatsapp_form",
      transport_type: "beacon"
    });
    window.gtag("event", "whatsapp_click", {
      link_domain: "wa.me",
      link_type: "form",
      transport_type: "beacon"
    });
  };
})();
