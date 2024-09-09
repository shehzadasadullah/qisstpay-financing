import "../styles/globals.css"; // Include your global styles here

function MyApp({ Component, pageProps }) {
  // If a page has a layout defined, use it, otherwise use a fallback (empty layout)
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
