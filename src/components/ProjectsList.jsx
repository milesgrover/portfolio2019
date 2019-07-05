import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PinkCapsBG from "../assets/images/bg-capsule-pink.png";
import BlueCapsBG from "../assets/images/bg-capsule-blue.png";
import { colors, fonts } from "../constants";

class ProjectsListBase extends React.Component {
    render() {
        return (
            <ul className={this.props.className}>
                {this.props.items.map((item, i) => {
                    return (
                        <li key={i}>
                            <StyledLink to={this.props.category + item.url}>
                                {item.name}
                            </StyledLink>
                        </li>
                    );
                })}
            </ul>
        );
    }

    handleProjectClick = (project) => {
        return () => {
            if (typeof this.props.onChooseProject === "function") {
                this.props.onChooseProject(project)
            }
        }
    }
}

const ProjectsList = styled(ProjectsListBase)`
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: ${fonts.display};
    font-weight: 800;
    font-size: 32px;
    li {
        color: ${colors.white};
        margin-bottom: 15px;
        padding: 0;
    }
`;

const StyledLink = styled(Link)`
    background: url(${PinkCapsBG});
    box-shadow: -5px 5px 0 ${colors.black};
    border: 3px solid ${colors.black};
    margin: 0;
    text-shadow: -2.5px 2.5px 0 ${colors.black};
    padding: 8px 10px;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
    text-align: left;
    line-height: 1;
    outline: 0;
    cursor: pointer;
    display: block;
    text-decoration: none;
    transition: all 150ms ease-out;
    &:hover {
        background: url(${BlueCapsBG});
    }
    &:active {
        transform: translate(-2px, 2px);
        box-shadow: -3px 3px 0 ${colors.black};
    }
`;

export default ProjectsList;