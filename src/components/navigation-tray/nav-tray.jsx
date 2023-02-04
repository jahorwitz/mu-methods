/// This component is a navigation tray
/// for mobile version of the app

import { NavLink } from "react-router-dom";
import notificationSign from "../../assets/notification_sign.svg";
import styled from "styled-components";

/// Here is a styles for every link:

const StyledNavLink = styled(NavLink)`
  width: 60px;
  height: 60px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: center;
  position: relative;
  background-image: url("${({ inactive }) => inactive}");
  &:active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
    background-image: url("${({ active }) => active}");
  }
`;

const StyledNavBar = styled.nav`
  width: 215px;
  height: 60px;
  background-color: white;
  bottom: 3%;
  right: 50%;
  transform: translate(50%, 0);
`;

let num = 0;

export const NavTray = ({ isUnreadedMessages, navLinks }) => {
  return (
    <StyledNavBar
      className="nav position-fixed d-flex justify-content-evenly align-items-center rounded-pill bg-white"
      style={{ "--bs-bg-opacity": 0.1 }}
    >
      {navLinks.map((link) => {
        return (
          <StyledNavLink
            key={(num += 1)}
            role={link.role}
            to={link.to}
            className="nav-link rounded-circle"
            inactive={link.icon}
            active={link.activeIcon}
          >
            {link.isNotification ? (
              <img
                src={notificationSign}
                alt="Blue circle"
                className={`position-absolute ${
                  isUnreadedMessages ? "d-block" : "d-none"
                }`}
                style={{ top: "13px", right: "13px" }}
              />
            ) : (
              ""
            )}
          </StyledNavLink>
        );
      })}
    </StyledNavBar>
  );
};
