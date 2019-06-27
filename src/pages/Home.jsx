import React from "react";
import { Page, Heading1, Paragraph } from "../components";

const totalYears = new Date().getFullYear() - 2004 - 1;
const msYears = new Date().getFullYear() - 2009 - 1;

class HomePage extends React.Component {
    render() {
        return (
            <Page current="Me">
                <Heading1>Hi, I'm Miles Grover.</Heading1>

                <Paragraph>
                    I've been building UI for more than {totalYears} years, with the past {msYears} at spent at Microsoft. Most of that time, I've been working in the web technology stack, though I also worked on the front-end of apps for Windows and Windows Phone.
                </Paragraph>
                <Paragraph>
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </Paragraph>
                <Paragraph>
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </Paragraph>
                <Paragraph>
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </Paragraph>
                <Paragraph>
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </Paragraph>
                <Paragraph>
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </Paragraph>
                <Paragraph>
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                </Paragraph>
            </Page>
        );
    }
}

export default HomePage;