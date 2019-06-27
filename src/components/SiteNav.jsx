import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, sizes } from "../constants";
import NoiseBG from "../assets/images/bg-capsule-bw.png";

const navLinks = [
    {
        name: "Tech",
        url: "/tech"
    },
    {
        name: "Design",
        url: "/design"
    },
    {
        name: "Art",
        url: "/art"
    },
    {
        name: "Me",
        url: "/",
    },
]

class SiteNavBase extends React.Component {
    render() {
        return(
            <nav role="navigation" className={this.props.className}>
                <ul>
                    {navLinks.map((link, i) => {
                        return (
                            <SiteNavItem key={i} current={this.props.current === link.name}>
                                <Link to={link.url}>
                                    {link.name}
                                </Link>
                            </SiteNavItem>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

const SiteNav = styled(SiteNavBase)`
    width: 100%;
    @media (min-width: ${sizes.breakpoints.md}) {
        width: 580px;
    }
    ul {
        list-style: none;
        margin: 15px 0 30px 0;
        padding: 0;
        display: flex;
        font-family: Catamaran, sans-serif;
        font-weight: 800;
        text-transform: uppercase;
        @media (min-width: ${sizes.breakpoints.md}) {
            margin: 0 0 30px 0;
        }
    }
`;

const SiteNavItem = styled.li`
    a {
        text-decoration: none;
        color: inherit;
        display: block;
        padding: 5px 10px 2px;
    }
    font-size: 30px;
    line-height: 1;
    margin: 0 10px;
    color: ${colors.white};
    background: ${props => props.current ? colors.lightBlue : colors.pink};
    box-shadow: -7px 7px 0 ${colors.black};
    transition: transform 150ms ease-out, box-shadow 150ms ease-out;
    &:hover {
        transform: rotate(5deg);
    }
    &:active {
        transform: translate(-2px, 2px);
        box-shadow: -5px 5px 0 ${colors.black};
    }
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
    @media (min-width: ${sizes.breakpoints.sm}) {
        font-size: 40px;
    }
`;

export default SiteNav;