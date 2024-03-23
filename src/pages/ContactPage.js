import ContactList from "../components/contact/ContactList";
import ContactInfo from "../components/contact/ContactInfo";

function ContactPage() {
    return(
        <div style={{display: "flex"}}>
            <ContactList/>
            <ContactInfo/>
        </div>
    )
}

export default ContactPage;