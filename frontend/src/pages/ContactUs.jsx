import "../pages/Contact.css"
const ContactUS = () => {
    return (
      <div>
        <div className="container">
          <form>
            <h1>Contact Us Form</h1>
            <input type="text" id="firstName" placeholder="First Name" required />
            <input type="text" id="lastName" placeholder="Last Name" required />
            <input type="email" id="email" placeholder="Email" required />
            <input type="text" id="mobile" placeholder="Mobile" required />
            <h4>Type Your Message Here...</h4>
            <textarea required defaultValue={""} />
            <input type="submit" defaultValue="Send" id="button" />
          </form>
        </div>
      </div>
    );
  
};
export default ContactUS;