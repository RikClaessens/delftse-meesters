import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import Media from 'react-media';
import { scaleRotate as Menu } from 'react-burger-menu';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';

import { colors, fonts, mediaQueries } from '../theme';

const MenuItem = ({ setState, hover, id, action, title, link, style }) => {
  const onMouseEnter = setState
    ? () => setState({ hover: id || title })
    : () => {};
  const onMouseLeave = setState ? () => setState({ hover: null }) : () => {};
  const theStyle = {
    ...styles.link,
    ...((id || title) === hover ? styles.linkHover : {}),
    ...style,
  };

  return action ? (
    <span
      onClick={action}
      style={theStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {title}
    </span>
  ) : (
    <Link
      to={link || title.replace(/\s+/g, '-').toLowerCase()}
      style={theStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {title}
    </Link>
  );
};

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

const onChange = e => console.log(e);
class TopMenu extends Component {
  state = { hover: null, menuOpen: false };

  render() {
    const { hover, menuOpen } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.social}>
          <KHDSocialIcon
            id="facebook"
            url="https://www.facebook.com/harmoniedelft"
            hover={hover}
            setState={s => this.setState(s)}
          />
          <KHDSocialIcon
            id="twitter"
            url="https://twitter.com/harmoniedelft"
            hover={hover}
            setState={s => this.setState(s)}
          />
          <KHDSocialIcon
            id="instagram"
            url="https://www.instagram.com/harmoniedelft/"
            hover={hover}
            setState={s => this.setState(s)}
          />
        </div>
        <div style={styles.links}>
          <MenuItem
            title={<FaHome />}
            link="/"
            id="home"
            hover={hover}
            setState={s => this.setState(s)}
          />
          <Media query={mediaQueries.tablet}>
            {matches =>
              matches ? (
                <Fragment>
                  <MenuItem title="Nieuws" />
                  <MenuItem title="KHD en de Gouden Eeuw" />
                  <MenuItem title="Delftse Meesters 11 Mei" />
                  <MenuItem title="Muziek Festival 25 Mei" />
                </Fragment>
              ) : (
                <Fragment>
                  <MenuItem
                    title={<FaBars />}
                    action={() => this.setState({ menuOpen: true })}
                    id="burger-open"
                    hover={hover}
                    setState={s => this.setState(s)}
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
                      hover={hover}
                      setState={s => this.setState(s)}
                    />
                    <BurgerMenuItem
                      title="Home"
                      hover={hover}
                      setState={s => this.setState(s)}
                    />
                    <BurgerMenuItem
                      title="Nieuws"
                      hover={hover}
                      setState={s => this.setState(s)}
                    />
                    <BurgerMenuItem
                      title="KHD en de Gouden Eeuw"
                      hover={hover}
                      setState={s => this.setState(s)}
                    />
                    <BurgerMenuItem
                      title="Delftse Meesters 11 Mei"
                      hover={hover}
                      setState={s => this.setState(s)}
                    />
                    <BurgerMenuItem
                      title="Muziek Festival 25 Mei"
                      hover={hover}
                      setState={s => this.setState(s)}
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
  link: {
    textDecoration: 'none',
    marginLeft: 8,
    marginRight: 8,
    color: colors.dark,
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontFamily: fonts.title,
    whiteSpace: 'nowrap',
    fontSize: 14,
    transition: 'color 0.25s ease-in-out',
  },
  linkHover: {
    color: colors.white,
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
