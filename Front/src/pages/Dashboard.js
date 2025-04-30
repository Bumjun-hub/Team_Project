// Admin으로 로그인했을때 연결되는 페이지
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
  const [weatherData, setWeatherData] = useState([])


  // 수정중인 행의 ID
  const [editId, setEditId] = useState(null);
  // 수정할 값
  const [editRow, setEditRow] = useState({});


  // national_park 테이블 정보 불러오는 함수(useEffect에서 사용)

  const fetchNationalParkData = () => {
    axios.get('/national_park/get_all_list')
      .then(response => setNationalParkData(response.data))
      .catch(error => console.error(error));
  }

  // national_park_office 테이블 정보 불러오기
  const fetchNationalParkOfficeData = () => {
    axios.get('/national_park_office/get_all_list')
      .then(response => setNationalParkOfficeData(response.data))
      .catch(error => console.error(error));
  }

  // review 테이블 정보 불러오기 

  const fetchReviewData = () => {
    axios.get('/review/get_all_list')
      .then(response => setReviewData(response.data))
      .catch(error => console.error(error));
  }
  // track 테이블 정보 불러오기
  const fetchTrackData = () => {
    axios.get('/track/get_all_list')
      .then(response => setTrackData(response.data))
      .catch(error => console.error(error));
  }

  // weather 테이블 정보 불러오기
  const fetchWeatherData = () => {
    axios.get('/weather/get_all_list')
      .then(response => setWeatherData(response.data))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    fetchNationalParkData();
    fetchNationalParkOfficeData();
    fetchReviewData();
    fetchTrackData();
    fetchWeatherData();
  }, [])


  // 수정 버튼 눌렀을때 공통적으로 사용할 함수
  // (각 테이블마다 handleEdit 함수를 써야하는데 각각 만들기엔 유지보수가 어려움)
  // (따라서 공통 handleEdit함수를 사용)
  // (아래 코드에서 수정버튼에 handleEdit 사용하여 값을 넘겨줌)
  const handleEdit = (item, table, idField) => {
    setEditId({ id: item[idField], table });
    setEditRow({ ...item });
  }

  const handleRowChange = (field, value) => {
    setEditRow(prev => ({ ...prev, [field]: value })) // prev : 이전 상태값을 참조할때 사용하는 매개변수
  }

  const handleCancle = () => {
    setEditId(null)
    setEditRow({})
  }

  // 수정 버튼 클릭했을때 값을 읽음
  const handleSave = () => {
    const { id, table } = editId;
    let url = '';
    if (table === 'review') url = '/review/modify';
    else if (table === 'track') url = '/track/modify';
    else if (table === 'national_park') url = '/national_park/modify';
    else if (table === 'national_park_office') url = '/national_park_office/modify';
    else if (table === 'weather') url = '/weather/modify';
    axios.put(url, editRow)
      .then(() => {
        alert('수정 완료')
        setEditId(null)
        setEditRow({})
        if (table === 'review') fetchReviewData();
        else if (table === 'track') fetchTrackData();
        else if (table === 'national_park') fetchNationalParkData();
        else if (table === 'national_park_office') fetchNationalParkOfficeData();
        else if (table === 'weather') fetchWeatherData();
      })
      .catch(err => console.error(err))
  }

  const handleDelete = (id) => {
    console.log('삭제', id);
  }


  return (

    <div style={{ padding: '20px' }} className='bg-dark'>
      <h1>ㅇㅇㅇ</h1>
      <CRow className='gy-4'>

        {/* national_park 테이블 */}
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
                      <CTableDataCell>{editId === item.national_park_no ? (
                        <input
                          value={editRow.national_park_name || ''}
                          onChange={e => handleRowChange('national_park_name', e.target.value)}
                        />
                      ) : item.national_park_name}</CTableDataCell>
                      <CTableDataCell>{editId === item.national_park_no ? (
                        <input
                          value={editRow.national_park_official_website || ''}
                          onChange={e => handleRowChange('national_park_official_website', e.target.value)}
                        />
                      ) : item.national_park_official_website}</CTableDataCell>

                      <CTableDataCell>
                        {editId === item.national_park_no ? (
                          <textarea
                            style={{ width: '100%' }}
                            rows={3}
                            value={editRow.national_park_introduce || ''}
                            onChange={e => handleRowChange('national_park_introduce', e.target.value)}
                          />
                        ) : (
                          <div style={{ maxHeight: '80px', overflowY: 'auto', wordBreak: 'break-word' }}>
                            {item.national_park_introduce}
                          </div>
                        )}
                      </CTableDataCell>
                      <CTableDataCell>
                        {editId === item.national_park_no ? (
                          <input
                            value={editRow.national_park_latitude || ''}
                            onChange={e => handleRowChange('national_latitude', e.target.value)}
                          />
                        ) : item.national_park_latitude}
                      </CTableDataCell>
                      <CTableDataCell>
                        {editId === item.national_park_no ? (
                          <input
                            value={editRow.national_park_longitude || ''}
                            onChange={e => handleRowChange('national_park_longitude', e.target.value)}
                          />
                        ) : item.national_park_longitude}
                      </CTableDataCell>
                      <CTableDataCell>{item.national_park_address_1}</CTableDataCell>
                      <CTableDataCell>{item.national_park_address_2}</CTableDataCell>
                      <CTableDataCell>{item.national_park_address_3}</CTableDataCell>
                      <CTableDataCell>
                        {editId === item.national_park_no ? (
                          <div style={{ display: 'flex', gap: '10px' }}>
                            <button onClick={handleSave} style={{ minWidth: '50px', whiteSpace: 'nowrap' }} >저장</button>
                            <button onClick={handleCancle} style={{ minWidth: '50px', whiteSpace: 'nowrap', marginLeft: '6px' }}>취소</button>
                          </div>
                        ) : (
                          <button onClick={() => handleEdit(item,'national_park','national_park_no')} style={{ minWidth: '50px', whiteSpace: 'nowrap' }}>✏️ 수정</button>
                        )}
                      </CTableDataCell>

                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>

        {/* national_park_office 테이블 */}
        <CCol xs={12}>
          <CCard className="Ctable">
            <CCardHeader>국립공원 office 테이블 (national_park_office)</CCardHeader>
            <CCardBody style={{ overflowX: 'auto' }}>

              <CTable hover responsive>
                <CTableHead className='sticky-header'>
                  <CTableRow>
                    <CTableHeaderCell>national_park_no</CTableHeaderCell>
                    <CTableHeaderCell>national_park_office_no</CTableHeaderCell>
                    <CTableHeaderCell>national_park_office_name</CTableHeaderCell>
                    <CTableHeaderCell>national_park_office_address</CTableHeaderCell>
                    <CTableHeaderCell>national_park_office_phone</CTableHeaderCell>

                  </CTableRow>
                </CTableHead>

                <CTableBody className='CTableBody'>
                  {nationalParkOfficeData.map((item, index) => (
                    <CTableRow key={index} className='bg-secondary'>
                      <CTableDataCell>{item.national_park_no}</CTableDataCell>
                      <CTableDataCell>{item.national_park_office_no}</CTableDataCell>
                      <CTableDataCell>{item.national_park_office_name}</CTableDataCell>
                      <CTableDataCell>
                        <div style={{ maxHeight: '80px', overflowY: 'auto', wordBreak: 'break-word' }}>{item.national_park_office_address}</div>
                      </CTableDataCell>
                      <CTableDataCell>{item.national_park_office_phone}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>

        {/* review 테이블 */}
        <CCol xs={12}>
          <CCard className="Ctable">
            <CCardHeader>리뷰 테이블 (review)</CCardHeader>
            <CCardBody style={{ overflowX: 'auto' }}>

              <CTable hover responsive>
                <CTableHead className='sticky-header'>
                  <CTableRow >
                    <CTableHeaderCell>national_park_no</CTableHeaderCell>
                    <CTableHeaderCell>review_no</CTableHeaderCell>
                    <CTableHeaderCell>track_no</CTableHeaderCell>
                    <CTableHeaderCell>review_created_date</CTableHeaderCell>
                    <CTableHeaderCell>review_last_modified_date</CTableHeaderCell>
                    <CTableHeaderCell>member_id</CTableHeaderCell>
                    <CTableHeaderCell>review_content</CTableHeaderCell>

                  </CTableRow>
                </CTableHead>

                <CTableBody className='CTableBody'>
                  {reviewData.map((item, index) => (
                    <CTableRow key={index} className='bg-secondary'>
                      <CTableDataCell>{item.national_park_no}</CTableDataCell>
                      <CTableDataCell>{item.review_no}</CTableDataCell>
                      <CTableDataCell>{item.track_no}</CTableDataCell>
                      <CTableDataCell>{item.review_created_date}</CTableDataCell>
                      <CTableDataCell>{item.review_last_modified_date}</CTableDataCell>
                      <CTableDataCell>{item.member_id}</CTableDataCell>
                      <CTableDataCell>{item.review_content}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>

        {/* track 테이블 */}
        <CCol xs={12}>
          <CCard className="Ctable">
            <CCardHeader>트랙 테이블 (track)</CCardHeader>
            <CCardBody style={{ overflowX: 'auto' }}>

              <CTable hover responsive>
                <CTableHead className='sticky-header'>
                  <CTableRow >
                    <CTableHeaderCell>national_park_no</CTableHeaderCell>
                    <CTableHeaderCell>track_no</CTableHeaderCell>
                    <CTableHeaderCell>track_name</CTableHeaderCell>
                    <CTableHeaderCell>track_detail</CTableHeaderCell>
                    <CTableHeaderCell>track_difficulty</CTableHeaderCell>
                    <CTableHeaderCell>track_time</CTableHeaderCell>
                    <CTableHeaderCell>track_length</CTableHeaderCell>
                    <CTableHeaderCell>track_altitude</CTableHeaderCell>
                    <CTableHeaderCell>track_latitude</CTableHeaderCell>
                    <CTableHeaderCell>track_longitude</CTableHeaderCell>
                    <CTableHeaderCell>track_find</CTableHeaderCell>




                  </CTableRow>
                </CTableHead>

                <CTableBody className='CTableBody'>
                  {trackData.map((item, index) => (
                    <CTableRow key={index} className='bg-secondary'>
                      <CTableDataCell>{item.national_park_no}</CTableDataCell>
                      <CTableDataCell>{item.track_no}</CTableDataCell>
                      <CTableDataCell>{item.track_name}</CTableDataCell>
                      <CTableDataCell>{item.track_detail}</CTableDataCell>
                      <CTableDataCell>{item.track_difficulty}</CTableDataCell>
                      <CTableDataCell>{item.track_time}</CTableDataCell>
                      <CTableDataCell>{item.track_length}</CTableDataCell>
                      <CTableDataCell>{item.track_altitude}</CTableDataCell>
                      <CTableDataCell>{item.track_latitude}</CTableDataCell>
                      <CTableDataCell>{item.track_longitude}</CTableDataCell>
                      <CTableDataCell><div style={{ maxWidth: '300px', maxHeight: '80px', overflowY: 'auto' }}>{item.track_find}</div></CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>


        {/* weather테이블 */}
        <CCol xs={12}>
          <CCard className="Ctable">
            <CCardHeader>날씨 (Weather)</CCardHeader>
            <CCardBody style={{ overflowX: 'auto' }}>

              <CTable hover responsive>
                <CTableHead className='sticky-header'>
                  <CTableRow >
                    <CTableHeaderCell>weather_no</CTableHeaderCell>
                    <CTableHeaderCell>national_park_no</CTableHeaderCell>
                    <CTableHeaderCell>weather_location_x</CTableHeaderCell>
                    <CTableHeaderCell>weather_location_y</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                <CTableBody className='CTableBody'>
                  {weatherData.map((item, index) => (
                    <CTableRow key={index} className='bg-secondary'>
                      <CTableDataCell>{item.weather_no}</CTableDataCell>
                      <CTableDataCell>{item.national_park_no}</CTableDataCell>
                      <CTableDataCell>{item.weather_location_x}</CTableDataCell>
                      <CTableDataCell>{item.weather_location_y}</CTableDataCell>

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
