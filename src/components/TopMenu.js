import React, { Fragment, Component } from 'react';
import Media from 'react-media';
import { push as Menu } from 'react-burger-menu';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';

import { colors, mediaQueries } from '../theme';
import MenuItem from './MenuItem';

const BurgerMenuItem = ({ setState, hover, id, title, ...props }) => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      marginBottom: 32,
      marginTop: 32,
      height: 32,
    }}
    onMouseEnter={() => setState({ hover: id || title })}
    onMouseLeave={() => setState({ hover: null })}
  >
    <MenuItem
      title={title}
      {...props}
      style={
        (id || title) === hover
          ? { color: colors.gold, fontSize: 20 }
          : { color: colors.white, fontSize: 20 }
      }
    />
  </div>
);

const StyledSocialIcon = styled(SocialIcon)`
  width: 24px !important;
  height: 24px !important;
  margin: 2px !important;
  @media ${mediaQueries.laptop} {
    width: 32px !important;
    height: 32px !important;
  }
  &:hover svg {
    background-color: white !important;
    transition: background-color 0.25s ease-in !important;
  }
  g {
    transition: fill 0.25s ease-in !important;
  }
`;

const StyledMenu = styled(Menu)`
  div {
    background-color: ${colors.secondary};
  }
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const KHDSocialIcon = ({ id, url, setState, hover }) => (
  <span
    onMouseEnter={_ => setState({ hover: id })}
    onMouseLeave={_ => setState({ hover: null })}
  >
    <StyledSocialIcon
      color={hover === id ? colors[id] : colors.dark}
      url={url}
    />
  </span>
);

class TopMenu extends Component {
  state = { hover: null, menuOpen: false };

  render() {
    const { hover, menuOpen } = this.state;
    const hoverProps = {
      hover,
      setState: s => this.setState(s),
    };
    return (
      <div style={styles.container}>
        <div style={styles.social}>
          <KHDSocialIcon
            id="facebook"
            url="https://www.facebook.com/harmoniedelft"
            {...hoverProps}
          />
          <KHDSocialIcon
            id="twitter"
            url="https://twitter.com/harmoniedelft"
            {...hoverProps}
          />
          <KHDSocialIcon
            id="instagram"
            url="https://www.instagram.com/harmoniedelft/"
            {...hoverProps}
          />
        </div>
        <div style={styles.links}>
          <MenuItem title={<FaHome />} link="/" id="home" {...hoverProps} />
          <Media query={mediaQueries.tablet}>
            {matches =>
              matches ? (
                <Fragment>
                  <MenuItem title="Nieuws" {...hoverProps} />
                  <MenuItem title="KHD en de Gouden Eeuw" {...hoverProps} />
                  <MenuItem title="Delftse Meesters 11 Mei" {...hoverProps} />
                  <MenuItem title="Concertfestival 25 Mei" {...hoverProps} />
                </Fragment>
              ) : (
                <Fragment>
                  <MenuItem
                    title={<FaBars />}
                    action={() => this.setState({ menuOpen: true })}
                    id="burger-open"
                    {...hoverProps}
                  />
                  <StyledMenu
                    isOpen={menuOpen}
                    pageWrapId={'page-wrap'}
                    outerContainerId={'root'}
                    right
                  >
                    <BurgerMenuItem
                      id="burger-close"
                      title={<FaTimes />}
                      action={() => this.setState({ menuOpen: false })}
                      {...hoverProps}
                    />
                    <BurgerMenuItem title="Home" link="/" {...hoverProps} />
                    <BurgerMenuItem title="Nieuws" {...hoverProps} />
                    <BurgerMenuItem
                      title="KHD en de Gouden Eeuw"
                      {...hoverProps}
                    />
                    <BurgerMenuItem
                      title="Delftse Meesters 11 Mei"
                      {...hoverProps}
                    />
                    <BurgerMenuItem
                      title="Concertfestival 25 Mei"
                      {...hoverProps}
                    />
                  </StyledMenu>
                </Fragment>
              )
            }
          </Media>
        </div>
      </div>
    );
  }
}
const styles = {
  container: {
    height: 64,
    backgroundColor: colors.gold,
    display: 'flex',
    justifyContent: 'center',
  },
  social: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 8,
  },
  links: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 24,
  },
};
export default TopMenu;
