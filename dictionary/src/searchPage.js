import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchPage() {
    const [word, setWord] = useState('');
    const [pos, setPos] = useState('n.');

    const changePos = (e) => {
        setPos(e.target.value);
    }

    const changeWord = (e) => {
        setWord(e.target.value);
    }

    return <div>
        <input onChange={changeWord} placeholder="enter your word"></input>
        <select onChange={changePos}>
            <option value={'n.'}>n.</option>
            <option value={'a.'}>a.</option>
            <option value={'prep.'}>prep.</option>
            <option value={'adv.'}>adv.</option>
            <option value={'v.'}>v.</option>
        </select>
        <button>search by word only</button>
        <button><Link to={`/${word}/${pos}`}>search by word and part of speech</Link></button>
        <button><Link to={`/part-of-speech/${pos}`}>get random word by part of speech</Link></button>
    </div>
}