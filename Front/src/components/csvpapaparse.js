import React, { useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

// 너의 네이버 클라우드 인증 정보



const CsvGeocoder = () => {
  const [convertedData, setConvertedData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        const data = results.data;
        setLoading(true);

        const updated = await Promise.all(
          data.map(async (row) => {
            const address = row["트랙시작지점주소"];
            if (!address) return { ...row, latitude: "", longitude: "" };

            try {

              const res = await axios.get(
                "http://localhost:8080/api/geocode",
                {
                  params: { query: address },

                });



              console.log("변환된 좌표: ", res.data.addresses[0]);
              const loc = res.data.addresses[0];
              return {
                ...row,
                latitude: loc?.y || "",
                longitude: loc?.x || "",
              };
            } catch (error) {
              console.error("지오코딩 실패:", address);
              return { ...row, latitude: "", longitude: "" };
            }
          })
        );

        setConvertedData(updated);
        setLoading(false);
      },
    });
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(convertedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "국립공원트랙");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const blob = new Blob(
      [excelBuffer],
      {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }
    );

    saveAs(blob, "국립공원트랙_좌표포함.xlsx");
  };

  return (
    <div>
      <h2>CSV 업로드 → 위도/경도 추가</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {loading && <p>지오코딩 처리 중... ⏳</p>}
      {convertedData.length > 0 && (
        <button onClick={handleDownload}>CSV 다운로드</button>
      )}
    </div>
  );
};

export default CsvGeocoder;
