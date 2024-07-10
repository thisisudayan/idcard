import Konva from 'konva';

const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        Konva.Image.fromURL(src, (imageNode) => {
            resolve(imageNode);
        }, (error) => {
            reject(error);
        });
    });
};

const generateThemeOne = async (d) => {
    // create stage
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

    try {
        // add background image
        const backgroundNode = await loadImage('../Assets/images/imagecard.png');
        backgroundNode.setAttrs({
            x: 0,
            y: 0,
            height: 324,
            width: 204,
        });
        backgroundLayer.add(backgroundNode);

        // add avatar
        const avatar = await loadImage(d.photoname);
        avatar.setAttrs({
            y: 67,
            x: (stage.width() - 100) / 2,
            height: 100,
            width: 100,
            stroke: '#3B75C4',
            strokeWidth: 3,
            cornerRadius: 60,
        });
        imageLayer.add(avatar);

        // add full name
        var nameText = new Konva.Text({
            x: stage.width() / 2,
            y: 175,
            text: `${d.name_en}`,
            fontSize: 16,
            fontStyle: 'bold',
            width: stage.width() - 20,
            fontFamily: 'Calibri',
            fill: 'black',
            align: 'center',
        });
        nameText.offsetX(nameText.width() / 2);
        nameLayer.add(nameText);

        // add additional text
        var additionalText = new Konva.Text({
            x: stage.width() / 2,
            y: 210,
            text: `ID NO          : ${d.stdid}\nVERSION     : ${d.courseleveltitle}\nCLASS          : ${d.grouptitle}\nROLL            : ${d.rollno}\nYEAR            : ${d.academicyear}\nMOBILE       : ${d.contactno}`,
            fontSize: 12,
            width: stage.width() - 40,
            fontFamily: 'Calibri',
            fill: 'black',
            align: 'left',
        });
        additionalText.offsetX(additionalText.width() / 2);
        additionalLayer.add(additionalText);

        // add barcode
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
            barcodeLayer.add(barcode);
        };
        imageObj.src = `https://barcodeapi.org/api/${d.stdid}?text=none`;

        // add layers
        stage.add(backgroundLayer);
        stage.add(imageLayer);
        stage.add(nameLayer);
        stage.add(additionalLayer);
        stage.add(barcodeLayer);

        // wait for barcode to load
        await new Promise((resolve) => {
            imageObj.onload = resolve;
        });

        return stage.toDataURL();
    } catch (error) {
        console.error('Error generating ID card:', error);
    }
};

const getIdCardImages = async (data) => {
    return await Promise.all(data.map(async (item) => await generateThemeOne(item)));
};

export default getIdCardImages;
