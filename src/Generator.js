import React from 'react'
import {useState} from "react"
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';
import validator from 'validator'

const Generator = () => {
    const [loaded, setLoaded] = useState(false);
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const handleSubmit = async event => {
        event.preventDefault();
        event.stopPropagation();

        if (urlRegex.test(url)) {
            axios.post("http://localhost:6502/api/url", {"longUrl": url})
                .then(res => {
                    setShortUrl(res.data.shortUrl);
                    setLoaded(true)
                })
        }else{
            alert("Url not valid!")
        }
    };

    const handleChange = event => {
        setUrl(event.target.value);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUrl">
                    <Form.Label>Enter url to shorten</Form.Label>
                    <Form.Control required type="text" placeholder="Enter url" onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {loaded ?
                <>
                    <br/>
                    <p>Your short url</p>
                    <p>{shortUrl} </p>
                </> : ""
            }
        </>
    )
};

export default Generator;