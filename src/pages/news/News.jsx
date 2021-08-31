import { useSelector } from "react-redux";
import cn from "classnames";

import "./News.css";

import NewsItem from "./NewsItem";

export default function News(props) {
  const { isDark } = useSelector((state) => state);

  return (
    <ul
      className={cn(
        "news",
        { newsDarkMode: isDark },
        { newsLightMode: !isDark }
      )}
    >
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
