import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios'
import { linkStyle, wordLinkStyle } from "./searchPage";

export default function WordPos() {
    const [words, setWords] = useState([]);
    const { word, partOfSpeech } = useParams()
    useEffect(()=>{
        const getWords = async () =>{
            try {
                const resWords = await axios.get(`https://qg53b5pwdb.execute-api.eu-central-1.amazonaws.com/dev/${word.toUpperCase()}/${partOfSpeech}`)//(`http://localhost:8080/${word.toUpperCase()}/${partOfSpeech}`)
                setWords(resWords.data);
            } catch {
                setWords([{word: "word not found", pos: "", definitions: [""]}])
            }
            
        }
        getWords();
    },[])

    return <div>{words.map((word)=>{
        return <div>
            <h1>{word.word}</h1>
            <span>{word.pos}</span>
            <div>{word.definitions.map((def)=>{
                return <div><div>{def.split(" ").map((w)=>{
                    return <Link style={wordLinkStyle} to={`/${w}`}>{w} </Link>
                })}</div><br /></div>
            })}</div>
        </div>
    })}
    <button><Link style={linkStyle} to={'/'}>home page</Link></button>
    </div>
}