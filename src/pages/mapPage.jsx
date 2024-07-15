import React from "react";
import "../styles/petaStyle.css";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const MapHeader = ({judul}) => {
  return(
    <div class="container" id="mapHeader">
      <div class="home"><Link to={'/'}><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d320f8d89b47010171b3bb9d12cb64d2abb82d649b558d2cd6b02d5d9e50f18?apiKey=236d0a87b9ca46baa5b67a2b5a718b65&" alt="to-home"/></Link></div>
      <div class="slash"><h4>/</h4></div>
      <h4><b>{judul}</b></h4>
    </div>
  )
}  
const MapPage = () => {
    return(
        <>
          
          <div className="konten">
            <MapHeader judul="Peta Kelurahan Ngaglik"></MapHeader>
            <div className="peta">      
              <MapContainer center={[-7.872174064446285, 112.52105685691866]} zoom={20} scrollWheelZoom={false}>
                <TileLayer 
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'/>                     
              </MapContainer>
            </div>
            <div className="desc">
              <p>
                Menu Geografis Desa,Menu ini berisi informasi terkait kewilayahan
                desa dari kondisi geografisnya Kondisi geografis adalah kondisi atau
                keadaan suatu wilayah dengan dilihat dari keadaannya yang berkaitan
                dengan aspek geografis. Aspek-aspek itu meliputi :
              </p>
              <ul>
                <li>
                  •Letak, terkait dengan lokasi geografis, luas, bentuk dan posisi
                  koordinat dari peta.
                </li>
                <li>
                  •Point Of Interest, terkait dengan lokasi terdekat seperti
                  sekolah, supermarket, atau umkm terdekat.
                </li>
                <li>
                  •Lokasi, terkait masjid, musholla, gereja, dan tempat ibadah
                  lainnya.
                </li>
                <li>•Wisata daerah Desa Ngaglik.</li>
                <li>Dan lain-lainnya.</li>
              </ul>
              <p>Geografi dan Iklim Letak Geografis:</p>
              <ul>
                <li>
                  • Lokasi: Desa Ngaglik, Kecamatan Batu, Kota Batu, Provinsi Jawa
                  Timur, Indonesia.
                </li>
                <br /><li>• Koordinat: 7°52' Lintang Selatan dan 112°31' Bujur Timur.</li>
                <br /><li>• Batas Wilayah:</li>
                <ul>
                  <li>o Utara: Desa Sidomulyo.</li>
                  <br /><li>o Timur: Desa Sidomulyo.</li>
                  <br /><li>o Selatan: Desa Oro-Oro Ombo.</li>
                  <br /><li>o Barat: Desa Pesanggrahan.</li>
                </ul>
              </ul>
              <p>Topografi:</p>
              <li>
                • Ketinggian: 
                <br/>700-1,200 meter di atas permukaan laut. Desa ini
                berada di kawasan pegunungan yang berbukit-bukit, dengan lereng dan
                dataran yang bervariasi. Bagian tertinggi wilayah desa dapat
                mencapai sekitar 1.200 meter di atas permukaan laut, yang memberikan
                udara sejuk dan pemandangan yang indah.
              </li>
              <p>Luas Wilayah:</p>
              <li>
                • Total:  
                <br/>Sekitar 363 hektar. Penggunaan lahan desa bervariasi,
                termasuk lahan pertanian, permukiman, serta area komersial dan
                pariwisata.
              </li>
              <br/>
              <p>Sumber Daya Alam:</p>
              <li>
                • Sumber Air: Terdapat beberapa mata air dan sungai kecil yang
                menjadi sumber air untuk pertanian dan kebutuhan sehari-hari
                masyarakat.
              </li>
              <p>Iklim :</p>
              <li>
                • Sejuk dengan suhu rata-rata antara 15°C hingga 24°C. Curah hujan
                tinggi, terutama pada musim hujan antara bulan November hingga
                April.            
              </li>
            </div>
          </div>
          
        </>
    )
}
export default MapPage