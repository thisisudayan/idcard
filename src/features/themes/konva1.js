import Konva from 'konva';

const generateThemeTwo = async (d) => {
    const stage = new Konva.Stage({
        container: 'container',
        width: 204,
        height: 324,
    });

    // create layers
    const backgroundLayer = new Konva.Layer();
    const imageLayer = new Konva.Layer();
    const nameLayer = new Konva.Layer();
    const additionalLayer = new Konva.Layer();
    const barcodeLayer = new Konva.Layer();

    stage.add(backgroundLayer);
    stage.add(imageLayer);
    stage.add(nameLayer);
    stage.add(additionalLayer);
    stage.add(barcodeLayer);

    const promise1 = new Promise((resolve, reject) => {
        ////////////////////////////////////
        ///////// add background image /////
        ////////////////////////////////////
        const imageObj = new Image();
        imageObj.crossOrigin = 'anonymous';
        imageObj.src = '../Assets/images/bg1.png';

        imageObj.onload = () => {
            const darthNode = new Konva.Image({
                x: 0,
                y: 0,
                height: 324,
                width: 204,
                image: imageObj,
            });
            backgroundLayer.add(darthNode);
            stage.draw();
            resolve()
        };

        imageObj.onerror = (err) => {
            reject();
        };
    });


    const promise2 = new Promise((resolve, reject) => {
        ////////////////////////////////////
        ///////// add avatar image /////////
        ////////////////////////////////////
        const imageObj = new Image();
        imageObj.crossOrigin = 'anonymous';
        imageObj.src = d.photoname;

        imageObj.onload = () => {
            const darthNode = new Konva.Image({
                y: 67,
                x: (stage.width() - 100) / 2,
                height: 100,
                width: 100,
                stroke: '#3B75C4',
                strokeWidth: 3,
                cornerRadius: 60,
                image: imageObj,
            });
            backgroundLayer.add(darthNode);
            stage.draw();
            resolve()
        };

        imageObj.onerror = (err) => {
            reject();
        };
    });

    const promise3 = new Promise((resolve, reject) => {
        ///////////////////////////////////
        /////// add full name /////////////
        //////////////////////////////////
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
        resolve()
    })


    const promise4 = new Promise((resolve, reject) => {
        /////////////////////////////////////////////
        //////  add additional text  ////////////////
        /////////////////////////////////////////////
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
    })


    const promise5 = new Promise((resolve, reject) => {
        ////////////////////////////////////
        ///////// add avatar image /////////
        ////////////////////////////////////
        const imageObj = new Image();
        imageObj.crossOrigin = 'anonymous';
        imageObj.src = `https://barcodeapi.org/api/${d.stdid}?text=none`;

        imageObj.onload = () => {
            const darthNode = new Konva.Image({
                y: 67,
                x: (stage.width() - 100) / 2,
                height: 100,
                width: 100,
                stroke: '#3B75C4',
                strokeWidth: 3,
                cornerRadius: 60,
                image: imageObj,
            });
            barcodeLayer.add(darthNode);
            stage.draw();
            resolve()
        };

        imageObj.onerror = (err) => {
            reject();
        };
    });


    




    return Promise.all([promise1, promise2, promise3]).then(async() => {
        return stage.toBlob({ pixelRatio: 3 })
            // .then(blob => resolve(blob))
            // .catch(err => reject(err));
    })

}

export default generateThemeTwo;
