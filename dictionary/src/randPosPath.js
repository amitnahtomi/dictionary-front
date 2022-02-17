import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { linkStyle, wordLinkStyle } from "./searchPage";

export default function RandPos() {
    const [searchParams, setSearchParams] = useSearchParams();
    const begin =  searchParams.get("letter")
    const { part } = useParams()
    const [words, setWords] = useState({pos: '', word: '', definitions: ['']});

    useEffect(()=>{
        const getWords = async () =>{
            try {
                const resWords = await axios.get(`https://qg53b5pwdb.execute-api.eu-central-1.amazonaws.com/dev/part-of-speech/${part}?letter=${begin.toUpperCase()}`)
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
                return <div><div>{def.split(" ").map((w)=>{
                    return <Link style={wordLinkStyle} to={`/${w}`}>{w} </Link>
                })}</div><br /></div>
            })}</div>
        <button><Link style={linkStyle} to={'/'}>home page</Link></button>
    </div>

}

