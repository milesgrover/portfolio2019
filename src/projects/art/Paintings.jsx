import React from "react";
import styled from "styled-components";
import { HeadingProjects, Summary, Paragraph, Carousel } from "../../components";
import { sizes } from "../../constants";

import Danger from "../../assets/images/hero/painting-danger.jpg";
import Rude from "../../assets/images/hero/painting-rude.jpg";
import KalJongEl from "../../assets/images/hero/drawing-kaljongel.jpg";
import OwlDragon from "../../assets/images/hero/drawing-owl.jpg";
import KnifeChicken from "../../assets/images/hero/painting-knife-chicken.png";

const heroesList = [
    {
        image: KnifeChicken,
        title: "Knife Chicken tattoo design",
        bgSize: "contain",
        caption: "'Knife Chicken' tattoo design, digital (2019)",
        hideTitle: true,
    },
    {
        image: Danger,
        title: "Painting: D A N G E R",
        bgSize: "contain",
        caption: "'D A N G E R', acrylic on canvas (2017)",
        hideTitle: true,
        bgColor: "#fee504",
    },
    {
        image: Rude,
        title: "Painting: Rude",
        bgSize: "contain",
        caption: "'Rude', digital print (2017)",
        hideTitle: true,
        bgColor: "#f8cfb3",
    },
    {
        image: KalJongEl,
        title: "Drawing: Kal Jong El",
        bgSize: "contain",
        caption: "'Kal Jong El', pencil on paper (2016)",
        hideTitle: true,
        bgColor: "#cbcbcb",
    },
    {
        image: OwlDragon,
        title: "Drawing: Owl Dragon",
        bgSize: "contain",
        caption: "'Owl Dragon', pencil on paper (2016)",
        hideTitle: true,
        align: "center",
        bgColor: "#828e8c",
    },
]

class PaintingsBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <HeadingProjectsLayout>Drawings &amp; Paintings</HeadingProjectsLayout>
                <CarouselLayout heroes={heroesList} {...this.props} />
            </div>
        );
    }
}

const Paintings = styled(PaintingsBase)`
    display: grid;
    min-height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
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


export default Paintings;