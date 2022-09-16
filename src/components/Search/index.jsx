import React from 'react'
import styles from './Search.module.scss';

export const Search = ({searchValue, setSearchValue}) => {
    return (
        <div className={styles.search__block}>
            <img src="img/search.svg" alt="Search" />
            {searchValue ?
                <button onClick={() => setSearchValue('')} className={styles.clear__input}>
                    <span></span>
                    <span></span>
                </button>
                : null
            }
            <input
                onChange={(event) => setSearchValue(event.target.value)}
                type="text"
                value={searchValue}
                placeholder="Поиск..." />
        </div>
    )
}
