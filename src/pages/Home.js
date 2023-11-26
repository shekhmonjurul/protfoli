import React from "react"
import Foter from "./_Foter";
import LinkeMideya from "./LinkeMidea";
import Languges from "./Languges";


function Home(){

    return (
        <>
        {/* Thiss linke section */}
            
                
                <div style={{
                    position: "relative",
                    height:"578px",
                    top: '-20px',
                    // overflow: 'hidden'
                    // backgroundColor: 'red',
              
                    

                }}>
                    <div style={{
                        position: 'absolute',
                        top:0
                    }}>
                        <LinkeMideya />
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: "-25px",
                        backgroundColor: 'red',
                        width: "45%",
                        height:"500px",
                        right: '0',
                        opacity: "17%"
                    }}>
                        
                        <div style={{
                position: 'absolute',
                top: 0,
                left: `-245px`,
                width: `500px`,
                height: "500px",
                backgroundColor: `blue`,
                borderRadius: "50%",
            }
        }></div>
            <div  style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: `100%`,
                height: "500px",
                backgroundColor: `blue`,
               
            }
            }>
                <Languges />
            </div>

             </div>
             
                </div>
                
                
                
                    <div id="language1" className="COLOR" > HTML, CSS, React</div>
                    <div id="language2" className="COLOR">JavaScrip</div>
                    <div id="language3" className="COLOR">NodeJs</div>
                    <div id="language4" className="COLOR">MongoDb, SQL</div>

                  
              
           

            {/* this is foter section */}
      
            <Foter />
          
            
        </>
    )
}

export default Home