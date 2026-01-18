import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import theme from "config/theme";
import FavIconProvider from "components/Misc/FavIconProvider";
import Script from "next/script";

function KLSite({ Component, pageProps }: AppProps): JSX.Element {
  const GA_ID = "G-322R2K77NP";

  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider theme={theme}>
        <FavIconProvider>
          {/* Google Analytics (GA4) */}
          {GA_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
              />
              <Script id="ga4" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { send_page_view: true });
                `}
              </Script>
            </>
          )}

          <Component {...pageProps} />
        </FavIconProvider>
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default KLSite;
