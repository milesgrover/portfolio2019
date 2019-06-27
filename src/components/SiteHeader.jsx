import React from "react";
import styled from "styled-components";
import Masthead from "../assets/images/masthead.svg";
import { sizes } from "../constants";

class SiteHeaderBase extends React.Component {
    render() {
        return (
            <header className={this.props.className}>
                <img src={Masthead} alt="miles grover" />
            </header>
        );
    }
}

const SiteHeader = styled(SiteHeaderBase)`
    @media (min-width: ${sizes.breakpoints.md}) {
        margin-left: -141px;
    }
    img {
        max-width: 100%;
        width: 708px;
    }
`;

export default SiteHeader;