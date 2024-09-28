import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export const Login = () => {

  return (
  <GoogleLogin
  onSuccess={credentialResponse => {

    const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
    console.log(credentialResponseDecoded);
    console.log(credentialResponse);
    
  }}
  onError={() => {
    console.log('Login Failed');
  }}/>
)}
