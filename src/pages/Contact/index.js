import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="main-sec">
            <h2 data-testid="h2tag">Contact me</h2>
            <address id="contact-info">
                <div>
                    <span><FaEnvelope style={{marginRight: "10px"}}/> Send me an email: </span>
                    <a href="mailto:dkbaffour777career@gmail.com">dkbaffour777career@gmail.com</a>
                </div>
                <div>
                    <span><FaPhone style={{marginRight: "10px"}}/> Or a text message: </span>
                    <span>(602) 571 9734</span>
                </div>
            </address>
        </section>
    );
}

export default Contact;