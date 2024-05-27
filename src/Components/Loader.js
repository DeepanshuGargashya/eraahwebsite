import React from 'react'
import Loaderimg from '../Assets/Loaderimg.png'
export default function Loader() {
    return (
        <div
            style={{
                position: "fixed",
                background:'transparent',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: "99999999999999999",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }} className="Loader"
        >
            <img src={Loaderimg} alt="Rotating Image" width={'7%'} className="rotate" />
        </div>
    )
}
