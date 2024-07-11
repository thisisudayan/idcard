import Konva from "konva";
import { Layer, Stage, Text } from "react-konva";
import URLImage from "./urlImage";


export default function Theme1() {
    const data = [{
        courseleveltitle:'Primary(English)',
        grouptitle:'XI',
        rollno:'23',
        academicyear:'2024',
        contactno:'1234567890',
        photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
        name_en: "maruf bin solaiman siddique",
        stdid:"4567887654"
    },
    ]

    return(
        <div> {/* page er size onujayi etar size hobe. dynamecilaay + felx */}
            {
                data.map((item, index) => (
                    <Stage width={204} height={324} key={index}>
                        <Layer>
                            <URLImage src="https://i.ibb.co/VH2y237/imagecard.png" x={0} y={0} width={204} height={324} scale={0.5} />
                        </Layer>
                        <Layer>
                            <URLImage src={item.photoname} x={52} y={62} width={100} height={100} radius={60} strokeColor="#3B75C4" strokeWidth={3} />
                            <Text text="Udayan Basak</Text> Udayan" fontSize={16} fontStyle="bold" y={175} width={186} align="center" />
                            <Text y={210} x={20} align="left" fontFamily="Roboto" text={`ID NO           : ${item.stdid}\nVERSION     : ${item.courseleveltitle}\nCLASS         : ${item.grouptitle}\nROLL            : ${item.rollno}\nYEAR            : ${item.academicyear}\nMOBILE       : ${item.contactno}`} />
                            <URLImage src={`https://barcodeapi.org/api/${item.stdid}?text=none`} x={22} y={293} width={130} height={20} radius={2} strokeColor="#ffffff" strokeWidth={3} />
                        </Layer>
                    </Stage>
                ))

            }
        </div>
    )
}