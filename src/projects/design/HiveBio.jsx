import React from "react";
import styled from "styled-components";
import { HeadingProjects, Summary, Paragraph, Carousel } from "../../components";
import HeroSketches from "../../assets/images/hero/hb-logo-sketches.jpg";
import HeroLogoComparison from "../../assets/images/hero/hb-logo-comparison.png";
import HeroElements from "../../assets/images/hero/hb-brand-elements.png";
import HeroLogoLockups from "../../assets/images/hero/hb-logo-lockups.png";
import HeroFlyer1 from "../../assets/images/hero/hb-flier-dinosaurs_web.jpg";
import HeroFlyer2 from "../../assets/images/hero/hb-flier-illustration.jpg";
import HeroKit from "../../assets/images/hero/hb-kit.png";
import HeroSign from "../../assets/images/hero/hb-sign-ToHiveBio-right.png";
import { sizes } from "../../constants";

const heroesList = [
    {
        image: HeroSketches,
        title: "Early logo sketches",
    },
    {
        image: HeroLogoComparison,
        title: "New logo",
        bgSize: "contain",
        align: "center",
    },
    {
        image: HeroElements,
        title: "Brand elements",
        bgSize: "contain",
        bgColor: "#eee",
        align: "center",
    },
    {
        image: HeroLogoLockups,
        title: "Logos in context",
        bgSize: "contain",
        align: "center",
    },
    {
        image: HeroFlyer1,
        title: "Branding applied to class flyer",
        bgSize: "contain",
        align: "center",
    },
    {
        image: HeroFlyer2,
        title: "Branding applied to class flyer",
        bgSize: "contain",
        align: "center",
    },
    {
        image: HeroKit,
        title: "Branding applied to product packaging",
        bgSize: "contain",
    },
    {
        image: HeroSign,
        title: "Branding applied to lab signage",
        bgSize: "contain",
    },
]

class HiveBioBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <HeadingProjectsLayout>HiveBio brand refresh</HeadingProjectsLayout>
                <CarouselLayout heroes={heroesList} {...this.props} />
                <SummaryLayout>
                    <Paragraph fsize={"16px"}>
                        HiveBio Community Lab is a not-for-profit citizen science organization that seeks to build community amongst citizen scientists, provide science education at very low cost, and furnish the community with access to scientific equipment that would be otherwise out of reach.
                    </Paragraph>
                    <Paragraph fsize={"16px"}>When I took over as Creative Director in January of 2014, my first project was an overhaul of the company's visual branding, including a new logo, style guide, and application across a wide range of materials.</Paragraph>
                </SummaryLayout>
            </div>
        );
    }
}

const HiveBio = styled(HiveBioBase)`
    display: grid;
    min-height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content min-content;
    grid-gap: 15px;
`;

const CarouselLayout = styled(Carousel)`
    min-height: 300px;
    grid-column: 1 / 1;
    grid-row: 2 / 2;
`;

const HeadingProjectsLayout = styled(HeadingProjects)`
    @media (min-width: ${sizes.breakpoints.lg}) {
        grid-column: 1 / 3;
    }
`;

const SummaryLayout = styled(Summary)`
    overflow: auto;
    grid-column: 1 / 1;
    grid-row: 4 / 4;
`;

export default HiveBio;