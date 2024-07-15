import React from "react";
import "../styles/wisataStyle.css";
import { Link } from "react-router-dom";
import DateLogo from "../assets/dateLogo.png"

const WisataHeader = ({judul}) => {
    return(
        <div class="container" id="headWisata">
            <div class="home"><Link to={'/'}><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d320f8d89b47010171b3bb9d12cb64d2abb82d649b558d2cd6b02d5d9e50f18?apiKey=236d0a87b9ca46baa5b67a2b5a718b65&" alt="to-home"/></Link></div>
            <div class="slash"><h4>/</h4></div>
            <h4><b>{judul}</b></h4>
        </div>
    )
}
const Wisata2Page = () => {
    return(
        <>
            
            <WisataHeader judul="Wisata Kelurahan Ngaglik"></WisataHeader>
            <div className="main">
                <div className="container" id="main_content">
                    <div class="wisata_1">
                        <h6><b>1. Alun-Alun Batu</b></h6>
                        <div class="container" id="desc_1">
                            <p>Alun-Alun Kota Batu adalah pusat kegiatan publik yang sering dikunjungi oleh penduduk lokal maupun wisatawan. Tempat ini memiliki taman bermain, air mancur, dan berbagai warung makanan yang menjual kuliner lokal. Alun-Alun juga sering digunakan untuk berbagai acara dan festival, menjadikannya pusat hiburan dan sosial kota.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="kelas aksara jawa" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div>
                    <div class="wisata_1">
                        <h6><b>2. Jatim Park 1</b></h6>
                        <div class="container" id="desc_1">
                            <p>Jatim Park 1 adalah taman hiburan yang menawarkan kombinasi antara wahana permainan dan atraksi edukasi. Tempat ini menyediakan berbagai permainan seru seperti roller coaster dan water rides, serta berbagai pameran edukatif seperti galeri sejarah, sains, dan kebudayaan Jawa Timur. Jatim Park 1 cocok untuk keluarga yang ingin menikmati hiburan sekaligus belajar.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="kelas dolanan anak" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div>
                    <div class="wisata_1">
                        <h6><b>3. Museum Angkut</b></h6>
                        <div class="container" id="desc_1">
                            <p>Museum Angkut adalah museum transportasi pertama di Asia Tenggara yang menampilkan berbagai jenis kendaraan dari berbagai era, mulai dari sepeda antik hingga pesawat terbang. Tempat ini terbagi menjadi beberapa zona dengan tema berbeda, seperti Zona Eropa, Zona Hollywood, dan Zona Gangster Town. Setiap zona dirancang dengan latar belakang yang sesuai dengan era dan jenis kendaraan yang dipamerkan, menjadikannya spot foto yang menarik.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="Paket Pelatihan Kain Lipat Jumput Kembang Tanjung" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div>
                    <div class="wisata_1">
                        <h6><b>4. Batu Wonderland</b></h6>
                        <div class="container" id="desc_1">
                            <p>Batu Wonderland adalah kompleks wisata yang menggabungkan hotel, waterpark, dan pusat perbelanjaan. Waterpark di Batu Wonderland menawarkan berbagai wahana air, kolam renang, dan area bermain anak. Pusat perbelanjaannya menyediakan berbagai pilihan belanja dan kuliner, sementara hotelnya menawarkan akomodasi yang nyaman untuk pengunjung yang ingin menginap.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="Outbond Tradisional" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div>
                    <div class="wisata_1">
                        <h6><b>5. Eco Green Park</b></h6>
                        <div class="container" id="desc_1">
                            <p>Eco Green Park adalah taman rekreasi yang memadukan konsep edukasi lingkungan dengan hiburan. Tempat ini menawarkan berbagai wahana yang mengajarkan pengunjung tentang ekologi, konservasi, dan lingkungan hidup. Beberapa atraksi utamanya meliputi taman burung, rumah terbalik, dan kebun hidroponik. Eco Green Park sangat cocok untuk keluarga yang ingin menikmati wisata sambil belajar tentang pelestarian lingkungan.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="Outbond Tradisional" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div>
                    
                </div>
                <div className="container" id="side_content">
                    <div class="title">
                        <h5>
                            <Link to={"/wisata"}>
                                <b>WISATA LAINNYA</b>
                            </Link>
                        </h5>
                    </div>
                <div className="content">
                    <div class="container" id="content1">
                        <a href="#">  
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="" /></a>
                        <a href="#">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                                <div className="tanggal">
                                    <img src={DateLogo} alt="..." id="logo_date"/>
                                    <p>Mar 18, 2024</p>
                                </div>
                            </p></a>
                    </div>
                <div class="separator"></div>
                <div class="container" id="content2">
                        <a href="#">  
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="" /></a>
                        <a href="#">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                                <div className="tanggal">
                                    <img src={DateLogo} alt="..." id="logo_date"/>
                                    <p>Mar 18, 2024</p>
                                </div>
                            </p></a>
                </div>
                <div class="separator"></div>
                    <div class="container" id="content3">
                        <a href="#">  
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="" /></a>
                        <a href="#">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                                <div className="tanggal">
                                    <img src={DateLogo} alt="..." id="logo_date"/>
                                    <p>Mar 18, 2024</p>
                                </div>
                            </p></a>
                    </div>
                <div class="separator"></div>
                </div>
                </div>
            </div>
            
        </>
    )
}

export default Wisata2Page