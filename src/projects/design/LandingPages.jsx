import React from "react";
import styled from "styled-components";
import { HeadingProjects, Summary, Paragraph, Carousel } from "../../components";
import { sizes } from "../../constants";

import KinderMusik from "../../assets/images/hero/lander-km.jpg";
import AFG from "../../assets/images/hero/lander-afg.jpg";
import MomAgenda from "../../assets/images/hero/lander-mom.jpg";
import Acne from "../../assets/images/hero/lander-acne.jpg";


const heroesList = [
    {
        image: KinderMusik,
        title: "Kindermusik landing page",
    },
    {
        image: AFG,
        title: "AsianFoodGrocer landing page",
    },
    {
        image: MomAgenda,
        title: "MomAgenda landing page",
    },
    {
        image: Acne,
        title: "Acne Review landing page",
    },
]

class LandingPagesBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <HeadingProjectsLayout>Marketing landing pages</HeadingProjectsLayout>
                <SummaryLayout hideHeading>
                    <Paragraph fsize={"16px"}>
                        When I worked for an internet marketing agency, I designed a lot of different marketing materials. That included websites, email newsletters, and banner ads, but also included targeted landing pages. 
                    </Paragraph>
                    <Paragraph fsize={"16px"}>
                        These landing pages were typically focused on one specific goal, and were designed to maximize conversion rates. The Kindermusik landing page I designed, for example, achieved an extremely high conversion rate of 25%, meaning 1 out of every 4 people who viewed the page signed up for a class. 
                    </Paragraph>
                </SummaryLayout>
                <CarouselLayout heroes={heroesList} {...this.props} />
            </div>
        );
    }
}

const LandingPages = styled(LandingPagesBase)`
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

export default LandingPages;