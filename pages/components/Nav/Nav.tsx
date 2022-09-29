import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" href="/">
                        Home
                    </Link>


                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link" href="/about">
                            About
                        </Link>


                        <div className="navbar-dropdown">
                            <Link className="navbar-item" href="/contact">
                                Contact
                            </Link>


                            <Link className="navbar-item" href="/downloads">
                                Downloads
                            </Link>

                            <hr className="navbar-divider" />


                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link className="navbar-item" href="/">
                                Report an Issue
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
