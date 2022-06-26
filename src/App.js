import Head from "./customComponents/Head";
import Home from "./customComponents/Home";
// import News from "./customComponents/News";
import Bollywood from "./customComponents/Bollywood";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Head />
          {/* <Home /> */}
          {/* <News /> */}
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Bollywood" element={<Bollywood />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
