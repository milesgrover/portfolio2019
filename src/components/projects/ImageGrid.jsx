import styled from "styled-components";
import { colors } from "../../constants";

export const ImageGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: auto;
    > div {
        margin-right: 10px;
        margin-bottom: 20px;
    }
    img {
        max-width: 100%;
        box-shadow: -5px 5px 0 ${colors.black};
        margin: 0 0 5px 5px;
        border: 2px solid ${colors.black};
    }
`;