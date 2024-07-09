import React, { useState } from 'react'
import * as XLSX from 'xlsx'
import { CloudUpload } from '@mui/icons-material'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import { idCardsData } from '../features/dashboard/dashboardSlice'
import { useDispatch } from 'react-redux';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const UploadButton = () => {

    const dispatch = useDispatch()

    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {

            const fileReader = new FileReader()
            fileReader.readAsArrayBuffer(file)
            fileReader.onload = (e) => {
                const bufferArray = e.target.result
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
            dispatch(idCardsData(d))
        })

    }
    return (
        <>
            <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                startIcon={<CloudUpload />}
                sx={{ width: '100%' }}
            >
                Upload file
                <VisuallyHiddenInput type="file" onChange={(e) => {
                    const file = e.target.files[0]
                    readExcel(file)
                }} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
            </Button>
        </>
    )
}

export default UploadButton

