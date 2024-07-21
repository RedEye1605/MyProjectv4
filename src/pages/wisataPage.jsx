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

const wisatas = [
    {
        id: 1,
        title: "Kelas Aksara Jawa",
        desc: "Untuk Mempelajari Bahasa Jawa",
        url: "https://images.app.goo.gl/niTSjT4vN2LXVDru8"
    },
    {
        id: 2,
        title: "Kelas Aksara Jawa",
        desc: "Untuk Mempelajari Bahasa Jawa",
        url: "https://images.app.goo.gl/niTSjT4vN2LXVDru8"
    },
    {
        id: 3,
        title: "Kelas Aksara Jawa",
        desc: "Untuk Mempelajari Bahasa Jawa",
        url: "https://images.app.goo.gl/niTSjT4vN2LXVDru8"
    },
    {
        id: 4,
        title: "Kelas Aksara Jawa",
        desc: "Untuk Mempelajari Bahasa Jawa",
        url: "https://images.app.goo.gl/niTSjT4vN2LXVDru8"
    },
    {
        id: 5,
        title: "Kelas Aksara Jawa",
        desc: "Untuk Mempelajari Bahasa Jawa",
        url: "https://images.app.goo.gl/niTSjT4vN2LXVDru8"
    },
    {
        id: 6,
        title: "Kelas Aksara Jawa",
        desc: "Untuk Mempelajari Bahasa Jawa",
        url: "https://images.app.goo.gl/niTSjT4vN2LXVDru8"
    },
    {
        id: 7,
        title: "Kelas Aksara Jawa",
        desc: "Untuk Mempelajari Bahasa Jawa",
        url: "https://images.app.goo.gl/niTSjT4vN2LXVDru8"
    },
    {
        id: 8,
        title: "Kelas Aksara Jawa",
        desc: "Untuk Mempelajari Bahasa Jawa",
        url: "https://images.app.goo.gl/niTSjT4vN2LXVDru8"
    },
    {
        id: 9,
        title: "Kelas Aksara Jawa",
        desc: "Untuk Mempelajari Bahasa Jawa",
        url: "https://images.app.goo.gl/niTSjT4vN2LXVDru8"
    }
]
const WisataPage = () => {
    return(
        <>
            
            <WisataHeader judul="Wisata Kelurahan Ngaglik"></WisataHeader>
            <div className="main">
                <div className="container" id="main_content">
                    <p>Selamat datang di Daringan Kelurahan Ngaglik, sebuah destinasi yang memadukan potensi seni dan budaya untuk menghadirkan kearifan lokal sebagai Wilayah Layak Wisata. Terletak di jantung Kota Wisata Batu, Daringan Ngaglik menawarkan berbagai pengalaman yang kaya akan nilai-nilai tradisional dan keindahan budaya. Mari jelajahi berbagai program dan kegiatan kami:</p>

                    {wisatas.map((wisata) =>
                            <div class="wisata_1">
                            <h6><b>{wisata.id}. {wisata.title}</b></h6>
                            <div class="container" id="desc_1">                            
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="kelas aksara jawa" />
                                <p>{wisata.desc}</p>
                            </div>
                            <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                        </div>
                    )}
                    {/* <div class="wisata_1">
                        <h6><b><p>1.</p> Kelas Aksara Jawa</b></h6>
                        <div class="container" id="desc_1">
                            <p>Pelajari dan lestarikan aksara Jawa, salah satu warisan budaya Indonesia yang kaya akan sejarah dan makna.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="kelas aksara jawa" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div>
                    <div class="wisata_1">
                        <h6><b>2. Kelas Dolanan Anak</b></h6>
                        <div class="container" id="desc_1">
                            <p>Pelajari dan lestarikan aksara Jawa, salah satu warisan budaya Indonesia yang kaya akan sejarah dan makna.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="kelas dolanan anak" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div>
                    <div class="wisata_1">
                        <h6><b>3. Paket Pelatihan Kain Lipat Jumput Kembang Tanjung</b></h6>
                        <div class="container" id="desc_1">
                            <p>Pelajari dan lestarikan aksara Jawa, salah satu warisan budaya Indonesia yang kaya akan sejarah dan makna.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="Paket Pelatihan Kain Lipat Jumput Kembang Tanjung" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div>
                    <div class="wisata_1">
                        <h6><b>4. Outbond Tradisional</b></h6>
                        <div class="container" id="desc_1">
                            <p>Pelajari dan lestarikan aksara Jawa, salah satu warisan budaya Indonesia yang kaya akan sejarah dan makna.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="Outbond Tradisional" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div>
                    <div class="wisata_1">
                        <h6><b>5. Punden Mbah Masayu Sinto Mentaram</b></h6>
                        <div class="container" id="desc_1">
                            <p>Pelajari dan lestarikan aksara Jawa, salah satu warisan budaya Indonesia yang kaya akan sejarah dan makna.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="Punden Mbah Masayu Sinto Mentaram" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div>
                    <div class="wisata_1">
                        <h6><b>6. Kelas Tari Tradisional</b></h6>
                        <div class="container" id="desc_1">
                            <p>Pelajari dan lestarikan aksara Jawa, salah satu warisan budaya Indonesia yang kaya akan sejarah dan makna.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="Kelas Tari Tradisional" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div>
                    <div class="wisata_1">
                        <h6><b>7. Paket Pelatihan Ecobrick</b></h6>
                        <div class="container" id="desc_1">
                            <p>Pelajari dan lestarikan aksara Jawa, salah satu warisan budaya Indonesia yang kaya akan sejarah dan makna.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="Paket Pelatihan Ecobrick" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div>
                    <div class="wisata_1">
                        <h6><b>8. Patirtan Sumber Tanjung</b></h6>
                        <div class="container" id="desc_1">
                            <p>Pelajari dan lestarikan aksara Jawa, salah satu warisan budaya Indonesia yang kaya akan sejarah dan makna.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="Patirtan Sumber Tanjung" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div>
                    <div class="wisata_1">
                        <h6><b>9. Sarasehan Budaya</b></h6>
                        <div class="container" id="desc_1">
                            <p>Pelajari dan lestarikan aksara Jawa, salah satu warisan budaya Indonesia yang kaya akan sejarah dan makna.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-VBdSEEJQfaJAjUyENdnHFFMkGBRIyksrTb7mVH8ZDwKVuxNkUL1rNZyq6eg6OmS0nk&usqp=CAU" alt="Sarasehan Budaya" />
                        </div>
                        <a href="https://images.app.goo.gl/niTSjT4vN2LXVDru8">https://images.app.goo.gl/niTSjT4vN2LXVDru8</a>
                    </div> */}
                </div>            
            </div>
            
        </>
    )
}

export default WisataPage