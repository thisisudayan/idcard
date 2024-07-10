import Konva from 'konva';
import jsPDF from 'jspdf';
import { useDispatch, useSelector } from 'react-redux';
import { SetIdCardImages } from '../features/dashboard/dashboardSlice';

const getIdCardImages = async (data) => {
    console.log(data)

    for (const d of data) {
        var stage = new Konva.Stage({
            container: 'container',
            width: 204,
            height: 324,
        });

        var backgroundLayer = new Konva.Layer();
        var imageLayer = new Konva.Layer();
        var nameLayer = new Konva.Layer();
        var additionalLayer = new Konva.Layer();
        var barcodeLayer = new Konva.Layer();


        Konva.Image.fromURL('../Assets/images/imagecard.png', function (backgroundNode) {
            backgroundNode.setAttrs({
                x: 0,
                y: 0,
                height: 324,
                width: 204,
            })
            backgroundLayer.add(backgroundNode);
        })


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
        });


        var nameText = new Konva.Text({
            x: stage.width() / 2,
            y: 175,
            text: `${d.name_en.toLocaleUpperCase()}`,
            fontSize: 16,
            fontStyle: 700,
            width: stage.width() - 20,
            fontFamily: 'Calibri',
            fill: 'black',
            align: 'center'
        })
        nameText.offsetX(nameText.width() / 2);
        nameLayer.add(nameText)

        var additionalText = new Konva.Text({
            x: stage.width() / 2,
            y: 210,
            text: `ID NO          : ${d.stdid}\nVERSION     : ${d.courseleveltitle.toLocaleUpperCase()}\nCLASS          : ${d.grouptitle}\nROLL            : ${d.rollno}\nYEAR            : ${d.academicyear}\nMOBILE       : ${d.contactno}`,
            fontSize: 12,
            // fontStyle:700,
            width: stage.width() - 40,
            fontFamily: 'Calibri',
            fill: 'black',
            align: 'left'
        })
        additionalText.offsetX(additionalText.width() / 2);
        additionalLayer.add(additionalText)


        var imageObj = new Image();
        imageObj.onload = function () {
            var barcode = new Konva.Image({
                x: 22,
                y: 293,
                image: imageObj,
                width: 130,
                height: 20,
                stroke: 'white',
                strokeWidth: 4,
                cornerRadius: 2,
            });

            // add the shape to the layer
            barcodeLayer.add(barcode);
        };
        imageObj.src = `https://barcodeapi.org/api/BAF${d.stdid}?text=none`;


        async function loadImage(imageUrl) {
            const image = new Image();
            image.src = imageUrl;
            await image.decode(); // Wait for image to decode completely
            return image;
          }
          


        async function createKonvaImage(imageUrl) {
            const image = await loadImage(imageUrl);
            const konvaImage = new Konva.Image({
              image: image,
              // Set other Konva image properties here
            });
            // Add konvaImage to your Konva stage
            imageLayer.add(konvaImage)
            // stage.add(imageLayer);
        }
        
        await  createKonvaImage(`https://barcodeapi.org/api/BAF${d.stdid}?text=none`)
        
        
        stage.add(backgroundLayer)
        stage.add(imageLayer)
        stage.add(nameLayer)
        stage.add(additionalLayer)
        stage.add(barcodeLayer)
        console.log(stage.toDataURL())
    }
    // const arrayData = data.map(async(d, i) => {

    //     var stage = new Konva.Stage({
    //         container: 'container',
    //         width: 204,
    //         height: 324,
    //     });

    //     var backgroundLayer = new Konva.Layer();
    //     var imageLayer = new Konva.Layer();
    //     var nameLayer = new Konva.Layer();
    //     var additionalLayer = new Konva.Layer();
    //     var barcodeLayer = new Konva.Layer();


    //     await Konva.Image.fromURL('../Assets/images/imagecard.png', function(backgroundNode) {
    //         backgroundNode.setAttrs({
    //             x: 0,
    //             y: 0,
    //             height: 324,
    //             width: 204,
    //         })
    //         backgroundLayer.add(backgroundNode);
    //     })


    //     Konva.Image.fromURL(d.photoname, async function (avatar) {
    //         avatar.setAttrs({
    //             y: 67,
    //             x: (stage.width() - 100) / 2,
    //             height: 100,
    //             width: 100,
    //             stroke: '#3B75C4',
    //             strokeWidth: 3,
    //             cornerRadius: 60
    //         });
    //         imageLayer.add(avatar);
    //     });


    //     var nameText = new Konva.Text({
    //         x: stage.width() / 2,
    //         y: 175,
    //         text: `${d.name_en.toLocaleUpperCase()}`,
    //         fontSize: 16,
    //         fontStyle: 700,
    //         width: stage.width() - 20,
    //         fontFamily: 'Calibri',
    //         fill: 'black',
    //         align: 'center'
    //     })
    //     nameText.offsetX(nameText.width() / 2);
    //     nameLayer.add(nameText)

    //     var additionalText = new Konva.Text({
    //         x: stage.width() / 2,
    //         y: 210,
    //         text: `ID NO          : ${d.stdid}\nVERSION     : ${d.courseleveltitle.toLocaleUpperCase()}\nCLASS          : ${d.grouptitle}\nROLL            : ${d.rollno}\nYEAR            : ${d.academicyear}\nMOBILE       : ${d.contactno}`,
    //         fontSize: 12,
    //         // fontStyle:700,
    //         width: stage.width() - 40,
    //         fontFamily: 'Calibri',
    //         fill: 'black',
    //         align: 'left'
    //     })
    //     additionalText.offsetX(additionalText.width() / 2);
    //     additionalLayer.add(additionalText)


    //     var imageObj = new Image();
    //     imageObj.onload = function () {
    //         var barcode = new Konva.Image({
    //             x: 22,
    //             y: 293,
    //             image: imageObj,
    //             width: 130,
    //             height: 20,
    //             stroke: 'white',
    //             strokeWidth: 4,
    //             cornerRadius: 2,
    //         });

    //         // add the shape to the layer
    //         barcodeLayer.add(barcode);
    //     };
    //     imageObj.src = `https://barcodeapi.org/api/BAF${d.stdid}?text=none`;

    //     stage.add(backgroundLayer)
    //     stage.add(imageLayer)
    //     stage.add(nameLayer)
    //     stage.add(additionalLayer)
    //     stage.add(barcodeLayer)
    //     return stage.toDataURL()



    //     // var promises = [obj1, obj2].map(function(obj){
    //     //     return db.query('obj1.id').then(function(results){
    //     //        obj1.rows = results
    //     //        return obj1
    //     //     })
    //     //   })
    //     //   Promise.all(promises).then(function(results) {
    //     //       console.log(results)
    //     //   })

    // })


    // return Promise.all(arrayData).then((result) => {
    //     console.log('ass', result)
    //     return result
    // })

}

export default getIdCardImages