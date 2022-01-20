import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

export default function WordPos() {
    const [words, setWords] = useState([]);
    const { word, partOfSpeech } = useParams()
    useEffect(()=>{
        const getWords = async () =>{
            const resWords = await axios.get(`http://localhost:8080/${word}/${partOfSpeech}`)
            setWords(resWords.data);
        }
        getWords();
    })

    return <div>{words.map((word)=>{
        return <div>
            <h1>{word.word}</h1>
            <span>{word.pos}</span>
            <div>{word.definitions[0]}</div>
        </div>
    })}</div>
}