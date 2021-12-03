import React,{ useState, useEffect } from "react";

export const useFetch = (url, dep = []) => {

    const [data, setData] = useState(null)

    useEffect( () => {
        fetch(url)
        .then (res => res.json())
        .then (data => {
            setData(data)})
    }, dep)

    return {
        data
    }
}
