import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Page, Heading1, Paragraph, ProjectsList, TechTag } from "../components";
import { MSStore, PrototypingReact, Webcore, WindowsPhone } from "../projects";
import { fonts } from "../constants";

const projects = [
    {
        name: "Prototyping in React",
        url: "prototyping-in-react",
        project: PrototypingReact,
    },
    {
        name: "Microsoft Store",
        url: "microsoft-store",
        project: MSStore,
    },
    {
        name: "Microsoft web style guide",
        url: "ms-web-style-guide",
        project: Webcore,
    },
    {
        name: "Windows & Windows Phone",
        url: "windows-windows-phone",
        project: WindowsPhone,
    },
];

const category = "/tech/";

class TechPage extends React.Component {
    getProjectFromUrl = () => {
        const url = this.props.match.params.id;
        const getProject = projects.find(p => p.url === url);
        if (getProject) {
            return getProject.project;
        }
    }

    render() {
        return (
            <Page
                current="Tech"
                showProject={this.getProjectFromUrl()}
                category={category}
            >
                <Heading1>tech projects</Heading1>
                
                <Paragraph>
                    I love building UI as a front-end engineer. Here are a few projects I've worked on recently.
                </Paragraph>
                <ProjectsListLayout
                    items={projects}
                    category={category}
                />
                <TopTechs>
                    <span>Top skills:</span>
                    <TechTag usage="secondary" mini>HTML5</TechTag>
                    <TechTag usage="secondary" mini>CSS/Sass</TechTag>
                    <TechTag usage="secondary" mini>JavaScript</TechTag>
                    <TechTag usage="secondary" mini>React</TechTag>
                </TopTechs>
                <Paragraph fsize="18px">
                    This site was designed and built by me, from scratch, using React and Styled Components.
                </Paragraph>
            </Page>
        );
    }
}

const TopTechs = styled.div`
    margin: 32px 0 18px 0;
    span {
        font-size: 16px;
        margin-right: 8px;
        font-family: ${fonts.display};
        text-transform: uppercase;
        font-weight: 800;
    }
`;

const ProjectsListLayout = styled(ProjectsList)`
    margin-top: 24px;
`;

export default withRouter(TechPage);