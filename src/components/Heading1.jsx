import styled from "styled-components";
import { colors, fonts } from "../constants";

export const Heading1 = styled.h1`
    font-family: ${fonts.display};
    font-weight: 900;
    font-size: 40px;
    line-height: 1.25;
    padding: 0;
    margin: 0 0 5px;
    color: ${colors.medBlue};
`;