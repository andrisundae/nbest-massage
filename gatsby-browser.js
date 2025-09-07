/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "@fontsource/nunito" // Mengimpor font Nunito
import "./src/styles/global.css"

export const onRouteUpdate = ({ location }) => {
  if (typeof window === "undefined" || !window.dataLayer) return
  window.dataLayer.push({
    event: "page_view",
    page_path: location.pathname + (location.search || ""),
    page_location: window.location.href,
    page_title: document.title,
  })
}
