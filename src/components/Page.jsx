import React from "react";
import styled from "styled-components";
import PageBG from "../assets/images/bg-pattern.png";
import { SiteHeader, SiteNav, ModalOverlay } from ".";
import { colors, sizes } from "../constants";

class PageBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <SiteHeader />
                <SiteNav current={this.props.current} />
                <PageContent>
                    {this.props.children}
                </PageContent>
                <ModalOverlay
                    category={this.props.category}
                    project={this.props.showProject}
                    onClose={this.props.onCloseModal}
                />
            </div>
        );
    }
}

const Page = styled(PageBase)`
    background: url(${PageBG});
    height: calc(100vh - 40px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    @media (min-width: ${sizes.breakpoints.md}) {
        height: calc(100vh - 60px);
        padding: 30px;
    }
`;

const PageContent = styled.div`
    background: ${colors.white};
    box-shadow: -7px 7px 0 ${colors.black};
    padding: 10px 20px;
    width: 100%;
    box-sizing: border-box;
    min-height: 0;
    overflow: auto;
    @media (min-width: ${sizes.breakpoints.md}) {
        max-width: 580px;
    }
`;

export default Page;