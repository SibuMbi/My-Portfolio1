import "./Body.css";

function Body(props) {
  return (
    <div>
      <div className={props.cName}>
        <img src={props.bodyimg} alt="bg image" />

        <div className="body-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
