import React from "react";
import styled from "styled-components";
import { HeadingProjects, ImageGrid, Summary, Paragraph, Carousel } from "../../components";
import { sizes } from "../../constants";

// Import all images automatically
const importAll = (r) => {
    return r.keys().map((item) => {
        return r(item);
    });
}
  
const images = importAll(require.context('../../assets/images/hero/hideous', false, /\.(png|jpe?g|svg)$/));


class HideousBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <HeadingProjectsLayout>Brief Interviews with Hideous Monsters</HeadingProjectsLayout>
                <SummaryLayout hideHeading>
                    <Paragraph fsize={"16px"}>
                        This project is a collection of sticky note ink drawings of monsters I've been working on for the last few years. I've drawn hundreds of them. The idea is kind of that the monsters are just people &mdash; or maybe people are monsters?
                    </Paragraph>
                    <Paragraph fsize={"16px"}>Check it out on my Instagram, <a href="https://www.instagram.com/hideous_monsters/">@hideous_monsters</a>.</Paragraph>
                </SummaryLayout>
                <ImageGridLayout>
                    {images.map((image, index) => {
                        return (
                            <div key={index}>
                                <img src={image} alt="hideous monster" />
                            </div>
                        );
                    })}
                </ImageGridLayout>
            </div>
        );
    }
}

const Hideous = styled(HideousBase)`
    display: grid;
    min-height: 100%;
    max-height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content 1fr;
    grid-gap: 15px;
`;

const ImageGridLayout = styled(ImageGrid)`
    min-height: 300px;
    grid-column: 1 / 1;
    grid-row: 3 / 3;
    img {
        max-width: 250px;
    }
`;

const HeadingProjectsLayout = styled(HeadingProjects)`
    grid-column: 1 / 1;
`;

const SummaryLayout = styled(Summary)`
    overflow: auto;
    grid-column: 1 / 1;
    grid-row: 2 / 2;
`;

export default Hideous;