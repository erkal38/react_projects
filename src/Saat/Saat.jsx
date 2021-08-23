import React from 'react'
import "./Saat.css"

function Saat() {
    const tarih = new Date("June 03,2021 11:02:05");
    const saatString = tarih.toLocaleTimeString();
    const tarihString = tarih.toLocaleDateString();
    const suAnkiSaat = tarih.getHours();
    let mesaj;
    const mesajStil = {
        color: "",
    }

    if (suAnkiSaat < 12) {
        mesaj = "gunaydın";
        mesajStil.color = "green";
    } else if (suAnkiSaat < 18) {
        mesaj = "tunaydın";
        mesajStil.color = "yellow";
    } else {
        mesaj = "iyi aksamlar";
        mesajStil.color = "blue";
    }
    return (
        <div className="div">
            <h1 className="tarih">TARIH:{tarihString}</h1>
            <h2 className="saat">SAAT:{saatString}</h2>
            <h3>AnlıkSaat:{suAnkiSaat}</h3>
            <h2 style={mesajStil}>{mesaj}</h2>
            <img className="resim" src="https://images.pexels.com/photos/1198264/pexels-photo-1198264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
        </div>
    )
}

export default Saat
