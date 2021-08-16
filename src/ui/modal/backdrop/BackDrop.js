import styles from './BackDrop.module.css';

const BackDrop = ({closing}) => {
    return <div onClick={closing} className={styles.BackDrop} ></div>
}

export default BackDrop;