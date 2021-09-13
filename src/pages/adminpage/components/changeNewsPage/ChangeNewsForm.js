import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updatingNews } from "../../../../redux/ducks/newsSlice";

import styles from "./ChangeNewsForm.module.css";

const ChangeNewsForm = ({ news }) => {
  const [fileBase64, setFileBase64] = useState("");

  const currentUser = useSelector((state) => state.users.currentUser);

  const dispatch = useDispatch();

  const title = useRef("");
  const datePublished = useRef("");
  const description = useRef("");

  const onFileChange = (e) => {
    const file = e.target.files[0];
    encodeToBase64(file);
  };

  const encodeToBase64 = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        let base64 = reader.result;
        setFileBase64(base64);
      };
      reader.onerror = (err) => console.log(err);
    }
  };

  const changeNewsHandler = (e, id) => {
    e.preventDefault();
    const changes = {
      title: title.current.value,
      datePublished: datePublished.current.value,
      description: description.current.value,
      img: fileBase64,
    };

    dispatch(updatingNews({ id, changes, idToken: currentUser.idToken }));
  };

  return (
    <div className={styles.FormDiv}>
      <h3>NEWS id: {news.id}</h3>
      <form className={styles.ChangeForm}>
        <label>title</label>
        <input ref={title} type="text" defaultValue={news.title} />
        <label>Date published</label>
        <input ref={datePublished} defaultValue={news.datePublished} />
        <label>Description</label>
        <input ref={description} defaultValue={news.description} />
        <label>image</label>
        <input type="file" onChange={(e) => onFileChange(e)} />
        {fileBase64 ? <p>image loaded )</p> : null}
        <button
          style={{ display: "block", margin: "auto", marginTop: "10px" }}
          onClick={(e) => changeNewsHandler(e, news.id)}
        >
          save changes
        </button>
      </form>
    </div>
  );
};

export default ChangeNewsForm;
