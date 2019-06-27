import React from "react";
import styled from "styled-components";
import { HeadingProjects, TechnologiesUsed, Summary, Paragraph, HeroImage, Carousel } from "../components";
import Hero from "../assets/images/hero/webcore-devcenter.jpg";
import Hero2 from "../assets/images/hero/webcore-partner.jpg";
import Hero3 from "../assets/images/hero/webcore-support.jpg";
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
        name: "jQuery",
        usage: "primary",
    },
    {
        name: "Handlebars",
        usage: "secondary",
    },
    {
        name: "JavaScript",
        usage: "secondary",
    },
    {
        name: "Grunt",
        usage: "secondary",
    },
    {
        name: "JSON",
        usage: "secondary",
    },
    {
        name: "Git",
        usage: "tertiary",
    },
    {
        name: "Gulp",
        usage: "tertiary",
    },
    {
        name: "NPM",
        usage: "tertiary",
    },
    {
        name: "Webpack",
        usage: "tertiary",
    },
]

const heroesList = [
    {
        image: Hero,
        title: "Microsoft Developer Center",
    },
    {
        image: Hero2,
        title: "Microsoft Partner Center",
    },
    {
        image: Hero3,
        title: "Microsoft Support",
    },
]

class WebcoreBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <HeadingProjectsLayout>Microsoft web style guide</HeadingProjectsLayout>
                <CarouselLayout heroes={heroesList} />
                <TechnologiesUsedLayout techs={techs} />
                <SummaryLayout>
                    <Paragraph fsize={"16px"}>
                        I owned a style and component library for Windows-related websites. I built and maintained components based on the needs of the design team, and interfaced with the engineering teams to help them build out their sites using my components.
                    </Paragraph>
                    <Paragraph fsize={"16px"}>
                        As the owner of the project, I also was responsible for deployment, versioning, writing and messaging out patch notes, and maintaining the documentation site.
                    </Paragraph>
                </SummaryLayout>
            </div>
        );
    }
}

const Webcore = styled(WebcoreBase)`
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

export default Webcore;