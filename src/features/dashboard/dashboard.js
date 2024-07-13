import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { idCardsData, setPageFormat, setPageSize, setRawExcelDataArray } from './dashboardSlice'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import * as XLSX from 'xlsx'

const Dashboard = () => {
  const [isRawExcelData, setIsRawExcelData] = useState(false)
  const reduxExcelData = useSelector((state) => state.dashboard.rawExcelDataArray)

  const dispatch = useDispatch()
  const params = useParams()

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
      if (d) setIsRawExcelData(true)
      dispatch(setRawExcelDataArray(d))
      

    })

  }

  const preview = () => {
    // console.log(reduxExcelData)
  }


  return (
    <>
      <div className='flex flex-col gap-5 justify-center items-center h-full'>
        <h1 className='text-2xl'>{params.id === 1 ? "Updoad your file to generate student's ID card" : "Updoad your file to generate teacher's ID card"}</h1>
        <div className='flex gap-10'>
          <div className='flex w-3/6 justify-end'>
            <div className='w-4/6'>
              <img alt='Theme Background' src={`../Assets/images/bg${params.id}.png`} />
            </div>
          </div>
          <div className='flex w-3/6 justify-start items-center'>
            <div className='w-3/6 flex flex-col gap-3'>
              <div className="w-full">
                <label className=" flex flex-col items-center px-1 py-1 transform transition duration-500 bg-white text-sky-500 rounded-sm shadow-lg tracking-wide uppercase border border-blue-300 cursor-pointer hover:bg-sky-500 hover:text-white">
                  <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="text-base leading-normal">Upload</span>
                  <input type='file' className="hidden" onChange={(e) => {
                    const file = e.target.files[0]
                    readExcel(file)
                  }} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                </label>
              </div>
              <fieldset>
                <div className="relative border border-blue-300 text-gray-800 bg-white shadow-lg ">
                  <select onChange={(e) => dispatch(setPageFormat(e.target.value))} defaultValue="PDF" className="appearance-none w-full py-1 px-2 bg-white text-center outline-none">
                    <option disabled value="abc">Select page format&hellip;</option>
                    <option value="PDF">PDF</option>
                    <option disabled value="PNG">PNG</option>
                  </select>
                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div className="relative border border-blue-300 text-gray-800 bg-white shadow-lg">
                  <label htmlFor="frm-whatever" className="sr-only">My field</label>
                  <select onChange={(e) => {
                    switch (e.target.value) {
                      case "A1":
                        dispatch(setPageSize({
                          type: e.target.value,
                          width: 3178
                        }))
                        break
                      case "A2":
                        dispatch(setPageSize({
                          type: e.target.value,
                          width: 2245
                        }))
                        break
                      case "A3":
                        dispatch(setPageSize({
                          type: e.target.value,
                          width: 1585
                        }))
                        break
                      case "A4":
                        dispatch(setPageSize({
                          type: e.target.value,
                          width: 1122
                        }))
                        break
                      default:
                        return
                    }
                    console.log(e.target.value)
                  }} defaultValue="A4" className="appearance-none w-full py-1 px-2 bg-white text-center outline-none">
                    <option disabled value="abc">Select page size&hellip;</option>
                    <option value="A4">A4</option>
                    <option value="A3">A3</option>
                    <option value="A2">A2</option>
                    <option value="A1">A1</option>
                  </select>
                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </fieldset>
              <Link to={`/download/${params.id}`}>
                <button onClick={preview} disabled={isRawExcelData ? false : true} className={`transform transition duration-500 ${isRawExcelData ? 'bg-blue-600' : 'bg-white border border-sky-300'} ${isRawExcelData ? 'text-white' : 'text-sky-500'}  w-full rounded-sm p-1 uppercase `}>Preview</button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard