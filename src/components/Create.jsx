import React from 'react'
import { useForm } from "react-hook-form";
import { urlToCreate } from '../urls';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Create() {
    const navigate = useNavigate()
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onSubmit'
    })

    const onSubmit = async (data) => {
        await axios.post(urlToCreate, data)
        reset()
    }
    return (
        <>
            <h1 className="title">Create game</h1>
            <form className="block_form" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="players_title">Enter number of players</h3>
                <input 
                type="text" 
                className="players_amount" 
                    {...register('amount', {
                        required: 'Enter amount',
                        pattern: {
                            value: /[3-9]{1}/,
                            message: 'correct value f 3 to 9'
                        },
                        maxLength: {
                            value: 1,
                            message: 'big amount'
                        },
                    })} /> 
                {errors.amount ? <div style={stylesErr}>{errors.amount.message}</div> : ''}
                

                <h3 className="players_title">Enter room name</h3>
                <input 
                type="text" 
                className="players_amount"
                    {...register('roomName', {
                        required: 'Enter room name',
                        minLength: {
                            value: 2,
                            message: 'name is short'
                        }
                    })} /> 
                {errors.roomName ? <div style={stylesErr }>{errors.roomName.message}</div> : ''}
                

                <h3 className="minutes_title">Enter game time</h3>
                <input 
                type="text" 
                className="minutes"
                    {...register('time', {
                        required: 'Enter time',
                        pattern: {
                            value: /[0-9]{1}/,
                            message: 'enter just a number'
                        },
                        maxLength: {
                            value: 3,
                            message: 'long time'
                        },
                    })} />
                {errors.time ? <div style={stylesErr}>{errors.time.message}</div> : ''}

                <button className="start">Create</button>
            </form>
            <button className="next" onClick={() => navigate("/")}>Home</button>
        </>
    )
}

const stylesErr = {
    fonstSize: '14px',
    color: 'red',
    marginBottom: '-15px'
}