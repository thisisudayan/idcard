import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal, add_note, idCardsData } from './dashboardSlice'
import Theme1 from '../themes/theme1'
import { Link, useParams } from 'react-router-dom'
import * as XLSX from 'xlsx'
// import { idCardsData } from '../features/dashboard/dashboardSlice'

const Dashboard = () => {
  const toggleModalState = useSelector((state) => state.dashboard.modalStatus)
  const notes = useSelector((state) => state.dashboard.notes)
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
      dispatch(idCardsData(d))
    })

  }
  return (
    <>
      {/* <Theme1 /> */}
      <div className='flex flex-row h-full'>
        <div className='flex object-contain'>
          <img className='h-3/6' src={`../Assets/images/bg${params.id}.png`} />
        </div>
        <div className='flex flex-1 flex-col w-4/6 gap-4'>

          <input type='file' className='bg-cyan-600' onChange={(e) => {
            const file = e.target.files[0]
            readExcel(file)
          }} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
          <fieldset>
            <div class="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
              <label for="frm-whatever" class="sr-only">My field</label>
              <select class="appearance-none w-full py-1 px-2 bg-white" name="whatever" id="frm-whatever">
                <option value="">Select page format&hellip;</option>
                <option selected value="PDF">PDF</option>
                <option disabled value="PNG">PNG</option>
              </select>
              <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div class="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
              <label for="frm-whatever" class="sr-only">My field</label>
              <select class="appearance-none w-full py-1 px-2 bg-white" name="whatever" id="frm-whatever">
                <option value="">Select page size&hellip;</option>
                <option selected value="A4">A4</option>
                <option disabled value="A3">A3</option>
                <option disabled value="A2">A2</option>
                <option disabled value="A1">A1</option>
              </select>
              <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </fieldset>
          <Link to={"/download"}>
          <button className='bg-cyan-600'>Preview</button>
          </Link>

        </div>
      </div>
    </>
  )
}

export default Dashboard