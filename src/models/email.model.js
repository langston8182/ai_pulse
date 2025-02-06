class Email {
    constructor(to, subject, htmlBody, bccAddresses = []) {
        this.to = to;
        this.subject = subject;
        this.htmlBody = htmlBody;
        this.bccAddresses = Array.isArray(bccAddresses) ? bccAddresses : [];
    }
}

module.exports = { Email };