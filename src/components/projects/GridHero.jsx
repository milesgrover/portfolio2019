import React from "react";
import styled from "styled-components";

const GridHeroBase = (props) => {
    return (
        <div className={props.className} style={props.style} onClick={props.onClick}>
            {props.items.map((item, index) => {
                return (
                    <GridCell key={index}>
                        <img src={item.image} alt={item.desc} />
                        <span>{item.desc}</span>
                    </GridCell>
                );
            })}
        </div>
    );
}

const GridHero = styled(GridHeroBase)`
    display: grid;
    grid-template-columns: repeat(${props => props.cols || `3`}, 1fr);
    grid-template-rows: repeat(${props => props.rows || `1`}, 1fr);
    grid-gap: 20px;
    align-items: center;
    background-color: ${props => props.bgColor || ``};
    margin: 0 0 5px 5px;
`;

const GridCell = styled.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    img {
        max-width: 100%;
    }
    span {
        height: 50px;
        padding-top: 5px;
    }
`;

export default GridHero;