import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>The elixir you are looking for does not exist or has been relocated.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default NotFound;