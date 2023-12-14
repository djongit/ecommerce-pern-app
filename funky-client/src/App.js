import logo from './logo.svg'; // template
import './App.css'; // template
import { Register } from './features/register/Register';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
const appRouter = createBrowserRouter(createRoutesFromElements(
  //   - App root router with all components
  <Route path = '/' element = {<Root/>}>
      <Route index element = {<HomePage/>}/>
      <Route path = '/register' element = {<Register/>}/>
  </Route>
));


function App () {
  return (
    <RouterProvider router = { appRouter } />
  )
};
/**
 * 
 * template
 * function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 
*/



export default App;
