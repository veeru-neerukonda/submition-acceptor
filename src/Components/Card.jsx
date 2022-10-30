import styles from './Card.module.css';

function Card(props) {
    return(
        <div class={styles.Card}>
            {props.children}
        </div>
    )
}

export default Card; 