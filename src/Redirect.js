import React from 'react'
import {useEffect, useState} from "react"
import axios from 'axios';

export default function Redirect(props) {
    let id = props.match.url;

    useEffect(() => {
        async function fetchUrl() {
            const result = await axios.get(
                `http://localhost:6502/api/url${id}`,
            ).then(
                res => {
                    window.open(`${res.data}`);
                }
            );
        }

        fetchUrl();
    }, []);

    return (
        <div>
            <h1>You'll be redirected soon...</h1>
        </div>
    )
}
