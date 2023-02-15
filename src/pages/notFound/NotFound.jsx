import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

const NotFound = () => {
  return (
    <div className="not-found">
      <PageHeader pageTitle="Page Not Found" />
      <div className="container d-flex flex-column justify-content-center align-items-center text-center py-5">
        <h2 className="text-white">Sorry, this page is not found</h2>
        <p className="text-white-50">
          We are sorry, the page you have looked for does not exist in our
          website! you can go to our home page
        </p>
        <Link to="/" className="butn main-butn">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
