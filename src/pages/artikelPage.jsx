import React from "react";
import { Link, useParams } from "react-router-dom";
import '../styles/artikelStyle.css'

const HeaderArtikel = ({ title, iconSrc }) => {
    return (
      <div className="container" id="headArtikel">
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
}

const ArtikelPage = () => {

  const {id}=useParams()

    const articles=[
      {
        "id":1,
        "title":"Mercedes Copy Pasta",
        "coverImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-C0MRKXZlJ3D3TOVJf5959bmex_WpdsMfA&s",
        "content": "No problem! Here's the information about the Mercedes CLR GTR The Mercedes CLR GTR is a remarkable racing car celebrated for its outstanding performance and sleek design. Powered by a potent 6.0-liter V12 engine, it delivers over 600 horsepower. Acceleration from 0 to 100 km/h takes approximately 3.7 seconds, with a remarkable top speed surprising 320 km/h.🥇 Incorporating adventure aerodynamic features and cutting-edge stability technologies, the CLR GTR ensures exceptional stability and control, particularly during high-speed maneuvers. 💨 Originally priced at around $1.5 million, the Mercedes CLR GTR is considered one of the most exclusive and prestigious racing cars ever produced. 💰Its limited production run of just five units adds to its rarity, making it highly sought after by racing enthusiasts and collectors worldwide. 🌎"
      },
      {
        "id":2,
        "title":"Mercedes Copy Pasta",
        "coverImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-C0MRKXZlJ3D3TOVJf5959bmex_WpdsMfA&s",
        "content": "No problem! Here's the information about the Mercedes CLR GTR The Mercedes CLR GTR is a remarkable racing car celebrated for its outstanding performance and sleek design. Powered by a potent 6.0-liter V12 engine, it delivers over 600 horsepower. Acceleration from 0 to 100 km/h takes approximately 3.7 seconds, with a remarkable top speed surprising 320 km/h.🥇 Incorporating adventure aerodynamic features and cutting-edge stability technologies, the CLR GTR ensures exceptional stability and control, particularly during high-speed maneuvers. 💨 Originally priced at around $1.5 million, the Mercedes CLR GTR is considered one of the most exclusive and prestigious racing cars ever produced. 💰Its limited production run of just five units adds to its rarity, making it highly sought after by racing enthusiasts and collectors worldwide. 🌎"
      },
      {
        "id":3,
        "title":"Mercedes Copy Pasta",
        "coverImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-C0MRKXZlJ3D3TOVJf5959bmex_WpdsMfA&s",
        "content": "No problem! Here's the information about the Mercedes CLR GTR The Mercedes CLR GTR is a remarkable racing car celebrated for its outstanding performance and sleek design. Powered by a potent 6.0-liter V12 engine, it delivers over 600 horsepower. Acceleration from 0 to 100 km/h takes approximately 3.7 seconds, with a remarkable top speed surprising 320 km/h.🥇 Incorporating adventure aerodynamic features and cutting-edge stability technologies, the CLR GTR ensures exceptional stability and control, particularly during high-speed maneuvers. 💨 Originally priced at around $1.5 million, the Mercedes CLR GTR is considered one of the most exclusive and prestigious racing cars ever produced. 💰Its limited production run of just five units adds to its rarity, making it highly sought after by racing enthusiasts and collectors worldwide. 🌎"
      },
      {
        "id":4,
        "title":"Mercedes Copy Pasta",
        "coverImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-C0MRKXZlJ3D3TOVJf5959bmex_WpdsMfA&s",
        "content": "No problem! Here's the information about the Mercedes CLR GTR The Mercedes CLR GTR is a remarkable racing car celebrated for its outstanding performance and sleek design. Powered by a potent 6.0-liter V12 engine, it delivers over 600 horsepower. Acceleration from 0 to 100 km/h takes approximately 3.7 seconds, with a remarkable top speed surprising 320 km/h.🥇 Incorporating adventure aerodynamic features and cutting-edge stability technologies, the CLR GTR ensures exceptional stability and control, particularly during high-speed maneuvers. 💨 Originally priced at around $1.5 million, the Mercedes CLR GTR is considered one of the most exclusive and prestigious racing cars ever produced. 💰Its limited production run of just five units adds to its rarity, making it highly sought after by racing enthusiasts and collectors worldwide. 🌎"
      },
      {
        "id":5,
        "title":"Mercedes Copy Pasta",
        "coverImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-C0MRKXZlJ3D3TOVJf5959bmex_WpdsMfA&s",
        "content": "No problem! Here's the information about the Mercedes CLR GTR The Mercedes CLR GTR is a remarkable racing car celebrated for its outstanding performance and sleek design. Powered by a potent 6.0-liter V12 engine, it delivers over 600 horsepower. Acceleration from 0 to 100 km/h takes approximately 3.7 seconds, with a remarkable top speed surprising 320 km/h.🥇 Incorporating adventure aerodynamic features and cutting-edge stability technologies, the CLR GTR ensures exceptional stability and control, particularly during high-speed maneuvers. 💨 Originally priced at around $1.5 million, the Mercedes CLR GTR is considered one of the most exclusive and prestigious racing cars ever produced. 💰Its limited production run of just five units adds to its rarity, making it highly sought after by racing enthusiasts and collectors worldwide. 🌎"
      },
    ]

    let article = articles.filter(article=> article.id == id)
    article = article[0]
    console.log(article)

  return (
    <>      
        <HeaderArtikel 
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1d320f8d89b47010171b3bb9d12cb64d2abb82d649b558d2cd6b02d5d9e50f18?apiKey=236d0a87b9ca46baa5b67a2b5a718b65&"
        title='Artikel Kelurahan Ngaglik'
        />
       <div className="article-container">
            <img 
            className="article-cover"
            src={article.coverImg} />
            <h1 className="article-title">{article.title}</h1>
            <div className="article-text"><p>{article.content}</p></div>
        </div>       
    </>
  );
};
 
export default ArtikelPage;
