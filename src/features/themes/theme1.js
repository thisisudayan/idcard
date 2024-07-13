import { Layer, Stage, Text } from "react-konva";
import URLImage from "./urlImage";
import "./print.css"
import { useSelector } from "react-redux"
import { useRef } from "react";

export default function Theme1() {

    const rawExcelDataArray = useSelector((state) => state.dashboard.rawExcelDataArray)
    const pageSize = useSelector((state)=>state.dashboard.pageSize)
    const width = pageSize.width;
    const stageRef = useRef(null)
    const getBase64 = () =>{
        const dataURI = stageRef.current.toDataURL({pixelRatio:2.7})
        // console.log(dataURI)
    }
    fetch('./data.json')
    .then(async(response) => {
        await response.json()
        console.log("then1")
    })
    .then((json) => {
        console.log(json)
        console.log("then2")
    });


    return (
        <div onClick={getBase64} style={{ display: 'flex', width: width, flexWrap: 'wrap' }}>
            {
                rawExcelDataArray.map((item, index) => (
                    <Stage ref={()=>console.log(this)} key={index} width={204} height={324} className="id-card">
                        <Layer>
                            <URLImage src={"../Assets/images/bg1.png"} x={0} y={0} width={204} height={324}  />
                        </Layer>
                        <Layer>
                            <URLImage src={item.photoname} x={52} y={62} width={100} height={100} radius={60} strokeColor="#3B75C4" strokeWidth={3} />
                            <Text text={item.name_en} fontSize={16} fontStyle="bold" y={175} width={185} align="center" />
                            <Text y={210} x={10} align="left" fontFamily="Roboto" text={`ID NO\nVERSION\nCLASS\nROLL\nYEAR\nMOBILE`} />
                            <Text y={210} x={70} align="left" fontFamily="Roboto" text={`: ${item.stdid}\n: ${item.courseleveltitle}\n: ${item.grouptitle}\n: ${item.rollno}\n: ${item.academicyear}\n: ${item.contactno}`} />
                            <URLImage src={`https://barcodeapi.org/api/${item.stdid}?text=none`} x={22} y={293} width={130} height={20} radius={2} strokeColor="#ffffff" strokeWidth={3} />
                        </Layer>
                    </Stage>
                ))
            }
        </div>
    )
} 