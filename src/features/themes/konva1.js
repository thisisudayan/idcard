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
        const backroundImgObj = new Image();
        backroundImgObj.crossOrigin = 'anonymous';
        backroundImgObj.src = '../Assets/images/bg1.png';

        backroundImgObj.onload = () => {
            const darthNode = new Konva.Image({
                x: 0,
                y: 0,
                height: 324,
                width: 204,
                image: backroundImgObj,
            });
            backgroundLayer.add(darthNode);
            stage.draw();
            resolve()
        };

        backroundImgObj.onerror = (err) => {
            reject();
        };
    });


    const promise2 = new Promise((resolve, reject) => {
        ////////////////////////////////////
        ///////// add avatar image /////////
        ////////////////////////////////////
        const avatarImgObj = new Image();
        avatarImgObj.crossOrigin = 'anonymous';
        avatarImgObj.src = d.photoname;

        avatarImgObj.onload = () => {
            const darthNode = new Konva.Image({
                y: 50,
                x: (stage.width() - 100) / 2,
                height: 100,
                width: 100,
                stroke: '#3B75C4',
                strokeWidth: 3,
                cornerRadius: 60,
                image: avatarImgObj,
            });
            backgroundLayer.add(darthNode);
            stage.draw();
            resolve()
        };

        avatarImgObj.onerror = (err) => {
            reject();
        };
    });

    const promise3 = new Promise((resolve, reject) => {
        ///////////////////////////////////
        /////// add full name /////////////
        //////////////////////////////////
        var nameText = new Konva.Text({
            x: stage.width() / 2,
            y: 158,
            text: `${d.name_en.toLocaleUpperCase()}`,
            text: `${d.name_en}`,
            fontSize: 16,
            fontStyle: 700,
            fontStyle: 'bold',
            width: stage.width(),
            fontFamily: 'Roboto Condensed',
            fill: 'black',
            align: 'center',
        })
        nameText.offsetX(nameText.width() / 2);
        nameLayer.add(nameText)
        resolve()
    })


    const promise4 = new Promise((resolve, reject) => {
        /////////////////////////////////////////////
        //////  add additional text field name  ////////////////
        /////////////////////////////////////////////
        var additionalText = new Konva.Text({
            x: (stage.width() / 2) + 10,
            y: 190,
            text: `ID NO\nVERSION\nCLASS\nROLL\nYEAR\nMOBILE`,
            // text: `ID NO          : ${d.stdid}\nVERSION     : ${d.courseleveltitle.toLocaleUpperCase()}\nCLASS          : ${d.grouptitle}\nROLL            : ${d.rollno}\nYEAR            : ${d.academicyear}\nMOBILE       : ${d.contactno}`,
            fontSize: 12,
            // fontStyle:700,
            width: stage.width() - 0,
            fontFamily: 'Roboto Condensed',
            fill: 'black',
            align: 'left',
            lineHeight:1.3
        })

        additionalText.offsetX(additionalText.width() / 2);
        additionalLayer.add(additionalText)
        resolve()
    })
    const promise5 = new Promise((resolve, reject) => {
        /////////////////////////////////////////////
        //////  add additional text field value  ////////////////
        /////////////////////////////////////////////
        var additionalText = new Konva.Text({
            x: (stage.width() / 2) + 60,
            y: 190,
            text: `: ${d.stdid}\n: ${d.courseleveltitle.toLocaleUpperCase()}\n: ${d.grouptitle}\n: ${d.rollno}\n: ${d.academicyear}\n: ${d.contactno}`,
            // text: `ID NO          : ${d.stdid}\nVERSION     : ${d.courseleveltitle.toLocaleUpperCase()}\nCLASS          : ${d.grouptitle}\nROLL            : ${d.rollno}\nYEAR            : ${d.academicyear}\nMOBILE       : ${d.contactno}`,
            fontSize: 12,
            // fontStyle:700,
            width: stage.width() - 0,
            fontFamily: 'Roboto Condensed',
            fill: 'black',
            align: 'left',
            lineHeight:1.3
        })

        additionalText.offsetX(additionalText.width() / 2);
        additionalLayer.add(additionalText)
        resolve()
    })


    const promise6 = new Promise((resolve, reject) => {
        ////////////////////////////////////
        ///////// add barcode image /////////
        ////////////////////////////////////
        const barcodeImgObj = new Image();
        barcodeImgObj.crossOrigin = 'anonymous';
        barcodeImgObj.src = `https://barcodeapi.org/api/${d.stdid}?text=none`;

        barcodeImgObj.onload = () => {
            const darthNode = new Konva.Image({
                x: 22,
                y: 293,
                width: 130,
                height: 20,
                cornerRadius: 3,
                strokeColor: "#ffffff",
                strokeWidth: 3,
                image: barcodeImgObj,
            });
            barcodeLayer.add(darthNode);
            stage.draw();
            resolve()
        };

        barcodeImgObj.onerror = (err) => {
            reject();
        };
    });







    return Promise.all([promise1, promise2, promise3, promise4, promise5, promise6])
        .then(async () => {
            return stage.toBlob({ pixelRatio: 3 })
            // .then(blob => resolve(blob))
            // .catch(err => reject(err));
        })

}

export default generateThemeTwo;


