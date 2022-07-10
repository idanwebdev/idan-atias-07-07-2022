import React, { useRef } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { useDispatch } from 'react-redux'
import { setLocalLottie } from '../redux/appSlice'

export default function LottiePlayer(props) {
  const dispatch = useDispatch()
  const lottieRef = useRef()
  function setRef() { 
    dispatch(setLocalLottie(lottieRef.current))
  }

  return (
    <Player
    ref={lottieRef}
    onEvent={event => {
        if(event === 'load') setRef()
    }}
    loop
    src={props.src}
    style={{maxWidth: '100%', height: '100%'}}
    >
    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
  )
}
