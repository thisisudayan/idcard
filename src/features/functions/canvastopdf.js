import jsPDF from 'jspdf';
    const canvasToPDF = (pdfName = "idcards", idCardBolbUrls, height, width) =>{
        var pdf = new jsPDF('l', 'px', [width,height]);
        pdf.setTextColor('#000000');
        let x = 0;
        let y = 0
        // then put image on top of texts (so texts are not visible)
        for (let index = 0; index < idCardBolbUrls.length; index++) {
            
            pdf.addImage(
                idCardBolbUrls[index],
              x,
              y,
              204,
              324
            );
            x+=204
            if((index+1)%10===0){
                pdf.addPage()
                x=0
                y=0
            }else if((index+1)%5===0){
                y+=324
                x=0
            }
        }
        pdf.save(pdfName+'.pdf');
    }

    export default canvasToPDF;