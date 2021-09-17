import React from 'react';
import Head from 'next/head';
import Router from 'next/router'; 
import { ChakraProvider } from "@chakra-ui/react"
import { Box, Button, Container, IconButton, Input, InputGroup, InputRightElement, Stack, extendTheme } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          //bg: "linear-gradient(to top right, #010810, #004c68, #010810, #010810, #010810, #010810, #004c68, #010810)",
          bg: "#010810",
          bgRepeat: "no-repeat",
          bgAttachment: "fixed",
          color: "white",
        },
      },
    },
  });

class Home extends React.Component {
    constructor(props) {
        super();
        this.state = { show: false, submitting: false };

        this.togglePasswordView = this.togglePasswordView.bind(this);
        this.login = this.login.bind(this);
    }

    componentDidMount(){
        this.username.focus(); 
     }

    togglePasswordView() {
        this.setState({ show: !this.state.show });
    }

    login() {
        // launch league client
        this.setState({ submitting: true });
        Router.push("/client");
    }

    render() {
        let { show, submitting} = this.state;
        return (
            <ChakraProvider theme={theme}>
                <Container padding="10">
                    <Stack spacing={3}>
                        <Input placeholder="Username" tabIndex={1} ref={(input) => { this.username = input; }} />    
                        <InputGroup>
                            <Input
                                pr="4.5rem"
                                type={show ? "text" : "password"}
                                placeholder="Password"
                                tabIndex={2}
                            />
                            <InputRightElement width="4.5rem">
                                <IconButton icon={show ? <ViewIcon/> : <ViewOffIcon/>} onClick={this.togglePasswordView} variant="ghost" size="sm" />
                            </InputRightElement>
                        </InputGroup>
                        <Button colorScheme="blue" isLoading={submitting} onClick={this.login} tabIndex={3}>Login</Button>
                    </Stack>
                </Container>
            </ChakraProvider>
        );
    }
};

export default Home;
