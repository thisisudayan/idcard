import Konva from "konva";
import { Layer, Stage, Text } from "react-konva";
import URLImage from "./urlImage";


export default function Theme1() {
    const data = [{
        version:'Primary(English)',
        class:'XI',
        roll:'23',
        year:'2024',
        mobile:'1234567890',
        pic: "https://firebasestorage.googleapis.com/v0/b/agamilabs-edubd.appspot.com/o/files%2Fstudent%2FEsGaQ_1719903359259.jpg?alt=media&token=8fe4166a-84ac-47ec-a777-de31121d130c",
        name: "maruf bin solaiman siddique",
        id:"4567887654"
    },
    ]

    return(
        <div> {/* page er size onujayi etar size hobe. dynamecilaay + felx */}

            {
                /* map chalai then kaj korte hbe ekhane */

                <Stage width={204} height={324}>
                    <Layer>
                        <URLImage src="https://i.ibb.co/VH2y237/imagecard.png" x={0} y={0} scale={0.5} />
                    </Layer>
                    <Layer>
                        <Text text="Udayan Basak" y={175} x={204/2} fontSize={16} fontStyle="bold"  fill={"black"} align="center" />
                    </Layer>
                    <Layer>
                        <Text text="Full name" />
                    </Layer>
                    <Layer>
                        <Text text="Full name" />
                    </Layer>
                    <Layer>
                        <Text text="Full name" />
                    </Layer>
                </Stage>
            }
        </div>
    )
}