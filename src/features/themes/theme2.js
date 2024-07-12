import { Layer, Stage, Text } from "react-konva";
import URLImage from "./urlImage";
import "./print.css"
import { useSelector } from "react-redux"

export default function Theme2() {

    const data = useSelector((state) => state.dashboard.idCards)

    return (
        <div style={{ display: 'flex', width: 1122.24, flexWrap: 'wrap' }}> {/* page er size onujayi etar size hobe. dynamecilaay + felx */}
            {
                data.map((item, index) => (
                    <Stage key={index} width={204} height={324} className="id-card">
                        <Layer>
                            <URLImage src="https://i.ibb.co/VH2y237/imagecard.png" x={0} y={0} width={204} height={324}  />
                        </Layer>
                        <Layer>
                            <URLImage src={item.photoname} x={52} y={62} width={100} height={100} radius={60} strokeColor="#3B75C4" strokeWidth={3} />
                            <Text text={"item.name_en"} fontSize={16} fontStyle="bold" y={175} width={185} align="center" />
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