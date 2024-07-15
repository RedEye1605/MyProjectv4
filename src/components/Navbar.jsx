import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5tD5Xe_SQ-7_Hm47dwSArmpr2fhi2yvzNyOdkLf82I6HJ346GjUP11kWRs42vQ6GMvJv49VoSyWy1816EyQ3ceDoWiuhMsFMhcb8vlYEJQLC-IeAUbj7A9lVSuGrcGRHFl8AwddyLQKBwv9vcH9y1ZiOz61ig8KtEtNOos2KEmiX06TY2qrNkij8P/w400-h300/Logo%20Kota%20Batu.png" alt="logo kota Batu" />
            <div class="nama_logo">
                <h5><b>Kelurahan Ngaglik</b></h5>
                <h6>Kecamatan Batu</h6>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <Link to={'/'}><b>Home</b></Link></li>
                    <li class="nav-item">
                        <Link to={'/profil'}><b>Profil</b></Link></li>
                    <li class="nav-item">
                        <Link to={'/berita'}><b>Berita</b></Link></li>
                    <li class="nav-item">
                        <Link to={'/peta'}><b>Peta</b></Link></li>
                    <li class="nav-item">
                        <Link to={'/wisata'}><b>Wisata</b></Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar