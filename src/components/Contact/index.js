import React from "react";

import Links from "../Links";

import "./Contact.css";

const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <button className='btw'>GET THE APP TODAY</button>
                <div className='links-box'>
                    <Links title='Company' links={["Home", "Jobs", "Press"]} />
                    <Links title='Development' links={["IOS", "Andrid"]} />
                    <Links
                        title='Marketing'
                        links={["Advertising", "Referals", "Get Quote"]}
                    />
                    <Links
                        title='Community'
                        links={["Social", "Forum", "Contact", "FAQ"]}
                    />
                    <Links
                        title='Info'
                        links={["Terms of Serfice", "Privacy Policy"]}
                    />
                </div>
                <h2>Get In Touch</h2>
                <p>
                    Subscribe to our newsletter and get notification for
                    upcoming cool stuff
                </p>
                <form>
                    <input type='email' />
                    <button>COUNT ME IN</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
