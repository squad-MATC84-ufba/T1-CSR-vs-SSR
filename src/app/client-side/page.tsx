'use client';

import { useEffect, useState } from "react";

export default function clientSide() {
    const [msg, setMessage] = useState<string | null>(null);
    const url = "http://localhost:3000/api/hello-world"

    useEffect( () => {
        fetch(url).then(
            (res) => { 
                if (!res)
                    throw new Error("Falha na requisição");
                return res.json();
        }).then( (data) => setMessage(data.msg) )
    }, []);

    return (
        <h1><center>{msg ? msg : "..."}</center></h1>
    )
}