export const pushDL = obj => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(obj)
  } else if (process.env.NODE_ENV !== "production") {
    console.debug("[dataLayer mock]", obj)
  }
}

// Contoh fungsi event "purchase" (Google Ads lewat GTM)
export const trackPurchase = ({ value, currency = "IDR", transaction_id }) => {
  pushDL({
    event: "purchase",
    value,
    currency,
    transaction_id,
  })
}

// Contoh fungsi event "lead" (form submit sukses)
export const trackLead = ({ lead_id, value, currency = "IDR" } = {}) => {
  pushDL({
    event: "lead",
    lead_id,
    value,
    currency,
  })
}
