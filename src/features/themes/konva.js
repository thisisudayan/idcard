import Konva from 'konva';
import jsPDF from 'jspdf';
import { useDispatch, useSelector } from 'react-redux';
import URLImage from './urlImage';


const generateThemeOne = async (d) => {
    var stage = new Konva.Stage({
        container: 'container',
        width: 204,
        height: 324,
    });

    // create layers
    var backgroundLayer = new Konva.Layer();
    var imageLayer = new Konva.Layer();
    var nameLayer = new Konva.Layer();
    var additionalLayer = new Konva.Layer();
    var barcodeLayer = new Konva.Layer();

    // add background image
    // const backgroundNode = new URLImage('../Assets/images/imagecard.png');
    // Konva.Image.fromURL('../Assets/images/imagecard.png', function (backgroundNode) {
    //     backgroundNode.setAttrs({
    //         x: 0,
    //         y: 0,
    //         height: 324,
    //         width: 204,
    //     });
    // })

    var imageObj = new Image();
      imageObj.onload = function () {
        var backgroundImage = new Konva.Image({
          x: 50,
          y: 50,
          image: imageObj,
          width: 106,
          height: 118,
        });

        // add the shape to the layer
        backgroundLayer.add(backgroundImage);
      };
      imageObj.crossOrigin = "Anonymous"
      imageObj.src = '../Assets/images/imagecard.png';


    // Konva.Image.fromURL('../Assets/images/imagecard.png', function (backgroundNode) {
    //     backgroundNode.setAttrs({
    //         x: 0,
    //         y: 0,
    //         height: 324,
    //         width: 204,
    //     })
    //     backgroundLayer.add(backgroundNode);
    // })


    Konva.Image.fromURL(d.photoname, async function (avatar) {
        avatar.setAttrs({
            y: 67,
            x: (stage.width() - 100) / 2,
            height: 100,
            width: 100,
            stroke: '#3B75C4',
            strokeWidth: 3,
            cornerRadius: 60
        });
        imageLayer.add(avatar);
    })


    // add full name
    var nameText = new Konva.Text({
        x: stage.width() / 2,
        y: 175,
        text: `${d.name_en.toLocaleUpperCase()}`,
        text: `${d.name_en}`,
        fontSize: 16,
        fontStyle: 700,
        fontStyle: 'bold',
        width: stage.width() - 20,
        fontFamily: 'Calibri',
        fill: 'black',
        align: 'center'
    })

    nameText.offsetX(nameText.width() / 2);
    nameLayer.add(nameText)
    nameLayer.add(nameText);

    // add additional text
    var additionalText = new Konva.Text({
        x: stage.width() / 2,
        y: 210,
        text: `ID NO          : ${d.stdid}\nVERSION     : ${d.courseleveltitle.toLocaleUpperCase()}\nCLASS          : ${d.grouptitle}\nROLL            : ${d.rollno}\nYEAR            : ${d.academicyear}\nMOBILE       : ${d.contactno}`,
        text: `ID NO          : ${d.stdid}\nVERSION     : ${d.courseleveltitle}\nCLASS          : ${d.grouptitle}\nROLL            : ${d.rollno}\nYEAR            : ${d.academicyear}\nMOBILE       : ${d.contactno}`,
        fontSize: 12,
        // fontStyle:700,
        width: stage.width() - 40,
        fontFamily: 'Calibri',
        fill: 'black',
        align: 'left'
    })

    additionalText.offsetX(additionalText.width() / 2);
    additionalLayer.add(additionalText)
    additionalLayer.add(additionalText);


    // add layers
  

    // async function createKonvaImage(imageUrl) {
    //     const image = new URLImage(imageUrl);
    //     const konvaImage = new Konva.Image({
    //         image: image,
    //         // Set other Konva image properties here
    //     });
    //     // Add konvaImage to your Konva stage
    //     imageLayer.add(konvaImage)
    //     // stage.add(imageLayer);
    // }

    // await createKonvaImage(`https://barcodeapi.org/api/${d.stdid}?text=none`)


    stage.add(backgroundLayer)
    stage.add(imageLayer)
    stage.add(nameLayer)
    stage.add(additionalLayer)
    return stage.toDataURL({ pixelRatio: 3 });
}


export default generateThemeOne;