
import React from 'react'
import CitySearch from '../components/CitySearch'
import CityWrapper from '../components/CityWrapper'
import LottiePLayer from '../components/LottiePlayer'
import styles from '../Lottie.module.css'

export default function Home() {
  return (
    <>  
        <div className={styles.lottieCont}>
          <LottiePLayer 
          src="/lottie/world-map.json"
          />
        </div>
        <CitySearch />
        <CityWrapper />
    </>
  )
}
