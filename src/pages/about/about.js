import React from "react";
import styles from "./about.module.css";

import panorama from "../about/images/panorama.jpg";
import azg from "./images/azg.jpg";
import Slider from "../../components/Slider/Slider";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.image}>
          {/* <img className={styles.img} alt="" src={bookImage} /> */}
          <Slider />
        </div>
        <div className={styles.text}>
          <p className={styles.paragraph}>
            Yes, this is the interior of the Book Store in Armenia. Mind
            blowing, isn't it? exploding_head The building was built in 1940 and
            the book store was initially a tobacco shop, that's why it has an
            Eastern style interior. Later it became a musical store and from the
            end of 1960 they started to sell books, too. orange_book From 1990
            the store was bought by Andranik Shoghunts and officially became a
            book store. For over 25 years the store is managed by Karen
            Gasparyan, whom you can see in photos
          </p>
        </div>
      </div>
      <div className={styles.title}>
        <span>Հոդվածներ մեր մասին</span>
      </div>
      <section className={styles.article}>
        <div className={styles.firstArticle}>
          <h3>
            <a
              href="https://www.azg.am/AM/culture/2019041203?fbclid=IwAR3JtmCtFKGAv8_9Vpgebsj-RNC_yaOPtmNmStoJcEoVVlF2H8ZN6w4O7JI"
              target="_blank"
            >
              Panorama.am
            </a>
          </h3>
          <img alt="" src={panorama} />
          <p>
            One of Yerevan's oldest bookstores is located at 45 Mashtots Avenue,
            with its original Eastern style amazingly well preserved up to date.
            Initially as a tobacco shop, Luys bookstore turned into a music note
            store, which also sold books in 1970s. Starting from 1990s, the
            store started to sell only books. Luys bookstore offers its
            customers high-quality literature as well as souvenirs, paintings
            and postcards. For 27 years, the bookseller of the store is Karen
            Gasparyan, who has been accustomed to working in a ‘book land’ for
            more than two decades. Speaking to Panorama.am, he said the
            bookstore sells fiction literature in different languages, albums of
            world-famous artists, Armenian literature and modern philosophy
            books. Also, the bookstore sells second-hand books, that’s why it is
            often referred to as a ‘bouquiniste’ store. “The books are mainly
            brought by the authors; older books are brought by people who no
            longer need them or aren’t interested in the books which belonged to
            their parents,” he says. According to Gasparyan, the best sellers
            are those books which are well advertised. He says Luys bookstore
            has its permanent customers. “There are people who pay a visit to
            the store every time they travel to Armenia in 20 years,” the
            bookseller says, adding the first-time visitors of the bookstore are
            impressed by its interior. “Those who are familiar with the
            bookstore, admire the store every time they enter it, while whose
            who come here for the first time, are deeply impressed. No bookstore
            with such a design exists in Yerevan,” he concluded
          </p>
        </div>
        <div className={styles.secondArticle}>
          <h3>
            <a
              href="https://www.azg.am/AM/culture/2019041203?fbclid=IwAR3JtmCtFKGAv8_9Vpgebsj-RNC_yaOPtmNmStoJcEoVVlF2H8ZN6w4O7JI"
              target="_blank"
            >
              Ազգ Օրաթերթ-Մշակույթ
            </a>
          </h3>
          <img alt="" src={azg} />
          <p>
            Վերջին տարիներին Երեւանում գրախանութային մշակույթը մի տեսակ
            ակտիվացել էՙ գրախանութները, համեմատ անցյալ մեկ-երկու տասնամյակների,
            շատացել են, թարգմանական գրքերըՙ նմանապես, ամեն ամիս արտեկրից
            հսկայական քանակով օտարագիր գրականություն է ներմուծվում: Երեւանը, այս
            առումով, եզակի է դարձել նաեւ իր «Գրքերի շուկայով» ու քաղաքի տարբեր
            մասերում գտնվող ոչ ստանդարտ «գրախանութներով»: Եթե տարիներ առաջ
            մարդիկ միայն խոսում էին գրախանութների լինելիության կարեւորության
            մասին, այսօր, արդեն դրանց գոյության պարտադրմամբ, սկսել են խոսել
            գրավաճառության նոր մոտեցումների ու գրախանութների աշխատանքային ոճի
            մասին: Անկեղծ ասածՙ մեր գրախանութներն առանձնապես չեն փայլում իրենց
            նրբաճաշակությամբ ու, առհասարակ, ոճային այլընտրանքային լուծումներով:
            Բայց Երեւանում կա մի գրախանութ, որը սարուձորով հեռու է մյուսներիցՙ
            թե՛ ոճով, թե՛ գրքային ապրանքանիշով: Խոսքը «Լույս» գրախանութի մասին
            է, որ գտնվում է Մաշտոցի 45 հասցեում: Դա Երեւան քաղաքի այն եզակի
            գրախանութն է, որն իր ոճային անաղատրությամբ պահպանվել է մինչ օրս:
            Առաջին հայացքից գրախանութը հիշեցնում է բոլորիս հայտնի Հոգվարթսի
            կախարդական գրադարանի փոքրիկ տարբերակը: Արեւելյան նրբաճաշակ
            զարդարվեստը միջավայրն այնքան միստիկ է դարձնում, որ, եթե պատուհանից
            չերեւա ժամանակակից քաղաքի գռեհիկ «ճարտարապետությունը», մարդը կարող է
            իրեն զգալ 17-18-րդ դարերի արեւելքում: Գրախանութին առանձնակի շուք են
            հաղորդում փայտե դարակներն ու պահարանները, որոնց հեղինակը հայտնի
            փայտամշակող-կահույքագործ, ՀԽՍՀ նկարիչների միության անդամ Հովհաննես
            Նղաշյանն է (1876-1968), վերջինիս այլ եզակի աշխատանքեր կարելի է
            գտնել, օրինակ, Մատենադարանում, Ազգային գրադարանում եւ այլուր
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
