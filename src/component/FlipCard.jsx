import { useState } from 'react'
import styled from 'styled-components'

const FlipImageContainer = styled.div`
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg'  };
`

const FrontImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`

const BackImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`

export default function FlipCard({front, back}) {
  const [flipped, setFlipped] = useState(false)
  return(
    <>
      <FlipImageContainer flipped={flipped ? 'flip' : ''} >
        <FrontImage src={front}/>
        <BackImage src={back}/>
      </FlipImageContainer>
      <button onClick={() => setFlipped(prev => !prev)}>뒤집기</button>
    </>
  ) 
}