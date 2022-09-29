import { info } from 'console';
import Link from 'next/link'
import React from 'react'
import 'bulma/css/bulma.css';
import PropTypes from 'prop-types';

export default class Nav extends React.Component {




    render() {
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
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">

                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <em>
                            🛡️AGSHIELD
                        </em>
                    </a>

                    <NavbarBurger />
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
                            <Link className="navbar-item" href="/">
                                Report an Issue
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

}

