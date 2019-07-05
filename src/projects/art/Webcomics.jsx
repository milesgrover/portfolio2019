import React from "react";
import styled from "styled-components";
import { HeadingProjects, Summary, Paragraph, Carousel, UnorderedList } from "../../components";
import { sizes } from "../../constants";

import ThinkinLincoln from "../../assets/images/hero/comic-tl-20090605.gif";
import CreepHouse from "../../assets/images/hero/comic-creephouse-1.png";
import KarateHomework from "../../assets/images/hero/comic-25-pollyawkward.png";


const heroesList = [
    {
        image: KarateHomework,
        title: "Karate Homework",
        bgSize: "contain",
        align: "center",
        hideTitle: true,
    },
    {
        image: ThinkinLincoln,
        title: "Thinkin' Lincoln",
        bgSize: "contain",
        align: "center",
        hideTitle: true,
    },
    {
        image: CreepHouse,
        title: "Creep House",
        bgSize: "contain",
        align: "center",
        hideTitle: true,
    },
]

const comicLinks = [
    {
        url: "http://www.thinkin-lincoln.com",
        name: "Thinkin' Lincoln",
    },
    {
        url: "http://www.creephouse.net",
        name: "Creep House",
    },
    {
        url: "http://www.karatehomework.com",
        name: "Karate Homework",
    },
]

class WebcomicsBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <HeadingProjectsLayout>Webcomics</HeadingProjectsLayout>
                <SummaryLayout hideHeading>
                    <Paragraph fsize={"16px"}>
                        I've written and drawn a lot of webcomics! Though none are currently active. You can check them out here:
                    </Paragraph>
                    <UnorderedList>
                        {comicLinks.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a href={link.url}>{link.name}</a>
                                </li>
                            );
                        })}
                    </UnorderedList>
                </SummaryLayout>
                <CarouselLayout heroes={heroesList} {...this.props} />
            </div>
        );
    }
}

const Webcomics = styled(WebcomicsBase)`
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

export default Webcomics;