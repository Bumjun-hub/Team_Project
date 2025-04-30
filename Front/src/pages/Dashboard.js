import axios from 'axios'
import { useEffect, useState } from 'react'

import React from 'react'

import './Dashboard.css'

import {

  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
} from '@coreui/react'

const Dashboard = () => {
  const [nationalParkData, setNationalParkData] = useState([])
  const [nationalParkOfficeData, setNationalParkOfficeData] = useState([])
  const [reviewData, setReviewData] = useState([])
  const [trackData, setTrackData] = useState([])


  useEffect(() => {
    // national_park 테이블 정보 불러오기
    axios.get('/national_park/get_all_list')
      .then(response => setNationalParkData(response.data))
      .catch(error => console.error(error));

    // national_park_office 테이블 정보 불러오기
    axios.get('/national_park_office/get_all_list')
      .then(response => setNationalParkOfficeData(response.data))
      .catch(error => console.error(error));

    // review 테이블 정보 불러오기 
    axios.get('/review/get_all_list')
      .then(response => setReviewData(response.data))
      .catch(error => console.error(error));

    // track 테이블 정보 불러오기
    axios.get('/track/get_all_list')
      .then(response => setReviewData(response.data))
      .catch(error => console.error(error));
  }, [])

  return (
    <div style={{ padding: '20px' }} className='bg-dark'>
      <CRow className='gy-4'>
        <CCol xs={12}>
          <CCard className="Ctable">
            <CCardHeader>국립공원 테이블 (national_park)</CCardHeader>
            <CCardBody style={{ overflowX: 'auto' }}>

              <CTable hover responsive>
                <CTableHead className='sticky-header'>
                  <CTableRow >
                    <CTableHeaderCell>national_park_no</CTableHeaderCell>
                    <CTableHeaderCell>national_park_name</CTableHeaderCell>
                    <CTableHeaderCell>national_park_official_website</CTableHeaderCell>
                    <CTableHeaderCell>national_park_introduce</CTableHeaderCell>
                    <CTableHeaderCell>national_latitude</CTableHeaderCell>
                    <CTableHeaderCell>national_park_longitude</CTableHeaderCell>
                    <CTableHeaderCell>national_park_address_1</CTableHeaderCell>
                    <CTableHeaderCell>national_park_address_2</CTableHeaderCell>
                    <CTableHeaderCell>national_park_address_3</CTableHeaderCell>



                  </CTableRow>
                </CTableHead>

                <CTableBody className='CTableBody'>
                  {nationalParkData.map((item, index) => (
                    <CTableRow key={index} className='bg-secondary'>
                      <CTableDataCell>{item.national_park_no}</CTableDataCell>
                      <CTableDataCell>{item.national_park_name}</CTableDataCell>
                      <CTableDataCell>{item.national_park_official_website}</CTableDataCell>
                      <CTableDataCell>
                        <div style={{ maxHeight: '80px', overflowY: 'auto', wordBreak: 'break-word' }}>{item.national_park_introduce}</div>
                      </CTableDataCell>
                      <CTableDataCell>{item.national_park_latitude}</CTableDataCell>
                      <CTableDataCell>{item.national_park_longitude}</CTableDataCell>
                      <CTableDataCell>{item.national_park_address_1}</CTableDataCell>
                      <CTableDataCell>{item.national_park_address_2}</CTableDataCell>
                      <CTableDataCell>{item.national_park_address_3}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12}>
          <CCard className="Ctable">
            <CCardHeader>국립공원 office 테이블 (national_park)</CCardHeader>
            <CCardBody style={{ overflowX: 'auto' }}>

              <CTable hover responsive>
                <CTableHead className='sticky-header'>
                  <CTableRow >
                    <CTableHeaderCell>national_park_no</CTableHeaderCell>
                    <CTableHeaderCell>national_park_office_no</CTableHeaderCell>
                    <CTableHeaderCell>national_park_office_</CTableHeaderCell>
                    <CTableHeaderCell>national_park_introduce</CTableHeaderCell>
                    <CTableHeaderCell>national_latitude</CTableHeaderCell>
                    <CTableHeaderCell>national_park_longitude</CTableHeaderCell>
                    <CTableHeaderCell>national_park_address_1</CTableHeaderCell>
                    <CTableHeaderCell>national_park_address_2</CTableHeaderCell>
                    <CTableHeaderCell>national_park_address_3</CTableHeaderCell>


                  </CTableRow>
                </CTableHead>

                <CTableBody className='CTableBody'>
                  {nationalParkData.map((item, index) => (
                    <CTableRow key={index} className='bg-secondary'>
                      <CTableDataCell>{item.national_park_no}</CTableDataCell>
                      <CTableDataCell>{item.national_park_name}</CTableDataCell>
                      <CTableDataCell>{item.national_park_official_website}</CTableDataCell>
                      <CTableDataCell>
                        <div style={{ maxHeight: '80px', overflowY: 'auto', wordBreak: 'break-word' }}>{item.national_park_introduce}</div>
                      </CTableDataCell>
                      <CTableDataCell>{item.national_park_latitude}</CTableDataCell>
                      <CTableDataCell>{item.national_park_longitude}</CTableDataCell>
                      <CTableDataCell>{item.national_park_address_1}</CTableDataCell>
                      <CTableDataCell>{item.national_park_address_2}</CTableDataCell>
                      <CTableDataCell>{item.national_park_address_3}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>


        <CCol xs={12}>
          <CCard className="Ctable">
            <CCardHeader>국립공원 테이블 (national_park)</CCardHeader>
            <CCardBody style={{ overflowX: 'auto' }}>

              <CTable hover responsive>
                <CTableHead className='sticky-header'>
                  <CTableRow >
                    <CTableHeaderCell>national_park_no</CTableHeaderCell>
                    <CTableHeaderCell>national_park_name</CTableHeaderCell>
                    <CTableHeaderCell>national_park_official_website</CTableHeaderCell>
                    <CTableHeaderCell>national_park_introduce</CTableHeaderCell>
                    <CTableHeaderCell>national_latitude</CTableHeaderCell>
                    <CTableHeaderCell>national_park_longitude</CTableHeaderCell>
                    <CTableHeaderCell>national_park_address_1</CTableHeaderCell>
                    <CTableHeaderCell>national_park_address_2</CTableHeaderCell>
                    <CTableHeaderCell>national_park_address_3</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                <CTableBody className='CTableBody'>
                  {nationalParkData.map((item, index) => (
                    <CTableRow key={index} className='bg-secondary'>
                      <CTableDataCell>{item.national_park_no}</CTableDataCell>
                      <CTableDataCell>{item.national_park_name}</CTableDataCell>
                      <CTableDataCell>{item.national_park_official_website}</CTableDataCell>
                      <CTableDataCell>
                        <div style={{ maxHeight: '80px', overflowY: 'auto', wordBreak: 'break-word' }}>{item.national_park_introduce}</div>
                      </CTableDataCell>
                      <CTableDataCell>{item.national_park_latitude}</CTableDataCell>
                      <CTableDataCell>{item.national_park_longitude}</CTableDataCell>
                      <CTableDataCell>{item.national_park_address_1}</CTableDataCell>
                      <CTableDataCell>{item.national_park_address_2}</CTableDataCell>
                      <CTableDataCell>{item.national_park_address_3}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12}>
          <CCard className="Ctable">
            <CCardHeader>국립공원 테이블 (national_park)</CCardHeader>
            <CCardBody style={{ overflowX: 'auto' }}>
              
                <CTable hover responsive>
                  <CTableHead className='sticky-header'>
                    <CTableRow >
                      <CTableHeaderCell>national_park_no</CTableHeaderCell>
                      <CTableHeaderCell>national_park_name</CTableHeaderCell>
                      <CTableHeaderCell>national_park_official_website</CTableHeaderCell>
                      <CTableHeaderCell>national_park_introduce</CTableHeaderCell>
                      <CTableHeaderCell>national_latitude</CTableHeaderCell>
                      <CTableHeaderCell>national_park_longitude</CTableHeaderCell>
                      <CTableHeaderCell>national_park_address_1</CTableHeaderCell>
                      <CTableHeaderCell>national_park_address_2</CTableHeaderCell>
                      <CTableHeaderCell>national_park_address_3</CTableHeaderCell>
                      
                      
                      
                    </CTableRow>
                  </CTableHead>

                  <CTableBody className='CTableBody'>
                    {nationalParkData.map((item, index) => (
                      <CTableRow key={index} className='bg-secondary'>
                        <CTableDataCell>{item.national_park_no}</CTableDataCell>
                        <CTableDataCell>{item.national_park_name}</CTableDataCell>
                        <CTableDataCell>{item.national_park_official_website}</CTableDataCell>
                        <CTableDataCell>
                          <div style={{ maxHeight: '80px', overflowY: 'auto', wordBreak: 'break-word' }}>{item.national_park_introduce}</div>
                        </CTableDataCell>
                        <CTableDataCell>{item.national_park_latitude}</CTableDataCell>
                        <CTableDataCell>{item.national_park_longitude}</CTableDataCell>
                        <CTableDataCell>{item.national_park_address_1}</CTableDataCell>
                        <CTableDataCell>{item.national_park_address_2}</CTableDataCell>
                        <CTableDataCell>{item.national_park_address_3}</CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>





    </div>
  )
}

export default Dashboard;
