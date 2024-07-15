import React from "react";
import { Link } from "react-router-dom";
import "../styles/profilStyle.css";
import { map } from "leaflet";

const Headerprofil = ({ title, iconSrc }) => {
  return (
    <div className="container" id="head">
      <div class="home">
        <Link to={"/"}>
          <img src={iconSrc} alt="to-home" />
        </Link>
      </div>
      <div class="slash">
        <h4>/</h4>
      </div>
      <h4>
        <b>{title}</b>
      </h4>
    </div>
  );
};
const Definition = ({ text, photo }) => {
  return (
    <div className="container" id="explanation">
      <img src={photo} alt="Gambar kelurahan" />
      <div className="container" id="explain">
        <p>
          <b>{text}</b>
        </p>
      </div>
    </div>
  );
};
const ProfilPage = () => {
  const members =[
    {
      id: 1,
      name: "Rendra Adinata, S.Kom., MMG., M.AP.",
      position: "Kepala Lurah",
      imgsrc: "https://www.beerinstitute.org/wp-content/uploads/2016/11/placeholder-3x4.png"
    }
  ]
  const descript = [
    {
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNccyl3VZ_rJzAw-DB0FW9fsMyoKTs1Il0WQ&s",
      text: "Kelurahan unit administratif terkecil di Indonesia setelah desa atau kelurahan merupakan suatu bagian dari wilayah administratif kecamatan. Setiap kelurahan dipimpin oleh seorang lurah yang bertanggung jawab atas pemerintahan, pelayanan kepada masyarakat, serta pembangunan di tingkat lokal. Struktur kelurahan mencakup lurah sebagai kepala, sekretariat untuk administrasi, bidang pemerintahan, pembangunan, dan kesejahteraan rakyat, serta lembaga pemberdayaan masyarakat dan badan permusyawaratan kelurahan untuk memfasilitasi partisipasi masyarakat dalam pengambilan keputusan.",
    },
  ];
  return (
    <>
      <Headerprofil
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1d320f8d89b47010171b3bb9d12cb64d2abb82d649b558d2cd6b02d5d9e50f18?apiKey=236d0a87b9ca46baa5b67a2b5a718b65&"
        title="Profil Singkat Kelurahan Ngaglik"
      ></Headerprofil>
      {descript.map((descript) => (
        <Definition
          photo={descript.imgsrc}
          text={descript.text}
        ></Definition>
      ))}
      <div className="container">
        <main>
          <section className="section">
            <div className="container">
              <h2 className="section-title">
                <b>Struktur Anggota Kelurahan Ngaglik</b>
              </h2>
              <div className="team-grid">
                {[
                  {
                    name: "Rendra Adinata, S.Kom., MMG., M.AP.",
                    id: "_1",
                    position: "Kepala Lurah",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/6b114bbe3e71380bb1975e6b60c5149eb98012f8d4720071fdd5d5337ff4cbe2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b114bbe3e71380bb1975e6b60c5149eb98012f8d4720071fdd5d5337ff4cbe2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b114bbe3e71380bb1975e6b60c5149eb98012f8d4720071fdd5d5337ff4cbe2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b114bbe3e71380bb1975e6b60c5149eb98012f8d4720071fdd5d5337ff4cbe2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b114bbe3e71380bb1975e6b60c5149eb98012f8d4720071fdd5d5337ff4cbe2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b114bbe3e71380bb1975e6b60c5149eb98012f8d4720071fdd5d5337ff4cbe2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b114bbe3e71380bb1975e6b60c5149eb98012f8d4720071fdd5d5337ff4cbe2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b114bbe3e71380bb1975e6b60c5149eb98012f8d4720071fdd5d5337ff4cbe2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&",
                  },
                  {
                    name: "Della Alifia Pratiwi",
                    id: "_2",
                    position: "Staff Kelurahan",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/d6596445849a84e208e7776ea23a7f21a819d68b28ca4652f52597dbb68ae723?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6596445849a84e208e7776ea23a7f21a819d68b28ca4652f52597dbb68ae723?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6596445849a84e208e7776ea23a7f21a819d68b28ca4652f52597dbb68ae723?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6596445849a84e208e7776ea23a7f21a819d68b28ca4652f52597dbb68ae723?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6596445849a84e208e7776ea23a7f21a819d68b28ca4652f52597dbb68ae723?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6596445849a84e208e7776ea23a7f21a819d68b28ca4652f52597dbb68ae723?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6596445849a84e208e7776ea23a7f21a819d68b28ca4652f52597dbb68ae723?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6596445849a84e208e7776ea23a7f21a819d68b28ca4652f52597dbb68ae723?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&",
                  },
                  {
                    name: "Erna Setyaningsih",
                    id: "_3",
                    position: "Staff Kelurahan",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/bcdb7f702b779bd52453d39f1d08b22218a61e9fe88d06cd0ad2a27e0277da86?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdb7f702b779bd52453d39f1d08b22218a61e9fe88d06cd0ad2a27e0277da86?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdb7f702b779bd52453d39f1d08b22218a61e9fe88d06cd0ad2a27e0277da86?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdb7f702b779bd52453d39f1d08b22218a61e9fe88d06cd0ad2a27e0277da86?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdb7f702b779bd52453d39f1d08b22218a61e9fe88d06cd0ad2a27e0277da86?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdb7f702b779bd52453d39f1d08b22218a61e9fe88d06cd0ad2a27e0277da86?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdb7f702b779bd52453d39f1d08b22218a61e9fe88d06cd0ad2a27e0277da86?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdb7f702b779bd52453d39f1d08b22218a61e9fe88d06cd0ad2a27e0277da86?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&",
                  },
                  {
                    name: "Jaya Kasianto",
                    id: "_4",
                    position: "Staff Kelurahan",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/14e98e3f7f4297da716f4a202a2390c77b1f5f6c0a3c0c73914a3eaacd6a0aa3?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e98e3f7f4297da716f4a202a2390c77b1f5f6c0a3c0c73914a3eaacd6a0aa3?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e98e3f7f4297da716f4a202a2390c77b1f5f6c0a3c0c73914a3eaacd6a0aa3?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e98e3f7f4297da716f4a202a2390c77b1f5f6c0a3c0c73914a3eaacd6a0aa3?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e98e3f7f4297da716f4a202a2390c77b1f5f6c0a3c0c73914a3eaacd6a0aa3?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e98e3f7f4297da716f4a202a2390c77b1f5f6c0a3c0c73914a3eaacd6a0aa3?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e98e3f7f4297da716f4a202a2390c77b1f5f6c0a3c0c73914a3eaacd6a0aa3?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e98e3f7f4297da716f4a202a2390c77b1f5f6c0a3c0c73914a3eaacd6a0aa3?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&",
                  },
                  {
                    name: "Natasya Mutia Rizqiana",
                    id: "_5",
                    position: "Staff Kelurahan",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/51b5a52fa1f50761a52bcc8204a625ea26ba3bb925c701367272516b26a75cb6?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b5a52fa1f50761a52bcc8204a625ea26ba3bb925c701367272516b26a75cb6?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b5a52fa1f50761a52bcc8204a625ea26ba3bb925c701367272516b26a75cb6?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b5a52fa1f50761a52bcc8204a625ea26ba3bb925c701367272516b26a75cb6?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b5a52fa1f50761a52bcc8204a625ea26ba3bb925c701367272516b26a75cb6?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b5a52fa1f50761a52bcc8204a625ea26ba3bb925c701367272516b26a75cb6?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b5a52fa1f50761a52bcc8204a625ea26ba3bb925c701367272516b26a75cb6?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b5a52fa1f50761a52bcc8204a625ea26ba3bb925c701367272516b26a75cb6?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&",
                  },
                  {
                    name: "Samsul Hadi",
                    id: "_6",
                    position: "Staff Kelurahan",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/0468976fea1926c291e18cfcced4064be6947044169a25ec0c8e3c975d709b76?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0468976fea1926c291e18cfcced4064be6947044169a25ec0c8e3c975d709b76?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0468976fea1926c291e18cfcced4064be6947044169a25ec0c8e3c975d709b76?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0468976fea1926c291e18cfcced4064be6947044169a25ec0c8e3c975d709b76?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0468976fea1926c291e18cfcced4064be6947044169a25ec0c8e3c975d709b76?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0468976fea1926c291e18cfcced4064be6947044169a25ec0c8e3c975d709b76?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0468976fea1926c291e18cfcced4064be6947044169a25ec0c8e3c975d709b76?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0468976fea1926c291e18cfcced4064be6947044169a25ec0c8e3c975d709b76?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&",
                  },
                  {
                    name: "Abdul Chamid",
                    id: "_7",
                    position: "Staff Kelurahan",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/994623de2096c3ced2adcfb7545344687d4a642e59955574036e0ea6f6aca5dc?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/994623de2096c3ced2adcfb7545344687d4a642e59955574036e0ea6f6aca5dc?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/994623de2096c3ced2adcfb7545344687d4a642e59955574036e0ea6f6aca5dc?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/994623de2096c3ced2adcfb7545344687d4a642e59955574036e0ea6f6aca5dc?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/994623de2096c3ced2adcfb7545344687d4a642e59955574036e0ea6f6aca5dc?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/994623de2096c3ced2adcfb7545344687d4a642e59955574036e0ea6f6aca5dc?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/994623de2096c3ced2adcfb7545344687d4a642e59955574036e0ea6f6aca5dc?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/994623de2096c3ced2adcfb7545344687d4a642e59955574036e0ea6f6aca5dc?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&",
                  },
                  {
                    name: "Praminto",
                    id: "_8",
                    position: "Tenaga Kebersihan",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/e09aed1ffb94af0b412c489998a845de60297d4cdded6192c78f85cd0c4a9146?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e09aed1ffb94af0b412c489998a845de60297d4cdded6192c78f85cd0c4a9146?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e09aed1ffb94af0b412c489998a845de60297d4cdded6192c78f85cd0c4a9146?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e09aed1ffb94af0b412c489998a845de60297d4cdded6192c78f85cd0c4a9146?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e09aed1ffb94af0b412c489998a845de60297d4cdded6192c78f85cd0c4a9146?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e09aed1ffb94af0b412c489998a845de60297d4cdded6192c78f85cd0c4a9146?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e09aed1ffb94af0b412c489998a845de60297d4cdded6192c78f85cd0c4a9146?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e09aed1ffb94af0b412c489998a845de60297d4cdded6192c78f85cd0c4a9146?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&",
                  },
                  {
                    name: "Siti Aisyah",
                    id: "_9",
                    position: "Tenaga Kebersihan",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/ee6b133fe161ea1f3f415d75687665d08528e074dd14c478fdd7c98e352cec3d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee6b133fe161ea1f3f415d75687665d08528e074dd14c478fdd7c98e352cec3d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee6b133fe161ea1f3f415d75687665d08528e074dd14c478fdd7c98e352cec3d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee6b133fe161ea1f3f415d75687665d08528e074dd14c478fdd7c98e352cec3d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee6b133fe161ea1f3f415d75687665d08528e074dd14c478fdd7c98e352cec3d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee6b133fe161ea1f3f415d75687665d08528e074dd14c478fdd7c98e352cec3d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee6b133fe161ea1f3f415d75687665d08528e074dd14c478fdd7c98e352cec3d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee6b133fe161ea1f3f415d75687665d08528e074dd14c478fdd7c98e352cec3d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&",
                  },
                  {
                    name: "Ervan Yudhi Setiawan",
                    id: "_10",
                    position: "Sekertaris kelurahan",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/dce0c33fe029a68befe614b5e1c846af1ce214bcf96216f57204664f0004f982?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce0c33fe029a68befe614b5e1c846af1ce214bcf96216f57204664f0004f982?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce0c33fe029a68befe614b5e1c846af1ce214bcf96216f57204664f0004f982?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce0c33fe029a68befe614b5e1c846af1ce214bcf96216f57204664f0004f982?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce0c33fe029a68befe614b5e1c846af1ce214bcf96216f57204664f0004f982?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce0c33fe029a68befe614b5e1c846af1ce214bcf96216f57204664f0004f982?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce0c33fe029a68befe614b5e1c846af1ce214bcf96216f57204664f0004f982?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce0c33fe029a68befe614b5e1c846af1ce214bcf96216f57204664f0004f982?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&",
                  },
                  {
                    name: "Syahrul Aldi",
                    id: "_11",
                    position: "Pengelola Data",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/ed113afa4c2b0275afd255096fffefd31d55da69137189f7ce14de28b32995e2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed113afa4c2b0275afd255096fffefd31d55da69137189f7ce14de28b32995e2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed113afa4c2b0275afd255096fffefd31d55da69137189f7ce14de28b32995e2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed113afa4c2b0275afd255096fffefd31d55da69137189f7ce14de28b32995e2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed113afa4c2b0275afd255096fffefd31d55da69137189f7ce14de28b32995e2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed113afa4c2b0275afd255096fffefd31d55da69137189f7ce14de28b32995e2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed113afa4c2b0275afd255096fffefd31d55da69137189f7ce14de28b32995e2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed113afa4c2b0275afd255096fffefd31d55da69137189f7ce14de28b32995e2?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&",
                  },
                  {
                    name: "Bambang Tri Evianto",
                    id: "_12",
                    position: "Kasi Pemerintahan, Ketentraman dan Ketertiban",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/6b60da5ee70bf6904404ad6b03242af2c3178d662365f4385e6a6557525e398d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b60da5ee70bf6904404ad6b03242af2c3178d662365f4385e6a6557525e398d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b60da5ee70bf6904404ad6b03242af2c3178d662365f4385e6a6557525e398d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b60da5ee70bf6904404ad6b03242af2c3178d662365f4385e6a6557525e398d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b60da5ee70bf6904404ad6b03242af2c3178d662365f4385e6a6557525e398d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b60da5ee70bf6904404ad6b03242af2c3178d662365f4385e6a6557525e398d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b60da5ee70bf6904404ad6b03242af2c3178d662365f4385e6a6557525e398d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b60da5ee70bf6904404ad6b03242af2c3178d662365f4385e6a6557525e398d?apiKey=3d9f8f0960c24366a54ac0c3ef339b89&",
                  },
                ].map((member, index) => (
                  <div key={index} className="team-member" id={member.id}>
                    <img
                      loading="lazy"
                      src={member.image}
                      className="img"
                      alt={member.name}
                    />
                    <div className="team-member-info">
                      <div className="team-member-name">{member.name}</div>
                      <div className="team-member-position">
                        {member.position}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProfilPage;
