import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchPage() {
    const [word, setWord] = useState('');
    const [pos, setPos] = useState('Noun');
    const [begin, setBegin] = useState('');

    return <div style={{textAlign: 'center'}}>
        <input onChange={(e)=>{setWord(e.target.value)}} placeholder="enter your word"></input><br />
        <select onChange={(e)=>{setPos(e.target.value)}}>
            <option value={'Noun'}>Noun</option>
            <option value={'Adjective'}>Adjective</option>
            <option value={'Preposition'}>Preposition</option>
            <option value={'Adverb'}>Adverb</option>
            <option value={'Verb'}>Verb</option>
            <option value={'Pronoun'}>Pronoun</option>
        </select><br />
        <input onChange={(e)=>{setBegin(e.target.value)}} placeholder="word begin with..."></input><br />
        <button><Link style={linkStyle} to={`/${word}`}>search by word only</Link></button>
        <button><Link style={linkStyle} to={`/${word}/${pos}`}>search by word and part of speech</Link></button>
        <button><Link style={linkStyle} to={`/part-of-speech/${pos}?letter=${begin}`}>random word by part of speech and beginning</Link></button>
    </div>
}

export const linkStyle = {
    textDecoration: "none",
    color: "steelBlue"
}

export const wordLinkStyle = {
    textDecoration: "none",
    color: "steelBlue"
}