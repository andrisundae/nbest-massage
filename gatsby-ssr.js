// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  // Google Tag Manager untuk HEAD
  setHeadComponents([
    <script
      key="gtm-head"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PKRXKLHR');`,
      }}
    />,
  ]);

  // Google Tag Manager (noscript) untuk AFTER BODY
  setPreBodyComponents([
    <noscript
      key="gtm-body"
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKRXKLHR"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />,
  ]);
};
