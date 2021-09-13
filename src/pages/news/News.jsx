import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

import "./News.css";

import NewsItem from "./NewsItem";
import { getNews } from "../../redux/ducks/newsSlice";
import { loaderSource } from "../bookdetailpage/constants";

export default function News(props) {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state);
  const { news } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <ul
      className={cn(
        "news",
        { newsDarkMode: isDark },
        { newsLightMode: !isDark }
      )}
    >
      {news.length ? (
        news.map(({ datePublished, description, id, img, title }) => {
          return (
            <NewsItem
              date={datePublished}
              desc={description}
              title={title}
              imgSrc={img}
              key={id}
            />
          );
        })
      ) : (
        <div className="news_loader">
          <img width="100%" height="80%" src={loaderSource} alt="loader" />
        </div>
      )}
    </ul>
  );
}
