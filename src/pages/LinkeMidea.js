import React from "react"
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SlArrowDownCircle } from "react-icons/sl";


function LinkeMideya(){
    
    return (
        <>
              <div style={{
                position: 'relative',
                top: "-20px",
                marginLeft:"200px",
                height: "60px"
            }}> 
             <a href="https://www.facebook.com/" style={{
                    direction: "nome"
                }}>
                    <FaFacebookF style={{
                    position: 'absolute',
                    left: 0,
                    fontSize: "20px" ,
                    color: 'greenyellow',
                    
                }}/>
                </a>
            
                 <a href="https://www.facebook.com/" style={{
                    direction: "nome"
                }}>
                     <SiGmail style={{
                    position: 'absolute',
                    left: "40px",
                    fontSize: "20px" ,
                    color: 'greenyellow',
                    
                }}/>
                </a>
               
                <a href="https://www.facebook.com/" style={{
                    direction: "nome"
                }}>
                <FaLinkedin  style={{
                    position: 'absolute',
                    left: "80px",
                    fontSize: "20px" ,
                    color: 'greenyellow',
                   
                    
                }}/>
                </a>
            </div>
            
            {/* this is hi section */}
                <div style={{
                    position: 'relative',
                    marginLeft: "20px",
                    marginTop: "-60px",
                    height: "400px",
                    
                }}>
                    <p style={{
                        position: "absolute",
                        textAlign: "center",
                        color: "green",
                        fontSize: "50px",
                        fontFamily: 'Sofia',
                        
                    }}  className="font-effect-fire">
                        Hi I am <br /> Monjurul Isam  <br />I am a Web Developer
                    </p>
                </div>
                {/* this is cv section */}
                <div style={{
                    position: 'relative',
                    marginLeft: '30px',
                    top:"-100px",
                    height: "60px",
                    width: "1024px"
                }}>
                <div style={{
                    position: "absolute",
                    top:"0px",
                    marginLeft: '30px',
                    height: "50px",
                    backgroundColor: 'greenyellow',
                    borderRadius: "50px",
                    width: "40%",
                    opacity: "17%",
                
                }}>
                    
                </div>
                <SlArrowDownCircle style={{
                        position: "absolute",
                        top: 0,
                        marginLeft: '30px',
                        color: 'greenyellow',
                        fontSize:"50px",
                
                    }} />
                   
                </div>
        </>
    )

}

export default LinkeMideya