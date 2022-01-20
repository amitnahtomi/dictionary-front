import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RandPos() {
    const [words, setWords] = useState({pos: '', word: '', definitions: ['']});
    const { part } = useParams()

    useEffect(()=>{
        const getWords = async () =>{
            const resWords = await axios.get(`http://localhost:8080/part-of-speech/${part}`)
            setWords(resWords.data);
        }
        getWords();
    }, [])

    return <div>
        <h1>{words.word}</h1>
        <span>{words.pos}</span>
        <div>{words.definitions}</div>
    </div>

}