import React from 'react'
import axios from 'axios'
import { urlToGetGames, urlToEnter } from '../urls'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addData } from '../redux/mainSlice'

export default function ChooseGame() {
    const dispatch = useDispatch()
    const [games, setGames] = React.useState([])
    const navigate = useNavigate()

    React.useEffect(() => {
        const helpGetGames = async () => {
            try {
                const res = await axios.get(urlToGetGames)
                setGames(res.data)
                games.forEach(element => {
                    delete element.location
                });
            } catch (error) {
                console.log('SOMETHING WAS WRON ')
            } 
        }
        helpGetGames()
               
    }, [])
    

    const enterGame = async (id) => {
        try {
            const res = await axios.post(urlToEnter, {id})
            if (typeof res.data === 'string') {
                return alert('Room is full')
            }
            dispatch(addData(res.data))
            navigate('/choose/cart')

        } catch (error) {
            console.log('SOMETHING WAS WRON ')
        } 
    }
    return (
        <>
            <h1 className="title">Join game</h1>
            <div className="choose-game">
                {
                    games.length !== 0 && (
                        games.map((elem) => <div
                            style={{ position: 'relative' }}
                            to='cart'
                            
                            key={elem.id}
                            className="block-game">
                            <div onClick={() => enterGame(elem.id)} className="game-name">{elem.roomName}</div>
                            <div className="players-amount">{elem.entered}/{elem.amount}</div>
                        </div>)
                    )
                }
            </div>
            <button className="next" onClick={() => navigate('/')}>Home</button>
        </>
    )
}
