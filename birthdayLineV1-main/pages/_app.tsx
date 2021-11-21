import { ChakraProvider } from '@chakra-ui/react'
import themes from '../themes';
import "../themes/styles.css"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={themes}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp