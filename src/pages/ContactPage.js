import ContactList from "../components/contact/ContactList";
import ContactInfo from "../components/contact/ContactInfo";
import ContactProvider from "../components/contact/ContactProvider";
import TitleBar from "../components/common/TitleBar";
function ContactPage() {
    return(
        <>
            <TitleBar/>
            <ContactProvider>
                <div style={{display: "flex"}}>
                    <ContactList/>
                    <ContactInfo/>
                </div>
            </ContactProvider>
        </>
    )
}

export default ContactPage;