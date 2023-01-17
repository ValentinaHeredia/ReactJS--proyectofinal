import logo from '../logo.svg';
export default function Examples(){
    const greeting = "bienvenidos a mi ecommerce!";

    const mostrarCurso = () => "comision 43580 - React JS";
  
    let styleHeader = {
      backgroundColor: "black",
      margin: "20px 10px",
      border: "solid 3px red",
    }
    return(
        <section className="App">
        <div syle={styleHeader} className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{color: "pink"}}> {mostrarCurso()} </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {greeting}
            <br/>
            {"hola"}
          </a>
       </div>
      </section> 
    )
}