export default function Footer() {
  return (
    <div className="mt-auto">
      <div className="grid grid-cols-4">
        <div>
          <p className="footer-title">Contact</p>
          <ul>
            <li className="footer-link">
              <a href="">Live chat</a>
            </li>
            <li className="footer-link">
              <a href="">Call</a>
            </li>
            <li className="footer-link">
              <a href="">Email</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Help</p>
          <ul>
            <li className="footer-link">
              <a href="">Contact us</a>
            </li>
            <li className="footer-link">
              <a href="">Order status</a>
            </li>
            <li className="footer-link">
              <a href="">Register a return</a>
            </li>
            <li className="footer-link">
              <a href="">FAQs</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Client services</p>
          <ul>
            <li className="footer-link">
              <a href="">Product care</a>
            </li>
            <li className="footer-link">
              <a href="">Account</a>
            </li>
            <li className="footer-link">
              <a href="">Find a store</a>
            </li>
            <li className="footer-link">
              <a href="">Gift Cards</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Company</p>
          <ul>
            <li className="footer-link">
              <a href="">About</a>
            </li>
            <li className="footer-link">
              <a href="">Press</a>
            </li>
            <li className="footer-link">
              <a href="">Careers</a>
            </li>
            <li className="footer-link">
              <a href="">Sustainability</a>
            </li>
            <li className="footer-link">
              <a href="">Legal & Privacy</a>
            </li>
          </ul>
        </div>
      </div>
      <footer className="mt-32">
        <small>Copyright © 2024 Sneakers. All Rights Reserved.</small>
      </footer>
    </div>
  );
}
