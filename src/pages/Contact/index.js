
const Contact = () => {
    return (
        <section className="main-sec">
            <h2 data-testid="h2tag">Contact me</h2>
            <address id="contact-info">
                <div>Send me an email: </div>
                <div>
                    <a href="mailto:dkbaffour777career@gmail.com">dkbaffour777career@gmail.com</a>
                </div>
                <div>-- OR --</div>
                <div>
                    <span>Text message: </span>
                    <span>(602) 571 9734</span>
                </div>
            </address>
        </section>
    );
}

export default Contact;