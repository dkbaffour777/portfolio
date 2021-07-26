

const Contact =()=> {
    return (
        <section id="contact-me">
            <h2>Contact</h2>
            <address className="contact-info">
                <div id="email">
                    <img src="./assets/images/email.png" alt="email"/>
                    <a href="mailto:dkbaffour@gmail.com">dkbaffour@gmail.com</a>
                </div>
                <div id="call">
                    <img src="./assets/images/call.png" alt="call"/>
                    <p>+1 602 571 9734</p>
                </div>
            </address>
        </section>
    );
}

export default Contact;