import React from "react";
import styled from "styled-components";
import BlueCapsSmallBG from "../../assets/images/bg-capsule-blue-small.png";
import { SubHeading } from "./SubHeading";
import { TechTag } from "./TechTag";
import { colors } from "../../constants";

class TechnologiesUsedBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <SubHeadingLayout compact={this.props.compact}>{this.props.title || "Technologies used"}</SubHeadingLayout>
                {
                    this.props.techs.map((tech, i) => {
                        return (
                            <TechTagLayout key={i} usage={tech.usage} mini={this.props.compact}>{tech.name}</TechTagLayout>
                        );
                    })
                }
            </div>
        );
    }
}

const TechnologiesUsed = styled(TechnologiesUsedBase)`
    padding: 10px 15px;
    background-color: ${colors.lightBlue};
    background-image: url(${BlueCapsSmallBG});
`;

const SubHeadingLayout = styled(SubHeading)`
    margin-right: 8px;
`;

const TechTagLayout = styled(TechTag)`
    margin-top: 5px;
    margin-bottom: 5px;
`;

export default TechnologiesUsed;