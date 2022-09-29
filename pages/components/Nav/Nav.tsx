import { info } from 'console';
import Link from 'next/link'
import React from 'react'
import 'bulma/css/bulma.css';

const Nav = () => {

    const NavBarItem = (props: any) => (
        <a>

        </a>
    )

    const openNavBar = function openNav() {

    }

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

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu" onClick={openNavBar}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
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

export default Nav
