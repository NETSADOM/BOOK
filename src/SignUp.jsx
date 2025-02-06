import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name" className="auth-input" />
      <input type="email" placeholder="Email" className="auth-input" />
      <input type="password" placeholder="Password" className="auth-input" />
      <input type="password" placeholder="Confirm Password" className="auth-input" />
      <button className="auth-button">Sign Up</button>
      <p><Link to="/signin">Already have an account? Sign In</Link></p>
    </div>
  );
}

export default SignUp;