import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";


export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button style={{position: 'fixed', top: '32%', right: '60%', height: '13%', width: '13%'}} type="button" class="btn btn-warning btn-lg" onClick={() => loginWithRedirect()}>Login APP</button>;
  
};