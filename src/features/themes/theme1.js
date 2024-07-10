import Konva from "konva";
import { Layer, Stage, Text } from "react-konva";
import URLImage from "./urlImage";


export default function Theme1() {
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