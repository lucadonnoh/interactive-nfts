import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
export default props => {
    return (
        <Container>
            <Head>
                <title>INFT</title>
            </Head>
            {props.children}
        </Container>
    )
}