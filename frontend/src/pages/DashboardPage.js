import { useEffect, useState } from "react";

import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";
import Loading from "../components/General/Loading";

const DashboardPage = () => {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("profile starts");
    fetch(
      `https://lehu-final-backend.herokuapp.com/users/${localStorage.getItem(
        "lehuIdInfo"
      )}`
    )
      .then((res) => res.json())
      .then((profile) => {
        setProfile(profile.body[0]);
        setIsLoading(false);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? <Loading /> : <Dashboard profile={profile} />}
      <Footer />
    </div>
  );
};

export default DashboardPage;
