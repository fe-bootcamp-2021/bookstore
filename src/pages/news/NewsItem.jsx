export default function NewsItem({ title, desc, date, imgSrc }) {
  return (
    <li className="newsItem">
      <div className="newsItemContent">
        <div className="newsItemPart">
          <span>{date}</span>
          <h3 className="newsTitle">{title}</h3>
          <p className="newsDesc">{desc}</p>
        </div>
        <div className="newsItemPart">
          <img width="500px" height="300px" src={imgSrc}></img>
        </div>
      </div>
      <hr></hr>
    </li>
  );
}
