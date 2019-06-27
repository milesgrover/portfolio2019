import React from "react";
import styled from "styled-components";
import { SubHeading } from "./SubHeading";

const SummaryBase = (props) => {
    return (
        <div className={props.className}>
            <SubHeading>Summary</SubHeading>
            {props.children}
        </div>
    );
}

const Summary = styled(SummaryBase)`
    p {
        padding-left: 5px;
    }
`;

export default Summary;