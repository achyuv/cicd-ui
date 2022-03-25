import logo from './logo.svg';
import './App.css';
import {Planets} from './Components/Planets';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
        <Container fluid>
    <Planets></Planets>
    </Container>
    </div>
  );
}

export default App;
