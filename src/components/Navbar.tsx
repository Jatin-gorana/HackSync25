import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; // Import for smooth scrolling
import { Link } from "react-router-dom"; // Import for routing

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: rgba(255, 255, 255, 0.01); /* Glass effect */
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const NavLink = styled(ScrollLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    background: gold;
    left: 50%;
    bottom: -5px;
    transition: 0.4s ease-in-out;
    transform: translateX(-50%);
  }

  &:hover {
    color: gold;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled(motion.span)<{ open: boolean }>`
  display: block;
  border-radius: 50px;
  width: 30px;
  height: 3px;
  margin: 5px;
  background-color: gold;
  transition: width 0.4s ease-in-out, transform 0.4s ease-in-out;

  &:nth-child(1) {
    transform: ${({ open }) => (open ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)")};
  }
  &:nth-child(2) {
    opacity: ${({ open }) => (open ? 0 : 1)};
    width: ${({ open }) => (open ? "0" : "70%")};
  }
  &:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)")};
  }
`;

const Overlay = styled(motion.div)<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.9); /* Deep space black */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${({ open }) => (open ? "translateY(0%)" : "translateY(-100%)")};
  transition: transform 0.5s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled(motion.ul)`
  list-style: none;
  text-align: center;

  li {
    font-size: 25px;
    margin: 20px 0px;
    opacity: 0;
    color: white;
    animation: fadeIn 0.5s ease-in-out forwards;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <Nav>
        <Logo>HackSync 2025</Logo>
        <Menu>
          <Item>
            <NavLink to="home" smooth={true} duration={500}>Home</NavLink>
          </Item>
          <Item>
            <NavLink to="about" smooth={true} duration={500}>About</NavLink>
          </Item>
          <Item>
            <NavLink to="destination" smooth={true} duration={500}>Destination</NavLink>
          </Item>
          <Item>
            <NavLink to="domains" smooth={true} duration={500}>Domains</NavLink>
          </Item>
          <Item>
            <NavLink to="timeline" smooth={true} duration={500}>Timeline</NavLink>
          </Item>
          <Item>
            <NavLink to="sponsors" smooth={true} duration={500}>Sponsors</NavLink>
          </Item>
          <Item>
            <NavLink to="faq" smooth={true} duration={500}>FAQ</NavLink>
          </Item>
        </Menu>
        <NavIcon onClick={() => setToggle(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      
      <Overlay open={toggle}>
        <OverlayMenu>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
            transition={{ delay: 0.2 }}
          >
            <NavLink to="home" smooth={true} duration={500}>Home</NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
            transition={{ delay: 0.3 }}
          >
            <NavLink to="about" smooth={true} duration={500}>About</NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
            transition={{ delay: 0.4 }}
          >
            <NavLink to="destination" smooth={true} duration={500}>Destination</NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
            transition={{ delay: 0.5 }}
          >
            <NavLink to="domains" smooth={true} duration={500}>Domains</NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
            transition={{ delay: 0.6 }}
          >
            <NavLink to="timeline" smooth={true} duration={500}>Timeline</NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
            transition={{ delay: 0.7 }}
          >
            <NavLink to="sponsors" smooth={true} duration={500}>Sponsors</NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
            transition={{ delay: 0.8 }}
          >
            <NavLink to="faq" smooth={true} duration={500}>FAQ</NavLink>
          </motion.li>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Navbar;
