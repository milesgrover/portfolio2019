import React from "react";
import styled from "styled-components";
import { HeadingProjects, Paragraph, ImageGrid } from "../../components";
import { fonts } from "../../constants";


const usernames = [
    { user: '2X2L' },
    { user: 'A Bear' },
    { user: 'Andrew' },
    { user: 'AndyClark' },
    { user: 'Archbaker' },
    { user: 'Baron von Swede' },
    { user: 'Beautiful Chaos' },
    { user: 'boo' },
    { user: 'Boorishly P. Foundry' },
    { user: 'Brent' },
    { user: 'Captain Lazers' },
    { user: 'Chugbuster' },
    { user: 'Dæ' },
    { user: 'Death By Chiasmus' },
    { user: 'Dezro' },
    { user: 'djsaxon2' },
    { user: 'Dr. Mr. Vandertramps' },
    { user: 'DTZ Reunion Tour' },
    { user: 'Eidam' },
    { user: 'eykalid!' },
    { user: 'Fausty' },
    { user: 'freddycashmercury' },
    { user: 'gastrodon' },
    { user: 'GentlemanGeek' },
    { user: 'godshapedbullet' },
    { user: 'Healy' },
    { user: 'hxcstar' },
    { user: 'i invented rain' },
    { user: 'jimjim' },
    { user: 'karmarepairkit' },
    { user: 'Kate' },
    { user: 'kfunque' },
    { user: 'kier' },
    { user: 'King Carl' },
    { user: 'logcabinrepairman' },
    { user: 'Love, Your Third Daughter' },
    { user: 'Lupus Gene' },
    { user: 'MackJ' },
    { user: 'Mafia Tipster' },
    { user: 'Mammoth' },
    { user: 'matt_bohr' },
    { user: 'moosetastik' },
    { user: 'Nathanderthal' },
    { user: 'Randy Johnson' },
    { user: 'Raziel Lafleur' },
    { user: 'revfitz' },
    { user: 'Robil' },
    { user: 'roquentin' },
    { user: 'rpenguin' },
    { user: 'salazar' },
    { user: 'Shandy' },
    { user: 'sigurros' },
    { user: 'sleazyjane' },
    { user: 'SMAX' },
    { user: 'SNARK! (boojum?)' },
    { user: 'Stranger Dan' },
    { user: 'Tall Count Orca' },
    { user: 'the baber' },
    { user: 'thebanditqueen' },
    { user: 'The Ghost of Jizzbird' },
    { user: 'the saturday option' },
    { user: 'Thomas James' },
    { user: 'timeerkat' },
    { user: 'Tom Meade' },
    { user: 'trainwreck' },
    { user: 'Unwinder' },
    { user: 'what steam is' },
    { user: 'Xyloart' },
    { user: 'Xzanxizy' },
    { user: 'YarnIsland' },
    { user: 'yellowbus' },
    { user: 'Zerothian' },
];

// Import all images automatically
const importAll = (r) => {
    return r.keys().map((item, index) => {
        return Object.assign({}, { url: r(item) }, usernames[index]);
    });
}
  
const images = importAll(require.context('../../assets/images/hero/avatars', false, /\.(png|jpe?g|svg)$/));


class ForumAvatarsBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <HeadingProjectsLayout>Forum avatars project</HeadingProjectsLayout>

                <SummaryLayout>
                    <Paragraph>
                        As a fun project, I once offered to draw avatars for members of an online forum I used to frequent. I ended up drawing over 70 absurd little illustrations for people on the internet.
                    </Paragraph>
                    <Paragraph>These were drawn as vector art using a Wacom Cintiq.</Paragraph>
                </SummaryLayout>

                <ImageGrid>
                    {images.map((image, index) => {
                        return (
                            <div key={index}>
                                <img src={image.url} alt={image.user} />
                                <UserName>
                                    <span>username:</span> {image.user}
                                </UserName>
                            </div>
                        );
                    })}
                </ImageGrid>
            </div>
        );
    }
}

const ForumAvatars = styled(ForumAvatarsBase)`
    display: grid;
    min-height: 100%;
    max-height: 100%
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content 1fr;
    grid-gap: 15px;
`;

const HeadingProjectsLayout = styled(HeadingProjects)`
    grid-column: 1 / 1;
`;

const SummaryLayout = styled.div`
    overflow: auto;
    grid-column: 1 / 1;
    grid-row: 2 / 2;
`;

const UserName = styled.div`
    margin-left: 7px;
    font-family: ${fonts.display};
    font-size: 16px;
    font-weight: 600;
    span {
        font-weight: 400;
    }
`;

export default ForumAvatars;