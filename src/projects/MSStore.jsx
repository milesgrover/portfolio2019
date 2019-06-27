import React from "react";
import styled from "styled-components";
import { HeadingProjects, TechnologiesUsed, Summary, Paragraph, HeroImage, Carousel } from "../components";
import Hero from "../assets/images/hero/microsoft-store.jpg";
import Hero2 from "../assets/images/hero/microsoft-store-2.jpg";
import Hero3 from "../assets/images/hero/microsoft-store-3.jpg";
import { sizes } from "../constants";

const techs = [
    {
        name: "Sass",
        usage: "primary",
    },
    {
        name: "HTML5",
        usage: "primary",
    },
    {
        name: "React",
        usage: "primary",
    },
    {
        name: "JavaScript",
        usage: "secondary",
    },
    {
        name: "CSS",
        usage: "secondary",
    },
    {
        name: "CSHTML",
        usage: "tertiary",
    },
    {
        name: "Git",
        usage: "tertiary",
    },
    {
        name: "NPM",
        usage: "tertiary",
    },
    {
        name: "Visual Studio",
        usage: "tertiary",
    },
]

const heroesList = [
    {
        image: Hero,
        title: "Microsoft Store Game PDP",
    },
    {
        image: Hero2,
        title: "Microsoft Store Device PDP",
    },
    {
        image: Hero3,
        title: "Microsoft Store Movie PDP",
    },
]

class MSStoreBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <HeadingProjectsLayout>Microsoft Store</HeadingProjectsLayout>
                <CarouselLayout heroes={heroesList} />
                <TechnologiesUsedLayout techs={techs} />
                <SummaryLayout>
                    <Paragraph fsize={"16px"}>
                        I implemented the redesign of the buy box of the Microsoft Store product detail page (PDP). This UI is the most prominent part of the page, and needed to be flexible enough to accommodate many different combinations of content&nbsp;&mdash; different product types, with or without images in different locations, promotions, different buying options, and many other possibilities.
                    </Paragraph>
                    <Paragraph fsize={"16px"}>Accomplishing that involved working closely with both the designers and the back-end engineers, prototyping creative solutions, and a lot of iterating.</Paragraph>
                </SummaryLayout>
            </div>
        );
    }
}

const MSStore = styled(MSStoreBase)`
    display: grid;
    min-height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content min-content;
    grid-gap: 15px;
    @media (min-width: ${sizes.breakpoints.lg}) {
        grid-template-rows: min-content 1fr min-content;
        grid-template-columns: 1fr 1fr;
    }
`;

const CarouselLayout = styled(Carousel)`
    min-height: 300px;
    grid-column: 1 / 1;
    grid-row: 2 / 2;
    @media (min-width: ${sizes.breakpoints.lg}) {
        grid-column: 1 / 3;
        grid-row: 2 / 2;
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
    grid-row: 3 / 3;
}
`;

const SummaryLayout = styled(Summary)`
    overflow: auto;
    grid-column: 1 / 1;
    grid-row: 4 / 4;
@media (min-width: ${sizes.breakpoints.lg}) {
    grid-column: 2 / 2;
    grid-row: 3 / 3;
}
`;

export default MSStore;