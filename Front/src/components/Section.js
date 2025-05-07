import { useRef } from 'react';
import NaverMap from './NaverMap';
import './Section.css';
import SideBar from './Sidebar';

const Section = (() => {
    const mapRef = useRef(null);

    const zoomMap = (direction) => {
        const map = window.__naverMap__ // NaverMap.js에서 저장한 객체 전역 변수로 접근
        if (map) {
            const currentZoom = map.getZoom();
            const newZoom = direction === 'in' ? currentZoom + 1 : currentZoom - 1;

            const center = map.getCenter();

            map.morph(center, newZoom);
        }
    }

    return (

        <div className='Sectiondiv'>
            <SideBar />
            <NaverMap ref={mapRef} />   
        </div>

    )
})
export default Section;