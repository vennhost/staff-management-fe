import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route} from "react-router-dom";
import history from "./History"
import Register from "./Register";
import SingleStaff from "./SingleStaff"


const Landing = () => {
    return ( 
        <>
            <Router history={history}>
               <Route exact path={"/"} component={Home}/>
               <Route path={`/register`} component={Register}/>
               <Route path={`/profile/:id`} component={SingleStaff}/>
               
               </Router>
        </>
     );
}
 
export default Landing;