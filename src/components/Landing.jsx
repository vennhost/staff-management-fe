import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route} from "react-router-dom";
import history from "./History"


const Landing = () => {
    return ( 
        <>
            <Router history={history}>
               <Route exact path={"/"} component={Home}/>
               {/* <Route path={`/cart`} component={Cart}/> */}
               
               </Router>
        </>
     );
}
 
export default Landing;