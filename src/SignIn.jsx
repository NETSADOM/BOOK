import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" className="auth-input" />
      <input type="password" placeholder="Password" className="auth-input" />
      <button className="auth-button">Sign In</button>
      <p><Link to="/signup">Don't have an account? Sign Up</Link></p>
    </div>
  );
}

export default SignIn;