import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { urlToFinish } from '../urls'

export default function Controller() {
  const navigate = useNavigate()
  const [games, setGames] = React.useState([])
  const adminRes = async (data) => {
    const res = await axios.post(urlToFinish, {data})
    if (typeof res.data === 'string') {
      alert(res.data)
    } else {
      setGames(res.data)
    }
    console.log(res.data);
  }

  return (
    <div style={{ marginTop: '30px' }}>
      <a href='nn' target={'_blanc'} className="type">Server</a>
      <div className="type" onClick={() => adminRes('get')}>Get all games</div>
      <div className="type" >Hide all games</div>
      {
        games.map((elem, idx) => <div key={elem.name + idx} style={{ padding: '10px 0' }}>
          <div>ID: {elem.id}</div>
          <div>Name: {elem.roomName}</div>
          <div>Amount: {elem.amount}</div>
          <div>Time: {elem.time}</div>
          <div>SpyId: {elem.spyId}</div>
          <div>Location: {elem.location}</div>
        </div>)
      }

      <div className="type" onClick={() => adminRes('rem')} style={{ outline: '2px solid red' }}>AЗ-5</div>
      <button onClick={() => navigate('/')} style={{ marginTop: '15px' }} className="next">Home</button>
    </div>
  )
}
