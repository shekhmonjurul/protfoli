import React from "react"
import './style.css'
import { TiLocation } from "react-icons/ti";
import { PiCopyrightFill } from "react-icons/pi"
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Foter(){
    return (
        <div style={{
            position: "relative",
            bottom: "0px",
        }}>
            <FaFacebookF style={{
                position: 'absolute',
                marginTop: '30px',
                top: 0,
                right: "200px",
                fontSize: "40px" ,
                color: 'greenyellow',
                
            }}/>
            <SiGmail  style={{
                position: 'absolute',
                marginTop: '90px',
                top: 0,
                right: "200px",
                fontSize: "40px" ,
                color: 'greenyellow',
                
            }}/>
            <FaLinkedin  style={{
                position: 'absolute',
                marginTop: '140px',
                top: 0,
                right: "200px",
                fontSize: "40px" ,
                color: 'greenyellow',
                
            }}/>
           
            <TiLocation style={{
            position: 'absolute',
            marginTop: '10px',
            color:'greenyellow',
            fontSize:'70px',
        }} /><p
        style={{
            position:"absolute",
            marginTop: "10px",
            fontSize:"30px",
            color:"greenyellow",
            paddingLeft:"80px",
            textAlign:"center",
            fontFamily: "Sofia"

        }}
         className='font-effect-shadow-multiple'>
            Dhaka Udyan-1, Block-B, <br/>  Mohammadpur,Dhaka-1207
        </p>
        <PiCopyrightFill  style={{
            position:"absolute",
            bottom: "10px",
            marginLeft: "20px",
            fontSize: "50px",
            color: "greenyellow"
        }}/><p style={{
            position:"absolute",
            bottom:"15px",
            paddingLeft:"80px",
            fontSize:"30px",
            color:"greenyellow",
            fontFamily: "Sofia"
        }} className='font-effect-neon'> Copyright 2024-2025</p>
          <div id='foter'> </div>
        </div>
    )
}

export default Foter