import React from 'react';
import '../sass/contact.scss';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="section__title"><h1>Contact</h1></div>
                <div className="section__content">
                    <div className="contact__description">
                        <p>Have a question? Or wanna know about my services?<br/>Send me a message and i’ll respond as soon as possible</p>
                    </div>
                    <div className="contact__form">
                        <form action="" method="POST">
                            <input type="text" name="name" placeholder="Name" />
                            <input type="email" name="email" placeholder="Email" />
                            <input type="tel" name="phoneNumber" placeholder="Phone Number" />
                            <textarea name="message" placeholder="Message"></textarea>
                            <input type="submit" className="button" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
