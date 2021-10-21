import './App.css';
import {Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './components/Create.js';
import AllUsers from './components/Dashboard.js';
import Edit from './components/Update.js';
import View from './components/Read.js';

function App() {
  return (
    <div className="App">
      <Router>
        <AllUsers path="/" /> 
        <Form path="/api/users/new" />
        <Edit path="/api/users/update/:id" />
        <View path="/api/users/:id" /> 
      </Router>
    </div>
  );
}

export default App;
