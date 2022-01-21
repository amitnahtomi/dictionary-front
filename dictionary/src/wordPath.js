import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

export default function Word() {
    const [words, setWords] = useState([]);
    const { word } = useParams()
    useEffect(()=>{
        const getWords = async () =>{
            try {
                const resWords = await axios.get(`http://localhost:8080/${word.toUpperCase()}`)
                setWords(resWords.data);
            }
            catch {
                setWords([{word: "word not found", pos: "", definitions: [""]}])
            }
        }
        getWords();
    })

    return <div>{words.map((word)=>{
        return <div>
            <h1>{word.word}</h1>
            <span>{word.pos}</span>
            <div>{word.definitions[0].split(" ").map((w)=>{
                return <Link to={`/${w}`}>{w} </Link>
            })}</div>
            <button><Link to={'/'}>home page</Link></button>
        </div>
    })}</div>
}