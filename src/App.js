import {Outlet} from "react-router";
import './App.css'
import TopNav from "./Components/TopNav";
// import { ChakraProvider, extendTheme, VStack, Box } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});


export default function App () {
  return (
  //  <ChakraProvider theme={theme}>
      //{/* <VStack> */}
        <div className="App">
          <TopNav/>
          <div className="page-container">
            <Outlet/>
          </div>
        </div>
      //{/* </VStack> */}
    //{/* </ChakraProvider> */}

  )
}
