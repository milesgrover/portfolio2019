import React from "react";
import styled from "styled-components";
import { HeadingProjects, Summary, Paragraph, Carousel } from "../../components";
import KarateHomework from "../../assets/images/hero/site-karatehomework.png";
import CreepHouse from "../../assets/images/hero/site-creep.png";
import ThinkinLincoln from "../../assets/images/hero/site-tl.jpg";
import { sizes } from "../../constants";

const heroesList = [
    {
        image: KarateHomework,
        title: "Karate Homework",
        caption: "For Karate Homework, I wanted to fix some issues I'd seen with other comics sites. Instead of a standard header at the top of the page, I put the comic first. As another example, I also included UI to let the user know how many comics they would have left to read as they navigated through the archives.",
    },
    {
        image: CreepHouse,
        title: "Creep House",
        caption: "For Creep House, I went for a hand-drawn, creepy Halloween style.",
        hideTitle: true,
    },
    {
        image: ThinkinLincoln,
        title: "Thinkin’ Lincoln",
        caption: "Thinkin’ Lincoln's visual design is meant to evoke US currency, since most of the characters in the comic are featured on money in some country.",
    },
]

class WebcomicSitesBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <HeadingProjectsLayout>Webcomic sites</HeadingProjectsLayout>
                <SummaryLayout hideHeading>
                    <Paragraph fsize={"16px"}>
                        I've created a number of webcomics in the past, and I designed the website for each one. The basic goals of any site like this are to showcase the comic, and to provide easy navigation through the archives.
                    </Paragraph>
                </SummaryLayout>
                <CarouselLayout heroes={heroesList} {...this.props} />
            </div>
        );
    }
}

const WebcomicSites = styled(WebcomicSitesBase)`
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

export default WebcomicSites;