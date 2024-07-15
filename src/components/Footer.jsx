import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="container" id="profil_kontak">
                <div className="profil">
                <h5><b><Link to={"/profil"}>Profil</Link></b></h5>
                <p>Kelurahan Ngaglik - Kecamatan Batu <br />Kota Batu - Provinsi Jawa Timur, Indonesia</p>
                <br />
                <p>Desa Ngaglik adalah salah satu desa yang terletak di Kecamatan Batu, Kota Batu, Jawa Timur. Desa ini memiliki luas wilayah sekitar 436,95 hektar dan terletak pada ketinggian sekitar 800-1000 meter di atas permukaan laut. Desa Ngaglik dikenal sebagai daerah pegunungan dengan udara yang sejuk dan pemandangan alam yang indah.</p>
                </div>
                <div className="kontak">
                <h5><b><Link to={"/profil"}>Kontak Kami</Link></b></h5>
                <p>Kelurahan Ngaglik - Kecamatan Batu <br /> Kota Batu - Provinsi Jawa Timur, Indonesia</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;