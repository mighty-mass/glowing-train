import { h, JSX } from "preact";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <html>
      <head>
        <title>RoadToMillionaire</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="/styles.css" />
        <meta name="theme-color" content="#000000" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Component />
        <script>
          {`if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
              .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
              })
              .catch((error) => {
                console.log('Service Worker registration failed:', error);
              });
          }`}
        </script>
      </body>
    </html>
  );
}