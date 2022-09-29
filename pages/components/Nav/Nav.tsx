import { info } from 'console';
import Link from 'next/link'
import React, { useState } from 'react'
import 'bulma/css/bulma.css';

const Nav = () => {

    const NavbarBurger = (props: any) => (
        <button
            onClick={props.toggleMenu}
            className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
        >
            <span />
            <span />
            <span />
        </button>
    );

    let state = {
        openMenu: false,

    };

    const ToggleNav = (props: any) => {
        useState({
            openMenu: !props.activeMenu,
        })
    }



    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
                <Link className="navbar-item" href="/" >
                    <em style={{ cursor: "pointer" }}>
                        🛡️AGSHIELD
                    </em>
                </Link>


                <NavbarBurger
                    active={state?.openMenu}
                    ToggleNav={ToggleNav}

                />
            </div>



            <div className="navbar-menu" id="navMenu">
                <div className="navbar-start">
                    {NavBarPage.map((page: any, index) =>
                        <div className="navbar-item is-hoverable" key={page + index}>
                            <Link className="navbar-link" href={page?.link}>
                                {page?.title}
                            </Link>
                        </div>
                    )}
                </div>

                <div className="navbar-dropdown">
                    {NavBarPage.map((page: any, index) =>
                        <div className="navbar-item has-dropdown is-hoverable" key={page + index}>
                            <Link className="navbar-link" href={page?.link}>
                                {page?.title}
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <hr className="navbar-divider" />

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <Link className="navbar-item" href="/contact" style={{ cursor: "pointer" }}>
                            <small><em>Report an Issue</em></small>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav


const NavBarPage = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About",
        link: "/about",
    },

    {
        title: "Contact",
        link: "/contact",
    },
    {
        title: "Downloads",
        link: "/downloads",
    },
]
