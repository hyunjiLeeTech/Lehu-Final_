import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  const { name, onClick, linkTo } = props;

  return (
    <div className="mb-5 d-flex justify-content-center">
      <Link to={linkTo} className="btnTitle">
        <button className="btn mb-4" onClick={onClick}>
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Button;
