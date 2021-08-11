import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Homepage from "./pages/Homepage";
import RegistrationPage from "./pages/RegistrationPage";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import MovieListPage from "./pages/MovieListPage";
import ShowListPage from "./pages/ShowListPage";
import VideoListPage from "./pages/VideoListPage";
import DashboardPage from "./pages/DashboardPage";
import SearchResultPage from "./pages/SearchResultPage";
import Popup from "./components/General/Popup";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState(false);
  const [popupContent, setPopupContent] = useState(false);

  const togglePopup = async () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/video/:id"
            render={() => (
              <DetailsPage
                setPopupTitle={setPopupTitle}
                setPopupContent={setPopupContent}
                togglePopup={togglePopup}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Homepage
                setPopupTitle={setPopupTitle}
                setPopupContent={setPopupContent}
                togglePopup={togglePopup}
              />
            )}
          />
          <Route exact path="/videos" render={() => <VideoListPage />} />
          <Route exact path="/MovieList" render={() => <MovieListPage />} />
          <Route exact path="/showList" render={() => <ShowListPage />} />
          <Route path="/dashboard">
            {localStorage.getItem("lehuIsLogin") === "true" ? (
              <DashboardPage />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route
            exact
            path="/search/:title"
            render={() => (
              <SearchResultPage
                setPopupTitle={setPopupTitle}
                setPopupContent={setPopupContent}
                togglePopup={togglePopup}
              />
            )}
          />
          <Route
            exact
            path="/registration"
            render={() => (
              <RegistrationPage
                setPopupTitle={setPopupTitle}
                setPopupContent={setPopupContent}
                togglePopup={togglePopup}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <LoginPage
                setPopupTitle={setPopupTitle}
                setPopupContent={setPopupContent}
                togglePopup={togglePopup}
              />
            )}
          />
        </Switch>
      </Router>
      {isPopupOpen && (
        <Popup
          content={
            <>
              <h2>{popupTitle}</h2>
              <p className="popup-content">{popupContent}</p>
              <button className="btnPopup" onClick={() => togglePopup()}>
                Close
              </button>
            </>
          }
        />
      )}
    </div>
  );
}

export default App;
