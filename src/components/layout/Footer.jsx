import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>Copyright ©{year} - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link to="https://twitter.com/umukcodes" target="_blank">
          <FaTwitter />
        </Link>
        <Link
          to="https://www.youtube.com/channel/UC2vJBc9AzljnTXVxnSK4qEw/videos"
          target="_blank"
        >
          <FaYoutube />
        </Link>
        <Link to="https://linkedin.com/in/godswillumukoro" target="_blank">
          <FaYoutube />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
