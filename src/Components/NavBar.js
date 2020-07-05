import React,  { useLayoutEffect, useState } from 'react';
import   firebase  from '../Config/fbconfig';
import SignedinNavBar from './SignedinNavBar';
import SignedoutNavBar from './SignedoutNavBar';




 function NavBar() {
 
    const [isAuthenticated, setIsAuthenticated] = useState("")

  firebase.auth().onAuthStateChanged(
        (user)=>{
          if(user){
            setIsAuthenticated("loggedin")
           
          }else{
            setIsAuthenticated("loggedout")
           
          }
        }
  )

   return(
     <div>
            { isAuthenticated === "loggedin" &&   <SignedinNavBar /> }
            { isAuthenticated === "loggedout" &&   <SignedoutNavBar /> }
     </div>
   )
}


export default NavBar 