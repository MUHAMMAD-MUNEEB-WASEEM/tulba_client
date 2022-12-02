import React from 'react'
import styles from 'styles/checklist/Main.module.scss'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.first} >
                <div className={styles.titleContainer}>
                    <div className={styles.icon}>icon</div>
                    <div className={styles.title}>Checklist</div>
                </div>
                <div className={styles.search}>
                    <p>Search All Your Tasks here</p>
                    <div>
                        <input type="search" name="search" id="search" placeholder='Search..'/>
                    </div>
                </div>

                <div className={styles.date}></div>

            </div>
            <div className={styles.second} >2</div>
            <div className={styles.third} >3</div>
        </div>
    )
}

export default Main