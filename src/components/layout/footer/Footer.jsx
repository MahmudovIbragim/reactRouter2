import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.Products}>
            <ul>
              <li>Houdini</li>
              <li>Houdini Engine</li>
              <li>Houdini Indie</li>
            </ul>
          </div>
          <div className={scss.Learn}>
            <ul>
              <li>Learning Paths</li>
              <li>Tutorials</li>
              <li>Talks & Webinars</li>
              <li>Schools & Training</li>
              <li>Education Programs</li>
            </ul>
          </div>
          <div className={scss.Support}>
            <ul>
              <li>Customer Support</li>
              <li>Help Desk | FAQ</li>
              <li>Documentation</li>
              <li>Report a Bug/RFE</li>
              <li>Sales Inquiry</li>
            </ul>
          </div>
          <div className={scss.Legal}>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>License Agreement</li>
              <li>Accessibility</li>
              <li>Responsible Disclosure</li>
            </ul>
          </div>
          <div className={scss.Company}>
            <ul>
              <li>About SideFX</li>
              <li>Press</li>
              <li>T-Shirt Store</li>
              <li>Careers</li>
              <li>Internships</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
