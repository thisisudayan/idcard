import { Layer, Stage, Text } from "react-konva";
import URLImage from "./urlImage";
import "./print.css"
import { useSelector } from "react-redux"
import { useEffect, useRef } from "react";
import { Html } from "react-konva-utils";
import axios from "axios";
import pngURLs from "./data.json"
import { useLocation } from "react-router-dom";
import jsPDF from 'jspdf';

function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export default function Theme1() {
    const location = useLocation();
    const idCardBolbUrls = location.state || [];

    useEffect(() => {
        console.log("after route chagne =>> ", idCardBolbUrls);
    }, [])


    const rawExcelDataArray = useSelector((state) => state.dashboard.rawExcelDataArray)
    const pageSize = useSelector((state) => state.dashboard.pageSize)
    const width = pageSize.width;
    const stageRef = useRef(null)
    const getBase64 = async () => {
        // const dataURI = stageRef.current.toDataURL({ pixelRatio: 2.7 })
        console.log("getBase64")
        // console.log(dataURI)
        await fetch('./data.json')
            .then(async (response) => {
                await response.json()
                console.log("then1")
            })
            .then((json) => {
                console.log(json)
                console.log("then2")
            });
    }


    const test = () => {
        const uri = stageRef.current.toDataURL({ devicePixelRatio: 5 });
        console.log(uri);
    }

    const savetopdf = () =>{
        var pdf = new jsPDF('l', 'px', [500, 500]);
        pdf.setTextColor('#000000');
        // then put image on top of texts (so texts are not visible)
        pdf.addImage(
            idCardBolbUrls[0],
          0,
          0,
          500,
          500
        //   stage.width(),
        //   stage.height()
        );

        pdf.save('canvas.pdf');
    }
    savetopdf()




    return (
        <>
            {/* <div onClick={getBase64} style={{ display: 'flex', width: width, flexWrap: 'wrap' }}> */}
          
                    {/* <Stage ref={stageRef} width={2000} height={1000}>
                        <Layer>
                            
                            <Html
                                divProps={{
                                    style: {
                                        // position: 'absolute',
                                        display:'flex',
                                        flexWrap:'wrap'
                                    },
                                }}
                            >
                                    {
                                        pngURLs.map((item,index)=>{
                                            <URLImage key={index} src={item} x={0} y={0} width={204} height={324} />
                                        })
                                    }
                            </Html>
                        </Layer>
                        <Layer>
                            <URLImage src={item.photoname} x={52} y={62} width={100} height={100} radius={60} strokeColor="#3B75C4" strokeWidth={3} />
                            <Text text={item.name_en} fontSize={16} fontStyle="bold" y={175} width={185} align="center" />
                            <Text y={210} x={10} align="left" fontFamily="Roboto" text={`ID NO\nVERSION\nCLASS\nROLL\nYEAR\nMOBILE`} />
                            <Text y={210} x={70} align="left" fontFamily="Roboto" text={`: ${item.stdid}\n: ${item.courseleveltitle}\n: ${item.grouptitle}\n: ${item.rollno}\n: ${item.academicyear}\n: ${item.contactno}`} />
                            <URLImage src={`https://barcodeapi.org/api/${item.stdid}?text=none`} x={22} y={293} width={130} height={20} radius={2} strokeColor="#ffffff" strokeWidth={3} />
                        </Layer>
                    </Stage> */}
              
            
            {
                // <div onClick={test}>
                //     <Stage ref={stageRef} width={1200} height={1000}>
                //         <Layer>
                //             <Html divProps={{ style: { position: 'absolute', top: 10, left: 10, }, }}>
                //                 <div style={{ display: 'flex', width: width, flexWrap: 'wrap' }}>
                //                     {
                //                         rawExcelDataArray.map((item, index) => (
                //                             <Stage ref={() => console.log(this)} key={index} width={204} height={324} className="id-card">
                //                                 <Layer>
                //                                     <URLImage src={"../Assets/images/bg1.png"} x={0} y={0} width={204} height={324} />
                //                                 </Layer>
                //                                 <Layer>
                //                                     <URLImage src={item.photoname} x={52} y={62} width={100} height={100} radius={60} strokeColor="#3B75C4" strokeWidth={3} />
                //                                     <Text text={item.name_en} fontSize={16} fontStyle="bold" y={175} width={185} align="center" />
                //                                     <Text y={210} x={10} align="left" fontFamily="Roboto" text={`ID NO\nVERSION\nCLASS\nROLL\nYEAR\nMOBILE`} />
                //                                     <Text y={210} x={70} align="left" fontFamily="Roboto" text={`: ${item.stdid}\n: ${item.courseleveltitle}\n: ${item.grouptitle}\n: ${item.rollno}\n: ${item.academicyear}\n: ${item.contactno}`} />
                //                                     <URLImage src={`https://barcodeapi.org/api/${item.stdid}?text=none`} x={22} y={293} width={130} height={20} radius={2} strokeColor="#ffffff" strokeWidth={3} />
                //                                 </Layer>
                //                             </Stage>
                //                         ))
                //                     }
                //                 </div>
                //             </Html>
                //         </Layer>
                //     </Stage>
                // </div>
            }


            {/* </div> */}
        </>
    )
} 