import LogIn from "../components/RegistrationAndLogin/Login";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";

const LogInPage = ({
  setPopupTitle,
  setPopupContent,
  togglePopup,
  isPopupOpen,
}) => {
  return (
    <div>
      <Header />
      <LogIn
        setPopupTitle={setPopupTitle}
        setPopupContent={setPopupContent}
        togglePopup={togglePopup}
        isPopupOpen={isPopupOpen}
      />
      <Footer />
    </div>
  );
};

export default LogInPage;
