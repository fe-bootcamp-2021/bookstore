import "./News.css";
import NewsItem from "./NewsItem";

export default function News(props) {
  return (
    <ul className="news">
      {/* we will get this info from DB and map this component */}
      <NewsItem
        date="25.08.2021"
        title="news Title"
        desc="lorem ipsum ......."
        imgSrc="imgUrl"
      />
      <NewsItem
        date="25.08.2021"
        title="news Title"
        desc="lorem ipsum ......."
        imgSrc="imgUrl"
      />
    </ul>
  );
}
