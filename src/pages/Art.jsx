import React from "react";
import { Page, Heading1, Paragraph, ProjectsList } from "../components";
import { FAP, Hideous, Paintings, Webcomics } from "../projects";

const category = "/art/";

const projects = [
    {
        name: "Brief Interviews with Hideous Monsters",
        url: "hideous-monsters",
        project: Hideous,
    },
    {
        name: "Webcomics",
        url: "art-webcomics",
        project: Webcomics,
    },
    {
        name: "Forum avatars",
        url: "forum-avatars",
        project: FAP,
    },
    {
        name: "Drawings & paintings",
        url: "drawings-paintings",
        project: Paintings,
    },
];

class ArtPage extends React.Component {
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
                current="Art"
                showProject={this.getProjectFromUrl()}
                category={category}
            >
                <Heading1>art projects</Heading1>
                <Paragraph>I always have at least one art project going at any given time. Here are a few of my favorites.</Paragraph>
                <ProjectsList
                    items={projects}
                    category={category}
                />
                <Paragraph>
                    In addition to visual arts, I also write fiction and enjoy playing the ukulele.
                </Paragraph>
            </Page>
        );
    }
}

export default ArtPage;