import React from 'react';
import Head from 'next/head';
import Router from 'next/router'; 
import { ChakraProvider } from "@chakra-ui/react"
import { Box, Button, Container, IconButton, Image, Input, InputGroup, InputRightElement, Stack, extendTheme } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
            //bg: "linear-gradient(to top right, #010810, #004c68, #010810, #010810, #010810, #010810, #004c68, #010810)",
            bg: "#001324",
            bgRepeat: "no-repeat",
            bgAttachment: "fixed",
            color: "white",
        },
      },
    },
  });

class Client extends React.Component {
    constructor(props) {
        super();
        this.state = { };
    }

    render() {
        return (
            <ChakraProvider theme={theme}>
                <Box borderBottom="1px solid " color="white" p={2} margin={2} marginTop={0}>
                    <Image src="./images/logo.png" boxSize="24px" display="inline"/>
                    <Button height="24px" width="96px" bg="#1E2328" border="2px solid #00668A" _hover={{}}>Play</Button>
                    <Button height="24px" width="96px" bg="#001324" _hover={{}}>Profile</Button>
                    <Button height="24px" width="96px" bg="#001324" _hover={{}}>Collection</Button>
                </Box>
            </ChakraProvider>
        );
    }
};

export default Client;
