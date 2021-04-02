import React from 'react';
import "./Widgit.css"

function Widgit() {
    return (
        <div>
            <div className="Widgit">
            <iframe
            src="https://www.icc-cricket.com/"

            width="340"
            height="100%"
            style={{border:"none",overflow:"hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>
            
        </div>
        </div>
    )
}

export default Widgit
