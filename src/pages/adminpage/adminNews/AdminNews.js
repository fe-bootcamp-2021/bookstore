import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getNews,
  deletingNews,
  addingNews,
} from "../../../redux/ducks/newsSlice";

import { encodeToBase64 } from "../../../components/FileUpload/Fileupload";
import Modal from "../../../ui/modal/Modal";
// import Input from "../../components/Input/Input";
import styles from "./AdminNews.module.css";
import ChangeNewsForm from "../components/changeNewsPage/ChangeNewsForm";

const AdminNews = (props) => {
  const [fileBase64, setFileBase64] = useState("");
  const [showNewsDetail, setShowNewsDetail] = useState(false);
  const [currentNews, setCurrentNews] = useState(null);

  console.log("currentNews", currentNews);
  console.log("base64", fileBase64);

  const currentUser = useSelector((state) => state.users.currentUser);
  console.log("admin NEWS cu", currentUser);
  const news = useSelector((state) => state.news);
  console.log("adminNEWS", news);
  const dispatch = useDispatch();

  const title = useRef("");
  const datePublished = useRef("");
  const description = useRef("");

  const addNewsHandler = (e) => {
    e.preventDefault();
    const newNews = {
      title: title.current.value,
      datePublished: datePublished.current.value,
      description: description.current.value,
      img: fileBase64,
    };
    dispatch(addingNews({ newNews, idToken: currentUser.idToken }));
    title.current.value = "";
    datePublished.current.value = "";
    description.current.value = "";
    setFileBase64("");

    title.current.focus();
  };
  const onFileChange = (e) => {
    console.log("file changed");
    const file = e.target.files[0];
    console.log("choosen file", file);
    encodeToBase64(file, setFileBase64);
  };

  return (
    <>
      <Modal
        closing={() => [setShowNewsDetail(false), setCurrentNews(null)]}
        show={showNewsDetail}
      >
        {currentNews ? (
          <ChangeNewsForm news={currentNews} />
        ) : (
          <h3>Loading...</h3>
        )}
      </Modal>
      <h1
        style={{
          width: "30%",
          margin: "auto",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Admin NEWS
      </h1>
      <div className={styles.AdminNews}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div className={styles.FormDiv}>
            <form>
              <p style={{ fontWeight: "bold" }}>Add new NEWS</p>
              <label>title</label>
              <input ref={title} />
              <label>date published</label>
              <input ref={datePublished} />
              <label>description</label>
              <input ref={description} />
              <label>image</label>
              <input type="file" onChange={(e) => onFileChange(e)} />
              {fileBase64 ? <p>image loaded )</p> : null}
              <button
                style={{ display: "block", margin: "auto", marginTop: "10px" }}
                onClick={(e) => addNewsHandler(e)}
              >
                add
              </button>
            </form>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button
          style={{ marginBottom: "10px" }}
          onClick={() => dispatch(getNews())}
        >
          show all NEWS
        </button>
      </div>
      <div className={styles.TableDiv}>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th style={{ width: "20%" }}>date</th>
              <th>description</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {news.map((news) => {
              return (
                <tr key={news.id}>
                  <td style={{ width: "20%" }}>{news.id}</td>
                  <td>{news.datePublished}</td>
                  <td>{news.description}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <button
                        onClick={() =>
                          dispatch(
                            deletingNews({
                              newsId: news.id,
                              idToken: currentUser.idToken,
                            })
                          )
                        }
                      >
                        delete
                      </button>
                      <button
                        onClick={() => [
                          setShowNewsDetail(true),
                          setCurrentNews(news),
                        ]}
                      >
                        change
                      </button>
                    </div>
                  </td>
                  <td>
                    <img src={news.img} width={"30px"} alt="cant found" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminNews;
