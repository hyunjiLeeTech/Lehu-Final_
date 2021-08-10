import "./Title.css";

const Title = (props) => {
  const { title, color } = props;
  return (
    <div>
      <p
        className={
          color === "black" ? "title black text-center" : "title text-center"
        }
      >
        {title}
      </p>
    </div>
  );
};

export default Title;
