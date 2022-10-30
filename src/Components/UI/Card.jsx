import styles from './Card.module.css';

//* props.className - passed on as is to the card
function Card(props) {
    return(
        <div className={`${styles.Card} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Card; 