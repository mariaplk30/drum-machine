import React, { useEffect } from 'react'
import {bankOne, bankTwo} from '../dataSound'
import {useDispatch} from 'react-redux';
import {nameAction} from '../actions/nameAction'
import useKeypress from '../hooks/useKeyPress'


const DrumPad = ({letter}) => { 

    const dispatch = useDispatch();
    const sound = bankOne.filter(function(item) {
        return item.keyTrigger === letter;
    });    
    
    const makeSound = () =>{
        const audio = new Audio(sound[0].url);
        audio.play();
        console.log(sound[0].id)
        dispatch(nameAction(sound[0].id))
    }

    useKeypress(sound[0].keyCode, () => makeSound());


    return (
        <div>
            <button onClick={() => makeSound()}>{letter}</button>
        </div>
    )
}

export default DrumPad
