import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {   //functional Component
  return (
    <>                                          
  <h1 className="bg-primary">Hello World {10+20}</h1>
  {console.log("Hello there")}
  <br/>
  <h1 className="bg-primary">JSX{"->"} JS +XML or(Syntax extension of javascript)</h1>
</>  //JSX fragment
  );
}

export default App;
