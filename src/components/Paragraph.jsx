import React from "react";
import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: ${props => props.fsize || "21px"};
    line-height: 1.25;
    padding: 0;
    margin: 0 0 ${props => props.fsize ? Math.floor(parseInt(props.fsize) * 0.85) + "px" : "18px"};
`;