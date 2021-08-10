import LogIn from "../components/RegistrationAndLogin/Login";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";

const LogInPage = ({ setPopupTitle, setPopupContent, togglePopup }) => {
  return (
    <div>
      <Header />
      <LogIn
        setPopupTitle={setPopupTitle}
        setPopupContent={setPopupContent}
        togglePopup={togglePopup}
      />
      <Footer />
    </div>
  );
};

export default LogInPage;
