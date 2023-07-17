import { DisplaySettings } from "@mui/icons-material";
import React, { useRef, useEffect } from "react";

const { tableau } = window;

function TableAu() {
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/JSAPI-Superstore/Overview"

    const initViz = () => {
        new tableau.Viz(ref.current, url, {
            width: "100%",
            height: "90vh"
        })
    }

    // useEffect(initViz, []);

    return (

        <>
        
         <button onClick={initViz}>Table au Fetch Data</button>
            <h3>Tableau API</h3>
            
            <div ref={ref} />

        </>)
}


export default TableAu;