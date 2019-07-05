import React from "react";
import styled from "styled-components";
import { HeadingProjects, TechnologiesUsed, Summary, Paragraph, Carousel } from "../../components";
import Hero from "../../assets/images/hero/windows-prototypes.jpg";
import { sizes } from "../../constants";

const techs = [
    {
        name: "React",
        usage: "primary",
    },
    {
        name: "Redux",
        usage: "primary",
    },
    {
        name: "JSS",
        usage: "primary",
    },
    {
        name: "Typescript",
        usage: "primary",
    },
    {
        name: "JavaScript",
        usage: "secondary",
    },
    {
        name: "HTML5",
        usage: "secondary",
    },
    {
        name: "CSS/Sass",
        usage: "secondary",
    },
    {
        name: "Lodash",
        usage: "secondary",
    },
    {
        name: "MobX",
        usage: "secondary",
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
        name: "Webpack",
        usage: "tertiary",
    },
    {
        name: "Babel",
        usage: "tertiary",
    },
]

const heroesList = [
    {
        image: Hero,
        title: "Windows Prototypes: Top Secret",
        hideTitle: true,
    },
]

class PrototypingReactBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <HeadingProjectsLayout>Prototyping in React</HeadingProjectsLayout>
                <TechnologiesUsedLayout techs={techs} />
                <SummaryLayout>
                    <Paragraph>As one of the primary contributors to this project, I create prototypes for future versions of Windows, building components using primarily React, Redux, and JSS (CSS in JavaScript).</Paragraph>
                    <Paragraph>Unfortunately, the specifics are all confidential. I can say that I have been one of the primary architects of the project as well as a mentor for more junior members of my team.</Paragraph>
                </SummaryLayout>
                <CarouselLayout heroes={heroesList} {...this.props} hideHelperText />
            </div>
        );
    }
}

const PrototypingReact = styled(PrototypingReactBase)`
    display: grid;
    min-height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content min-content 1fr;
    grid-gap: 15px;
    @media (min-width: ${sizes.breakpoints.lg}) {
        grid-template-rows: min-content min-content 1fr;
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: ${sizes.breakpoints.xxl}) {
        grid-template-rows: min-content min-content 1fr;
        grid-template-columns: 1fr 2fr;
    }
`;

const HeadingProjectsLayout = styled(HeadingProjects)`
    @media (min-width: ${sizes.breakpoints.lg}) {
        grid-column: 1 / 3;
    }
`;

const TechnologiesUsedLayout = styled(TechnologiesUsed)`
@media (min-width: ${sizes.breakpoints.xxl}) {
    grid-column: 1 / 1;
    grid-row: 2 / 2;
}
`;

const SummaryLayout = styled(Summary)`
    overflow: auto;
@media (min-width: ${sizes.breakpoints.xxl}) {
    grid-column: 1 / 1;
    grid-row: 3 / 3;
}
`;

const CarouselLayout = styled(Carousel)`
    min-height: 300px;
    @media (min-width: ${sizes.breakpoints.lg}) {
        grid-column: 1 / 3;
    }
    @media (min-width: ${sizes.breakpoints.xxl}) {
        grid-column: 2 / 2;
        grid-row: 2 / 4;
    }
`;

export default PrototypingReact;