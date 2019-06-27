import React from "react";
import { Page, Heading1, Paragraph } from "../components";

class DesignPage extends React.Component {
    render() {
        return (
            <Page current="Design">
                <Heading1>design projects</Heading1>
                <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing&nbsp;elit.</Paragraph>
            </Page>
        );
    }
}

export default DesignPage;