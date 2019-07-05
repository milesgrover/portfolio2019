import React from "react";
import styled from "styled-components";
import { Page, Heading1, Paragraph, ImportantLinks } from "../components";

const totalYears = new Date().getFullYear() - 2004 - 1;
const msYears = new Date().getFullYear() - 2009 - 1;

const importantLinks = [
    {
        name: "miles@milesgrover.com",
        url: "mailto:miles@milesgrover.com",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/milesgrover/",
    },
    {
        name: "Github",
        url: "https://github.com/milesgrover",
    },
]

class HomePage extends React.Component {
    render() {
        return (
            <Page current="Me">
                <Heading1>Hi, I'm Miles Grover.</Heading1>

                <Paragraph>
                    I've been building UI for more than {totalYears} years, with the past {msYears} at spent at Microsoft. Most of that time, I've been working in the web technology stack, though I also worked on the front-end of apps for Windows and Windows Phone.
                </Paragraph>
                <Paragraph>
                    I have a lot of experience as a front-end engineer and as a UI designer. I also make a lot of art!
                </Paragraph>
                <Paragraph>
                    In my personal life, I usually have pink hair, I enjoy playing the ukulele, and I'm pretty into goofy patterns from the 90s.
                </Paragraph>
                <ImportantLinksLayout links={importantLinks} />
            </Page>
        );
    }
}

const ImportantLinksLayout = styled(ImportantLinks)`
    margin-bottom: 10px;
`;

export default HomePage;