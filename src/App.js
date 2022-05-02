import { useState } from 'react';
import './App.css';

const App = () => {
  // First Lesson
  const [name, setName] = useState("Adri");

  // Second Lesson
  const [count, setCount] = useState(0);

  // Third Lesson
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // First Lesson
  const handleHejjButton = () => {
    setName("Nanny");
  }

  // Second Lesson
  const handleCountButtons = (e) => {
    const event = e.target;
    switch(event.id) {
      case "substract":
        setCount(count-1);
        break;
      case "add":
        setCount(count+1);
        break;
    }
  }

  // Third Lesson
  const handleChangeLoginInputs = (e) => {
    const event = e.target;
    console.log(event);
    switch(event.id) {
      case "username":
        setEmail(event.value);
        break;
      case "password":
        setPassword(event.value);
        break;
    }
  }

  return (
    <div className="App">
      <div className="lesson">
        <h1>Hola {name}</h1>
        <button onClick={handleHejjButton}>Hejj</button>
      </div>
      <div className="lesson">
        <button onClick={handleCountButtons} id="add">+1</button>
        <span>{count}</span>
        <button onClick={handleCountButtons} id="substract">-1</button>
      </div>
      <div className="lesson">
        <h2>Iniciar Sesión</h2>
        <label for="username">Usuario: <input type="email" id="username" name="username" value={email} onChange={handleChangeLoginInputs}/></label>
        <label for="password">Contraseña: <input type="password" id="password" name="password" value={password} onChange={handleChangeLoginInputs}/></label>
      </div>
    </div>
  );
}

export default App;
