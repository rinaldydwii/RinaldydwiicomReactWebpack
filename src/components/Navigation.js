import React from 'react';
import BrandLogo from '../assets/brand.svg';
import '../sass/nav.scss';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        if (props.menulist != undefined)
            if (props.menulist == true) {
                if (props.home == true)
                    this.state = {
                        menu: [
                            {
                                href: "#header",
                                name: "Home"
                            },
                            {
                                href: "#blog",
                                name: "Blog"
                            },
                            {
                                href: "#portfolio",
                                name: "Portfolio"
                            },
                            {
                                href: "#about",
                                name: "About"
                            },
                            {
                                href: "#contact",
                                name: "Contact"
                            },
                        ]
                    };
                else if (props.home == undefined)
                this.state = {
                    menu: [
                        {
                            href: "/",
                            name: "Home"
                        },
                        {
                            href: "/blog",
                            name: "Blog"
                        },
                        {
                            href: "/portfolio",
                            name: "Portfolio"
                        },
                        {
                            href: "/about",
                            name: "About"
                        },
                        {
                            href: "/#contact",
                            name: "Contact"
                        },
                    ]
                };
            };
    };
    showViewNavMobile = () => {
        let elem = document.getElementsByClassName('nav__list')[0];
        if (elem.style.display == "block") {
            elem.style.display = "none";
        }
        else {
            elem.style.display = "block";
        }
    }
    clickNavMobile = () => {
        if (window.innerWidth < 768) {
            let elem = document.getElementsByClassName('nav__list')[0];
            if (elem.style.display == "block") {
                elem.style.display = "none";
            }
            else {
                elem.style.display = "block";
            }
        }
    }
    render() {
        let menulist = '';
        if (this.props.menulist != undefined) 
            if (this.props.menulist == true) {
                menulist = (
                    <div className="nav__list">
                    {
                        this.state.menu.map((menu, index) => {
                            return (
                                <a href={menu.href} className="nav__item" key={index} onClick={ this.clickNavMobile }>
                                    {menu.name}
                                </a> 
                            );
                        })
                    }
                    </div>
                )
            }
        return (
            <nav id="nav">
                <div className="container">
                    <div className="nav__brand">
                        <a href="/"><BrandLogo height={27} width={172}/></a>
                    </div>
                    {menulist}
                    <div onClick={this.showViewNavMobile} className="nav__button nav__button__left hidden-sm">
                        <i className="icon-menu"></i>
                    </div>
                </div>
            </nav>
        );
    };
};

export default Navigation;
