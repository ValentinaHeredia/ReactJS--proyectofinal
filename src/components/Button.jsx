import "./button/button.css";
export default function MyButton (props) {
  console.log(props);
    return (
    <button style={ { backgroundColor: props.color } } className="btn">
      {props.text}
    </button>
    );
  }

  export function ButtonChild(props){
    console.log(props);

    return (
    <button style={ { backgroundColor: props.color } } className="btn">
      {props.children}
    </button>
    );
  }