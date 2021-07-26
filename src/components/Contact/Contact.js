import email_icon from '../../assets/images/email.png';
import phone_icon from '../../assets/images/call.png'

const Contact =()=> {
    return (
        <section id="contact-me">
            <h2>Contact</h2>
            <address className="contact-info">
                <div id="email">
                    <img src={email_icon} alt="email"/>
                    <a href="mailto:dkbaffour@gmail.com">dkbaffour@gmail.com</a>
                </div>
                <div id="call">
                    <img src={phone_icon} alt="call"/>
                    <p>+1 602 571 9734</p>
                </div>
            </address>
        </section>
    );
}

export default Contact;