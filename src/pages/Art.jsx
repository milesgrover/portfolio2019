import React from "react";
import { Page, Heading1, Paragraph } from "../components";

class ArtPage extends React.Component {
    render() {
        return (
            <Page current="Art">
                <Heading1>art projects</Heading1>
                <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing&nbsp;elit.</Paragraph>
            </Page>
        );
    }
}

export default ArtPage;