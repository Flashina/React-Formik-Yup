import React from 'react'
import styles from '../Google/Google.module.css'

const Google = () => {
    let myColor = {
        color: 'blue'
    }

    let margToLeft = {
        marginleft: '-25px'
    }
  return (
    <>
        <div className={styles.container}>
            <h1 className={styles.google}>Google</h1>

            <input type="text" />
            <div className='searchfeel' style={{display: 'flex'}}>

            <div className={styles.search}>Google Search</div>

            <div className={styles.feeling}>I'm Feeling Lucky</div>

            </div>

            <p>Develop skills for in-demand jobs with <span style={myColor}>Google Career Certificates</span></p>

            <p style={margToLeft} >Google offered in: <span style={myColor}>Hausa</span> <span style={myColor}>Igbo</span> <span style={myColor}>Èdè</span> <span style={myColor}>Yorùbá</span> <span style={myColor}>Nigerian Pidgin</span></p>

        </div>
    </>
  )
}

export default Google