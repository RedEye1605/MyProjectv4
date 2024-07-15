import React from "react";
import "../styles/homeStyle.css";
import { Link } from "react-router-dom";

// function ImgCarousel() {
//   return (
//     <div class="carousel-item active">
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbc7NAkqoH1Z-NAcTOlx3qF1Xp-8mU8CXVg&s"
//         class="d-block w-100"
//         alt="kantor kelurahan Ngaglik"
//       />
//     </div>
//   );
// }

const HomePage = () => {
  const carousels = [
    {
      id: 1,
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbc7NAkqoH1Z-NAcTOlx3qF1Xp-8mU8CXVg&s",
    },
    {
      id: 2,
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbc7NAkqoH1Z-NAcTOlx3qF1Xp-8mU8CXVg&s",
    },
    {
      id: 3,
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbc7NAkqoH1Z-NAcTOlx3qF1Xp-8mU8CXVg&s",
    },
    {
      id: 4,
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbc7NAkqoH1Z-NAcTOlx3qF1Xp-8mU8CXVg&s",
    },
  ];
  const about = [
    {
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNccyl3VZ_rJzAw-DB0FW9fsMyoKTs1Il0WQ&s",
      desc: "Kelurahan Ngaglik adalah Kelurahan di Kecamatan Batu, Kota Batu, Jawa Timur. Ada banyak wisata budaya dan kuliner disini.",
    },
  ];

  const wisatas = [
    {
      id: 1,
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNccyl3VZ_rJzAw-DB0FW9fsMyoKTs1Il0WQ&s",
      desc: "Kelurahan Ngaglik memiliki banyak wisata yang bisa dikunjungi oleh penduduk lokal maupun turis lokal bahkan mancaneagara.",
    },
    {
      id: 2,
      imgsrc:
        "data:image/png;base64,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",
      desc: "Kelurahan Ngaglik memiliki banyak wisata yang bisa dikunjungi oleh penduduk lokal maupun turis lokal bahkan mancaneagara.",
    },
  ];

  return (
    <>
      <div className="HomeContent">
        <div class="hero_image">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              {carousels.map((carousel) => (
                <div class="carousel-item active">
                  <img
                    src={carousel.imgsrc}
                    class="d-block w-100"
                    alt="kantor kelurahan Ngaglik"
                  />
                </div>
              ))}
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {about.map((about) => (
          <div class="container" id="tentang_kelurahan">
            <a href="#">
              <h4>
                <b>Tentang Kelurahan</b>
                <div class="polygon"></div>
              </h4>
            </a>
            <div class="separator-home"></div>
            <div class="deskripsi">
              <img src={about.imgsrc} alt="kantor kelurahan Ngaglik" />
              <p>{about.desc} </p>
            </div>
          </div>
        ))}

        <div className="container" id="berita">
          <h4 id="judul">
            <b>
              <Link to={"/berita"}>
                Berita Terkini <div class="polygon"></div>
              </Link>
            </b>
          </h4>
          <div class="separator-home" id="separator-berita"></div>
          <div class="card_news">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNccyl3VZ_rJzAw-DB0FW9fsMyoKTs1Il0WQ&s"
                alt="berita"
                class="card-img-top"
              />
              <p class="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNccyl3VZ_rJzAw-DB0FW9fsMyoKTs1Il0WQ&s"
                alt="berita"
                class="card-img-top"
              />
              <p class="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNccyl3VZ_rJzAw-DB0FW9fsMyoKTs1Il0WQ&s"
                alt="berita"
                class="card-img-top"
              />
              <p class="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNccyl3VZ_rJzAw-DB0FW9fsMyoKTs1Il0WQ&s"
                alt="berita"
                class="card-img-top"
              />
              <p class="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div id="wisata">
          <div className="container" id="wisata_kelurahan">
            <h4 id="wisata_title">
              <b>
                <Link to={"/wisata"}>
                  Wisata<div class="polygon"></div>
                </Link>
              </b>
            </h4>
            <div class="separator-home"></div>
            {wisatas.map((wisata) => (
              <div class="wisata">
                <img src={wisata.imgsrc} alt="..." />
                <p>{wisata.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
