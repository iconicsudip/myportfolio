import React from 'react'
import { useEffect,useState } from 'react';

export default function TestiBody(props) {
    const [imageUrl,setImageUrl] = useState('');
    useEffect(()=>{
        var options = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'text/plain'
            },
            body: `{"username":"Sudip12","password":"sd712246","email":"${props.testi.Email}"}`
        };
        (async ()=>{
            const response = await fetch('https://avatarapi.com/v2/api.aspx',options);
            const raw = await response.json();
            setImageUrl(raw.Image)
        })();
    },[imageUrl,props])
    return (
        <div>
            <img src={imageUrl} alt="No image found" referrerPolicy="no-referrer"/>
            <div className="myCarousel">
                <h3>{props.testi.Name}</h3>
                <h4>{props.testi.Designation}</h4>
                <p>
                {props.testi.Brief}
                </p>
            </div>
        </div>
    )
}
