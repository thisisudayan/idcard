import React, { useRef, useState } from 'react'
import { Stage, Layer, Rect, Text, Image, Circle, Line } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';
import cardImage from '../Assets/images/imagecard.png'
import jsPDF from 'jspdf';
import { height, width } from '@mui/system';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
const Konvatest = () => {

    const idCardsData = useSelector((state)=>state.dashboard.idCards)
    console.log(idCardsData)
    const pageSizes = {
        a1:{
            width:3177.6,
            height:2246.39
        },
        a2:{
            width:2246.39,
            height:1584
        },
        a3:{
            width:1584,
            height:1123.19
        },
        a4:{
            width:1123.19,
            height:796.8
        }
    }


    const stageRef = useRef();
    console.log(stageRef)

    const handleExport = () => {
        const dataURL = stageRef.current.toDataURL();
        var pdf = new jsPDF({
            orientation:'landscape',
            unit:'px',
            format:'a4'
        });
        pdf.addImage(dataURL, 'JPEG', 0, 0, 630, 445); //addImage(image, format, x-coordinate, y-coordinate, width, height)
        pdf.addPage()
        pdf.addImage(dataURL, 'JPEG', 0, 0, 630, 445); //addImage(image, format, x-coordinate, y-coordinate, width, height)
        pdf.save("test.pdf");

    };

    const data = [1, 2, 3, 4, 5, 6]

    const [color, setColor] = useState('green');
    const [isDragging, setDragging] = useState(false);
    const [image] = useImage(cardImage);
    // console.log(image)


    const handleClick = () => {
        setColor(Konva.Util.getRandomColor());
        // <Stage width={window.innerWidth} height={window.innerHeight} style={{border:"4px solid black"}}>
    };
    return (
        <>

                <Stage ref={stageRef} width={pageSizes.a4.width} height={pageSizes.a4.height} style={{ border: "4px solid red" }}>
                    <Layer >

                        {
                            idCardsData.map((d,i) =>  (

                                    <Image
                                        key={i}
                                        image={image}
                                        // x={0}
                                        width={203}
                                        height={323}
                                        draggable={true}
                                    />
                                )
                            )
                        }

                        {/* <Image
                            image={image}
                            x={17}
                            y={48}
                            width={204}
                            height={323.52}
                        draggable={true}
                        /> */}

                        {/* <Image
                            image={image}
                            x={238}
                            y={48}
                            width={204}
                            height={323.52}
                        // draggable={true}
                        />
                        <Image
                            image={image}
                            x={459}
                            y={48}
                            width={204}
                            height={323.52}
                        // draggable={true}
                        />
                        <Image
                            image={image}
                            x={680}
                            y={48}
                            width={204}
                            height={323.52}
                        // draggable={true}
                        />
                        <Image
                            image={image}
                            x={901}
                            y={48}
                            width={204}
                            height={323.52}
                        // draggable={true}
                        />
                        <Image
                            image={image}
                            x={17}
                            y={419.52}
                            width={204}
                            height={323.52}
                        // draggable={true}
                        />

                        <Image
                            image={image}
                            x={238}
                            y={419.52}
                            width={204}
                            height={323.52}
                        // draggable={true}
                        />
                        <Image
                            image={image}
                            x={459}
                            y={419.52}
                            width={204}
                            height={323.52}
                        // draggable={true}
                        />
                        <Image
                            image={image}
                            x={680}
                            y={419.52}
                            width={204}
                            height={323.52}
                        // draggable={true}
                        />
                        <Image
                            image={image}
                            x={901}
                            y={419.52}
                            width={204}
                            height={323.52}
                        // draggable={true}
                        /> */}
                       

                    </Layer>
                    <Layer>
                        <Text
                            text="Maruf Bin Solaiman"
                            x={50}
                            y={370}
                            fontSize={30}
                        // draggable={true}
                        />

                        <Text
                            text="Udayan Basak"
                            x={535}
                            y={370}
                            // draggable={true}
                            fontSize={30}
                        />
                        <Text
                            text="Mirza Galib"
                            x={1020}
                            y={370}
                            // draggable={true}
                            fontSize={30}
                        />
                        <Text
                            text="Rabeya Khatun"
                            x={1505}
                            y={370}
                            // draggable={true}
                            fontSize={30}
                        />


                    </Layer>

                </Stage>
                <Button onClick={handleExport}>export</Button>
        </>
    )
}

export default Konvatest