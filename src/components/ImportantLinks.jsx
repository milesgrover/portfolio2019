import React from "react";
import styled from "styled-components";
import PinkCapsSmallBG from "../assets/images/bg-capsule-pink-small.png";
import { SubHeading } from "./projects/SubHeading";
import { colors, fonts } from "../constants";

class ImportantLinksBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <SubHeadingLayout compact bgColor={colors.darkPink}>{this.props.title || "Important links"}</SubHeadingLayout>
                <LinkList>
                    {
                        this.props.links.map((link, i) => {
                            return (
                                <li key={i}>
                                    <ImportantLink href={link.url}>{link.name}</ImportantLink>
                                </li>
                            );
                        })
                    }
                </LinkList>
            </div>
        );
    }
}

const ImportantLinks = styled(ImportantLinksBase)`
    padding: 10px 15px;
    background-color: ${colors.lightBlue};
    background-image: url(${PinkCapsSmallBG});
`;

const SubHeadingLayout = styled(SubHeading)`
    margin-right: 8px;
`;

const LinkList = styled.ul`
    list-style: none;
    margin: 8px 5px 5px 3px;
    padding: 0;
    li {
        display: inline-block;
        line-height: 36px;
        margin: 0 10px 0 0;
        &:last-child {
            margin-right: 0;
        }
    }
`;

const ImportantLink = styled.a`
    background: ${colors.white};
    padding: 3px 5px;
    box-shadow: -3px 3px 0 ${colors.black};
    font-family: ${fonts.display};
    font-weight: 600;
    font-size: 18px;
    &:hover {
        background: ${colors.medBlue};
        color: ${colors.white};
    }
`;


export default ImportantLinks;