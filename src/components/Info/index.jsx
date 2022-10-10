import React from 'react'
import styles from "./Info.module.scss";


export const Info = ({ title, description, img, onClose }) => {
    return (
        <div className={styles.card__empty}>
            <img width={120} src={img} alt="Empty" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onClose} className="green__btn empty__btn"><img src="img/arrow.svg" alt="Arrow" />Вернуться назад</button>
        </div>
    )
}
