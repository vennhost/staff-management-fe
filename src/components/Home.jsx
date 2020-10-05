import React from "react";
import bg from "../img/bg2.png"



class Home extends React.Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="home-page">

                <img className="image" src={bg} width="100%" alt="bg image" />

               <div className="container signin-form">
                <div className="row">
                    <div className="col-sm">
                    
                    </div>
                    <div className="col-sm">
                        <div><h4>STAFF SIGN IN</h4></div>

                    <form>
                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Your Email" aria-describedby="emailHelp"/>
                            <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                        </form>
                    


                    </div>
                    <div className="col-sm">
                    
                    </div>
                </div>
                </div> 
           </div>

           

         );
    }
}
 
export default Home;