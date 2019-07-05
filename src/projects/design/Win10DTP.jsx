import React from "react";
import styled from "styled-components";
import { HeadingProjects, Summary, Paragraph, Carousel } from "../../components";
import { sizes } from "../../constants";

import OriginalWin32 from "../../assets/images/hero/dtp/dtp-win32.gif";
import OriginalWin8 from "../../assets/images/hero/dtp/dtp-win8.gif";
import OriginalPhone from "../../assets/images/hero/dtp/dtp-winphone.gif";
import Explore1 from "../../assets/images/hero/dtp/dtp-exp-1.png";
import Explore2 from "../../assets/images/hero/dtp/dtp-exp-2.png";
import Explore3 from "../../assets/images/hero/dtp/dtp-exp-3.png";
import Explore4 from "../../assets/images/hero/dtp/dtp-exp-4.png";
import Explore5 from "../../assets/images/hero/dtp/dtp-exp-5.png";
import Explore6 from "../../assets/images/hero/dtp/dtp-exp-6.png";
import Explore7 from "../../assets/images/hero/dtp/dtp-exp-7.png";
import Explore8 from "../../assets/images/hero/dtp/dtp-exp-8.png";
import SolutionDate from "../../assets/images/hero/dtp/dtp-date-solution.gif";
import SolutionTime from "../../assets/images/hero/dtp/dtp-time-solution.gif";
import SolutionConstrained from "../../assets/images/hero/dtp/dtp-constrained.png";
import Solution24hr from "../../assets/images/hero/dtp/dtp-24hr.png";
import VisualDate from "../../assets/images/hero/dtp/dtp-date-visual.gif";
import VisualTime from "../../assets/images/hero/dtp/dtp-time-visual.gif";

const heroesList = [
    {
        type: "grid",
        items: [
            {
                image: OriginalWin32,
                desc: "Win32"
            },
            {
                image: OriginalWin8,
                desc: "Windows 8"
            },
            {
                image: OriginalPhone,
                desc: "Windows Phone"
            },
        ],
        caption: "I started by analyzing the previous solutions from Windows 8, Windows Phone, and the old-school Win32 control."
    },
    {
        type: "grid",
        bgColor: "#ccc",
        items: [
            {
                image: Explore8,
            },
            {
                image: Explore6,
            },
            {
                image: Explore5,
            },
            {
                image: Explore7,
            },
            {
                image: Explore1,
            },
            {
                image: Explore4,
            },
            {
                image: Explore2,
            },
            {
                image: Explore3,
            },
        ],
        cols: "4",
        rows: "2",
        caption: "I then explored a number of different possible interactions, got feedback from my peers, and prototyped some of the more promising options."
    },
    {
        type: "grid",
        bgColor: "#ccc",
        items: [
            {
                image: SolutionDate,
                desc: "my final date picker solution",
            },
            {
                image: SolutionTime,
                desc: "my final time picker solution",
            },
            {
                image: SolutionConstrained,
                desc: "date picker with constrained timeframe",
            },
            {
                image: Solution24hr,
                desc: "24hr time picker",
            },
        ],
        cols: "4",
        rows: "1",
        caption: "The prototype proved very useful to get a sense of how my on-paper ideas translated into actual interaction, and revealed a number of nuances I hadn't considered at first. As I arrived at my solution, I made sure to think through touch vs. mouse interaction, alternate time formats, situations where the timeframe would be constrained, what increments of time a developer might want to specify for the control, and more."
    },
    {
        type: "grid",
        // bgColor: "#ccc",
        items: [
            {
                image: VisualDate,
            },
            {
                image: VisualTime,
            },
        ],
        cols: "2",
        rows: "1",
        caption: "The UX design completed, I passed my interaction design off to the visual design team to create visuals consistent with the rest of the operating system. These are the controls as they shipped in the first version of Windows 10."
    },
]

class Win10DTPBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <HeadingProjectsLayout>Windows 10 date/time picker UX</HeadingProjectsLayout>
                <SummaryLayout hideHeading>
                    <Paragraph fsize={"16px"}>
                        One of the big challenges of Windows 10 was building an operating system UI that would work on giant 4K monitors all the way down to phones, smart watches, and even devices with no screens. That work started with the system controls and figuring out how to reconcile the interaction differences between not just drastically different screensizes, but also very different input methods.
                    </Paragraph>
                    <Paragraph fsize={"16px"}>
                        One control I worked on for this effort was the date/time picker. My task was to find a UX solution that would be flexible enough to meet the complex needs of the product, while also meeting the needs of developers who use the Windows controls in their apps.
                    </Paragraph>
                </SummaryLayout>
                <CarouselLayout heroes={heroesList} {...this.props}/>
            </div>
        );
    }
}

const Win10DTP = styled(Win10DTPBase)`
    display: grid;
    min-height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content 1fr;
    grid-gap: 15px;
`;

const CarouselLayout = styled(Carousel)`
    min-height: 300px;
    grid-column: 1 / 1;
    grid-row: 3 / 3;
`;

const HeadingProjectsLayout = styled(HeadingProjects)`
    @media (min-width: ${sizes.breakpoints.lg}) {
        grid-column: 1 / 3;
    }
`;

const SummaryLayout = styled(Summary)`
    overflow: auto;
    grid-column: 1 / 1;
    grid-row: 2 / 2;
`;

export default Win10DTP;