import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RandPos() {
    const { part } = useParams()
    const [words, setWords] = useState({pos: '', word: '', definitions: ['']});

    useEffect(()=>{
        const getWords = async () =>{
            try {
                const resWords = await axios.get(`http://localhost:8080/part-of-speech/${part}`)
                setWords(resWords.data);
            } catch {
                setWords({word: "word not found", pos: "", definitions: [""]})
            }
            
        }
        getWords();
    },[])

    return <div>
        <h1>{words.word}</h1>
        <span>{words.pos}</span>
        <div>{words.definitions.map((def)=>{
                return <div>{def.split(" ").map((w)=>{
                    return <Link to={`/${w}`}>{w} </Link>
                })}</div>
            })}</div>
        <button><Link to={'/'}>home page</Link></button>
    </div>

}