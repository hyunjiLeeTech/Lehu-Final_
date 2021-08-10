import Registration from "../components/RegistrationAndLogin/Registration";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";

const REgistrationPage = ({ setPopupTitle, setPopupContent, togglePopup }) => {
  return (
    <div>
      <Header />
      <Registration
        setPopupTitle={setPopupTitle}
        setPopupContent={setPopupContent}
        togglePopup={togglePopup}
      />
      <Footer />
    </div>
  );
};

export default REgistrationPage;
