import React from 'react'
import { useSelector } from 'react-redux'
import { urlToQuit, urlToNext, urlToFinish } from '../urls'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Cart() {
  const { location, isSpy, idRoom } = useSelector((state) => state.main)
  const [card, setCard] = React.useState(false)
  const [canQuit, setCanQuit] = React.useState(true)
  const navigate = useNavigate();

  React.useEffect(() => {
    if (location === '') navigate('/choose')
  }, [])

  const next = async () => {
    const res = await axios.patch(urlToNext, { id: idRoom })
    if (res.data === 'good') {
      setCard(!card)
    } else if (res.data === 'not all players') {
      alert('Not all players entered!')
    } else {
      navigate('/choose')
    }

  }
  const quit = async () => {
    const res = await axios.patch(urlToQuit, { id: idRoom })
    if (res.data === 'full') {
      setCanQuit(false)
    } else {
      navigate('/choose')
    }

  }
  const finish = async () => {
    const res = await axios.patch(urlToFinish, { id: idRoom })
    console.log('hi');
    console.log(res.data);
    if (res.data === 'good') {
      navigate('/choose')
    } else if (res.data === 'quit') {
      quit()
    } else {
      navigate('/choose')
    }
  }

  return (
    <>
      <h1 className="title">Open</h1>
      <div className={`card ${card ? 'addCard' : ''}`} >
        {
          card && <div className='insideCard'>{isSpy ? 'Ты шпион' : location}</div>
        }

      </div>
      <div className="bb" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          className="next"
          onClick={quit}
          style={{ outline: `${canQuit ? '' : '3px solid grey'}` }}>Quit</button>
        <button className="next" onClick={next}>Next</button>
        <button className="next" onClick={finish}>Finish game</button>
      </div>
    </>
  )
}
