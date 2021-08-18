import styles from "./Footer.module.css";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";

export default function Footer() {
  return (
    <footer>
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
            <td>Sunday</td>
            <td>9-00 - 17-00</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>

      <div>
        <p>Phone Number:</p>
        <a href="tel:+37455282828">
          {" "}
          <FiPhoneCall style={{ marginRight: "8px" }} /> +374 55 28 28 28
        </a>
        <hr></hr>
        <p>E-mail:</p>
        <a href="mailto:luysbookstore@gmail.com">
          {" "}
          <GoMail style={{ marginRight: "8px" }} /> luysbookstore@gmail.com
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
