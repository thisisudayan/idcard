import { Layer, Stage, Text } from "react-konva";
import URLImage from "./urlImage";
import "./print.css"
import { useSelector } from "react-redux"
import { useRef } from "react";
import { Html } from "react-konva-utils";

function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export default function Theme1() {

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
        const uri = stageRef.current.toDataURL({devicePixelRatio:5});
        console.log(uri);
    }


    return (
        <>
            {/* <div onClick={getBase64} style={{ display: 'flex', width: width, flexWrap: 'wrap' }}> */}
            {/* {
                rawExcelDataArray.map((item, index) => (
                    <Stage ref={() => console.log(this)} key={index} width={204} height={324} className="id-card">
                        <Layer>
                            <URLImage src={"../Assets/images/bg1.png"} x={0} y={0} width={204} height={324} />
                            <Html
                                divProps={{
                                    style: {
                                        position: 'absolute',
                                        top: 10,
                                        left: 10,
                                    },
                                }}
                            >
                                <div>
                                    <Stage width={204} height={324}>
                                        <Layer>
                                            <Text text={"Maruf BinSolaiman"} fontSize={16} fontStyle="bold" y={75} width={185} align="center" />

                                        </Layer>
                                    </Stage>
                                </div>
                            </Html>
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
            } */}
            {/* <div onClick={test}>
                <Stage ref={stageRef} width={1200} height={1000}>
                    <Layer>
                        <Html divProps={{ style: { position: 'absolute', top: 10, left: 10, }, }}>
                            <div style={{ display: 'flex', width: width, flexWrap: 'wrap' }}>
                                {
                                    rawExcelDataArray.map((item, index) => (
                                        <Stage ref={() => console.log(this)} key={index} width={204} height={324} className="id-card">
                                            <Layer>
                                                <URLImage src={"../Assets/images/bg1.png"} x={0} y={0} width={204} height={324} />
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
                        </Html>
                    </Layer>
                </Stage>
            </div> */}


            {/* </div> */}
        </>
    )
} 