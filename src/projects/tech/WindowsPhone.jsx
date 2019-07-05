import React from "react";
import styled from "styled-components";
import { HeadingProjects, TechnologiesUsed, Summary, Paragraph, Carousel } from "../../components";
import Cortana from "../../assets/images/hero/winphone-cortana.jpg";
import Cortana2 from "../../assets/images/hero/winphone-cortana2.jpg";
import Messaging from "../../assets/images/hero/winphone-messaging.jpg";
import SIPEn from "../../assets/images/hero/winphone-sip-en.jpg";
import SIPRu from "../../assets/images/hero/winphone-sip-ru.jpg";
import SIPJp from "../../assets/images/hero/winphone-sip-jp.jpg";
import SIPCh from "../../assets/images/hero/winphone-sip-ch.jpg";
import { sizes } from "../../constants";

const techs = [
    {
        name: "XML",
        usage: "primary",
    },
    {
        name: "XAML",
        usage: "primary",
    },
    {
        name: "CSharp",
        usage: "secondary",
    },
]

const heroesList = [
    {
        image: Cortana,
        title: "WP Cortana app",
    },
    {
        image: Cortana2,
        title: "Cortana search results",
    },
    {
        image: Messaging,
        title: "WP Messaging app",
    },
    {
        image: SIPEn,
        title: "English keyboard",
    },
    {
        image: SIPRu,
        title: "Russian keyboard",
    },
    {
        image: SIPJp,
        title: "Japanese keyboard",
    },
    {
        image: SIPCh,
        title: "Chinese Bopomofo keyboard",
    },
]

class WindowsPhoneBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <HeadingProjectsLayout>Windows &amp; Windows Phone</HeadingProjectsLayout>
                <TechnologiesUsedLayout techs={techs} compact />
                <SummaryLayout>
                    <Paragraph>
                        I worked on the front-end of the Windows Phone OS from 2009 - 2013. My team was part of the design organization, and our charter was to polish the UI to perfectly match the UI and UX designs in the shipping product.
                    </Paragraph>
                    <Paragraph>
                        I worked on many parts of the system, including the Cortana app, the Messaging app, and the many different software input panels (mostly keyboards) such as English, Russian, Japanese, and Chinese.
                    </Paragraph>
                    <Paragraph>
                        Later in my time on this project, I was promoted to be one of the managers of a team of 25 people polishing the UI. When the Windows and Windows Phone organizations merged, the team moved on to polishing UI for Windows 8 and then Windows 10.
                    </Paragraph>
                </SummaryLayout>
                <CarouselLayout heroes={heroesList} {...this.props} />
            </div>
        );
    }
}

const WindowsPhone = styled(WindowsPhoneBase)`
    display: grid;
    min-height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content min-content 1fr;
    grid-gap: 15px;
    @media (min-width: ${sizes.breakpoints.lg}) {
        grid-template-columns: 1fr 480px;
        grid-template-rows: min-content min-content 1fr;
    }
`;

const HeadingProjectsLayout = styled(HeadingProjects)`
    @media (min-width: ${sizes.breakpoints.lg}) {
        grid-column: 1 / 3;
    }
`;

const TechnologiesUsedLayout = styled(TechnologiesUsed)`
@media (min-width: ${sizes.breakpoints.lg}) {
    grid-column: 1 / 1;
    grid-row: 2 / 2;
}
`;

const SummaryLayout = styled(Summary)`
    overflow: auto;
@media (min-width: ${sizes.breakpoints.lg}) {
    grid-column: 1 / 1;
    grid-row: 3 / 3;
}
`;

const CarouselLayout = styled(Carousel)`
    width: 100%;
    max-width: 480px;
    max-height: 800px;
    justify-self: center;
    > div {
        padding-top: 60%;
        > div {
            top: 0;
        }
    }
    @media (min-width: ${sizes.breakpoints.lg}) {
        height: 800px;
        box-sizing: border-box;
        grid-column: 2 / 2;
        grid-row: 2 / 4;
    }
`;

export default WindowsPhone;