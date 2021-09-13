import { useSelector } from "react-redux";
import cn from "classnames";

import styles from "./Footer.module.css";

import { ReactComponent as PhoneIcon } from "../../assets/icons/telephone.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/e_mail.svg";

export default function Footer() {
  const { isDark } = useSelector((state) => state);
  
  return (
    <footer
      className={cn(
        styles.footer,
        { [styles.footerDarkTherme]: isDark },
        { [styles.footerLightTherme]: !isDark }
      )}
    >
      <table>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>9-00 - 18-00</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>9-00 - 18-00</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>9-00 - 18-00</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>9-00 - 18-00</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>9-00 - 18-00</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>9-00 - 17-00</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>

      <div>
        <p>Phone Number:</p>
        <a href="tel:+37455282828">
          <PhoneIcon />
          <span>+374 55 28 28 28</span>
        </a>
        <hr></hr>
        <p>E-mail:</p>
        <a href="mailto:luysbookstore@gmail.com">
          <EmailIcon />
          <span>luysbookstore@gmail.com</span>
        </a>
        <hr></hr>
      </div>

      <iframe
        title="map"
        className={styles.map}
        src="https://yandex.ru/map-widget/v1/-/CCUivBCRgD"
        frameBorder="1"
      ></iframe>
    </footer>
  );
}
