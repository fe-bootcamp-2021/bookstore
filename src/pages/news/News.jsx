import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

import "./News.css";

import NewsItem from "./NewsItem";
import { getNews } from "../../redux/ducks/newsSlice";

export default function News(props) {
  const dispatch = useDispatch()
  const { isDark } = useSelector((state) => state);
  const { news } = useSelector((state) => state);

  useEffect(()=>{
    dispatch(getNews())
  },[])
  console.log(news, ':::NEWSSSS');
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
