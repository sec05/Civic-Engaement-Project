import "../styles/globalStyles.scss"
import { ChakraProvider } from "@chakra-ui/core"
import 'bootstrap/dist/css/bootstrap.css';
import Head from "next"
function MyApp({ Component, pageProps }) {
  return <ChakraProvider resetCSS><Component {...pageProps} /></ChakraProvider> 
}

export default MyApp
