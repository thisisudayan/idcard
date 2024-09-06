// import React from 'react'
import * as XLSX from 'xlsx'



const readExcel = (file) => {
    let data = []
    let fileName = "unknown"
    const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsArrayBuffer(file)
        fileReader.onload = (e) => {
            const bufferArray = e.target.result
            fileName = file.name
            const workBook = XLSX.read(bufferArray, { type: 'buffer' })
            const workSheetName = workBook.SheetNames[0]
            const workSheet = workBook.Sheets[workSheetName]
            const data = XLSX.utils.sheet_to_json(workSheet)
            resolve(data)

        }
        fileReader.onerror = ((error) => {
            reject(error)
        })

    })
    promise.then((d) => {
        // dispatch(setRawExcelDataArray(d))
        data = d
    })

    return {
        fileName,
        data
    }
}

export default readExcel