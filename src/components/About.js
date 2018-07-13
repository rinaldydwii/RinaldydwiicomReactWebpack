import React from 'react';
import AboutImage from '../assets/about-picture.jpg';
import '../sass/about.scss';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            socialMedia: [
                {
                    id: 1,
                    link: 'mailto:rinaldydwii@gmail.com',
                    icon: 'icon-mail',
                    name: 'rinaldydwii@gmail.com'
                },
                {
                    id: 2,
                    link: 'https://github.com/rinaldydwii',
                    icon: 'icon-github',
                    name: 'rinaldydwii'
                },
                {
                    id: 3,
                    link: 'https://dribbble.com/rinaldydwii',
                    icon: 'icon-dribbble',
                    name: 'rinaldydwii'
                },
                {
                    id: 4,
                    link: 'https://instagram.com/rinaldydwii',
                    icon: 'icon-instagram',
                    name: 'rinaldydwii'
                },
                {
                    id: 5,
                    link: 'https://twitter.com/rinaldydwii',
                    icon: 'icon-twitter',
                    name: 'rinaldydwii'
                },
            ]
        }
    }
    render() {
        let socialMediaList = this.state.socialMedia.map((value) => {
            return (
                <a href={ value.link } className="social-media__item" key={ value.id }>
                    <i className={ value.icon }></i>
                    <span className="social-media__item__name">{ value.name }</span>
                </a>
            );
        })
        return (
            <section id="about">
                <div className="container">
                    <div className="section__title"><h1>About</h1></div>
                    <div className="section__content">
                        <div className="about__image">
                            <img src={AboutImage} alt="Profile Picture" />
                        </div>
                        <div className="about__description">
                            <p>
                                Hi, I'm Rinaldy Dwi Istanto. <br/> I'm a Front End Developer from Jakarta, Indonesia.
                            </p>
                        </div>
                        <div className="about__social-media">
                            <div className="social-media__list">
                                { socialMediaList }
                            </div>
                        </div>
                        <a className="button" href="/about">More</a>
                    </div>
                </div>
            </section>
        );
    }
};

export default About;