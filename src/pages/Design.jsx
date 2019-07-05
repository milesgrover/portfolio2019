import React from "react";
import { Page, Heading1, Paragraph, ProjectsList } from "../components";
import { HiveBio, LandingPages, WebcomicSites, Win10DTP } from "../projects";

const category = "/design/";

const projects = [
    {
        name: "HiveBio brand refresh",
        url: "hivebio-brand-refresh",
        project: HiveBio,
    },
    {
        name: "Windows 10 date picker UX",
        url: "win10-dtp-ux",
        project: Win10DTP,
    },
    {
        name: "Marketing landing pages",
        url: "marketing-landing-pages",
        project: LandingPages,
    },
    {
        name: "Webcomic sites",
        url: "webcomic-sites",
        project: WebcomicSites,
    },
];

class DesignPage extends React.Component {
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
                current="Design"
                showProject={this.getProjectFromUrl()}
                category={category}
            >
                <Heading1>design projects</Heading1>
                <Paragraph>It's hard to say whether I enjoy designing or building UI more. This is just a small sample of design projects I've worked on over the years.</Paragraph>
                <ProjectsList
                    items={projects}
                    category={category}
                />
            </Page>
        );
    }
}

export default DesignPage;