import ContactList from "../components/contact/ContactList";
import ContactInfo from "../components/contact/ContactInfo";
import ContactProvider from "../components/contact/ContactProvider";

function ContactPage() {
    return(
        <ContactProvider>
            <div style={{display: "flex"}}>
                <ContactList/>
                <ContactInfo/>
            </div>
        </ContactProvider>
        
    )
}

export default ContactPage;