import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  background: var(--white-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      margin-top: 5%;
      &:hover {
        background-color: var(--gray-1);
      }
    }
    a {
      text-decoration: none;
      display: inline-block;
      font-family: 'Roboto Condensed', sans-serif;
      padding: 1rem 2rem;
      font-size: 25px;
      color: var(--deep-dark);
      outline: none;
    }
  }
  .mobile-menu-icon {
    color: var(--deep-dark);
    position: absolute;
    right: -20px;
    top: -1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    margin-top: 8%;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .logo {
      width: 80%;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--white);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function Navigation() {
    const [showNav, setShowNav] = useState(false);
    return (
        <NavStyles>
            <div
                className="mobile-menu-icon"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
            >
                <MdMenu />
            </div>

            {/* DESKTOP */}
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }} className='d-none d-md-block'>
                <img src="https://res.cloudinary.com/robles-identity/image/upload/v1642969624/1642969599711_fjsqad.png" className="logo" alt="Robles Identity"
                    style={{
                        height: '80%'
                    }}
                />
            </Link>

            {/* MOBILE */}
            {/* <Link to="/" style={{ color: '#fff', textDecoration: 'none' }} className='d-block d-md-none'>
                <img src="https://res.cloudinary.com/robles-identity/image/upload/v1642969624/1642969599711_fjsqad.png" className="logo" alt="Robles Identity"
                    style={{
                        height: '50%',
                        width: '40%'
                    }}
                />
            </Link> */}

            <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
                <div
                    className="closeNavIcon"
                    onClick={() => setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}
                >
                    <MdClose />
                </div>
                <li>
                    <NavLink
                        to="/"
                        exact
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sobre"
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >
                        Sobre
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contato"
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >
                        Contato
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/orcamento"
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >
                        <button className="btn-orcamento">
                            Orçamento
                        </button>
                    </NavLink>
                </li>
            </ul>
        </NavStyles>
    );
}