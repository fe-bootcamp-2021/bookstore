import BackDrop from './backdrop/BackDrop.js';
import styles from './Modal.module.css';


const Modal = (props) => {
    return (
        props.show ?
        <>
            <BackDrop closing={props.closing} />
            <div className={styles.Modal}>
                {props.children}
            </div>
        </> : null
    )
}

export default Modal;