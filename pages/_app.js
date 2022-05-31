import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  // Bootstrap import
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      {/* Tiny slider import */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
      <Component {...pageProps} />
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>
    </>
  )
}

export default MyApp
