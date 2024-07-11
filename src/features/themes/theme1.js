import Konva from "konva";
import { Layer, Stage, Text } from "react-konva";
import URLImage from "./urlImage";
import "./print.css"
import { useSelector } from "react-redux";

export default function Theme1() {
    const data = useSelector((state) => state.dashboard.idCards)
    // const data = [
    //     {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     }, {
    //         courseleveltitle: 'Primary(English)',
    //         grouptitle: 'XI',
    //         rollno: '23',
    //         academicyear: '2024',
    //         contactno: '1234567890',
    //         photoname: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
    //         name_en: "maruf bin solaiman siddique",
    //         stdid: "4567887654"
    //     },
    // ]

    return (
        <div style={{ display: 'flex', width: 1122.24, flexWrap: 'wrap' }}> {/* page er size onujayi etar size hobe. dynamecilaay + felx */}
            {
                data.map((item, index) => (
                    <div style={{  marginBottom: ( (index+1) % 10 === 0) ? 120 : 20,marginRight:20 }}>
                        <Stage width={204} height={324} key={index} className="id-card">
                            <Layer>
                                <URLImage src="https://i.ibb.co/VH2y237/imagecard.png" x={0} y={0} width={204} height={324} scale={0.5} />
                            </Layer>
                            <Layer>
                                <URLImage src={item.photoname} x={52} y={62} width={100} height={100} radius={60} strokeColor="#3B75C4" strokeWidth={3} />
                                <Text text={item.name_en} fontSize={16} fontStyle="bold" y={175} width={185} align="center" />
                                {/* <Text y={210} x={20} align="left" fontFamily="Roboto" text={`ID NO           : ${item.stdid}\nVERSION     : ${item.courseleveltitle}\nCLASS          : ${item.grouptitle}\nROLL            : ${item.rollno}\nYEAR           : ${item.academicyear}\nMOBILE       : ${item.contactno}`} /> */}
                                {/* Text filed and data gula alada layer kore disi alignment er problem ta solve er jonno. uporer line ta comment kore dilam. dorkar na hole fele diyen. */}
                                <Text y={210} x={20} align="left" fontFamily="Roboto" text={`ID NO\nVERSION\nCLASS\nROLL\nYEAR\nMOBILE`} />
                                <Text y={210} x={100} align="left" fontFamily="Roboto" text={`: ${item.stdid}\n: ${item.courseleveltitle}\n: ${item.grouptitle}\n: ${item.rollno}\n: ${item.academicyear}\n: ${item.contactno}`} />
                                <URLImage src={`https://barcodeapi.org/api/${item.stdid}?text=none`} x={22} y={293} width={130} height={20} radius={2} strokeColor="#ffffff" strokeWidth={3} />
                            </Layer>
                        </Stage>
                    </div>
                ))

            }
        </div>
    )
}