import React from "react";
import { Link } from "react-router-dom";
import "../styles/beritaStyle.css";
import DateLogo from "../assets/dateLogo.png"

const Headerberita = ({ title, iconSrc }) => {
    return(
        <div className="container" id="headBerita">
            <div class="home"><Link to={'/'}><img src={iconSrc} alt="to-home"/></Link></div>
            <div class="slash"><h4>/</h4></div>
            <h4><b>{title}</b></h4>
        </div>

    )
}
const SideBerita = ({ text, thumbnail }) => {
    return(
        <div className="beritaTerkini">
            <div class="container" id="sideBerita">
                <Link to={'/berita'}>
                    <img src={thumbnail} alt="berita" />
                </Link>
                <Link to={'/berita'}>
                    <p>{text} <br />
                        <div className="date">
                                <img src={DateLogo} alt="..." id="logo_date"/>
                                <p>Mar 18, 2024</p>
                        </div>
                    </p>
                </Link>
            </div>
            <div class="separator"></div>
        </div>
        
    )
}
const BeritaPage = () => {

    const articles =[
        {
            id: 1,
            text: "Teks akan seperti ini.",
            imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-C0MRKXZlJ3D3TOVJf5959bmex_WpdsMfA&s"
        },    
        {
            id: 2,
            text: "Teks akan seperti itu.",
            imgsrc: "https://s3-alpha.figma.com/hub/file/716359964/3b5d23d8-502a-454d-a590-6b8add2f367f-cover.png"
        },    
        {
            id: 3,
            text: "Teks akan seperti gono.",
            imgsrc: "https://s3-alpha.figma.com/hub/file/716359964/3b5d23d8-502a-454d-a590-6b8add2f367f-cover.png"
        },    
        {
            id: 4,
            text: "Teks akan seperti gini.",
            imgsrc: "https://s3-alpha.figma.com/hub/file/716359964/3b5d23d8-502a-454d-a590-6b8add2f367f-cover.png"
        },    
        {
            id: 5,
            text: "Teks akan seperti inilah itulah.",
            imgsrc: "https://s3-alpha.figma.com/hub/file/716359964/3b5d23d8-502a-454d-a590-6b8add2f367f-cover.png"
        },    
    ]
    return(
        <>
            
            <Headerberita iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1d320f8d89b47010171b3bb9d12cb64d2abb82d649b558d2cd6b02d5d9e50f18?apiKey=236d0a87b9ca46baa5b67a2b5a718b65&" 
            title="Berita Kelurahan Ngaglik">
            </Headerberita>
            <div className="container" id="NewsMain">
                <div className="NewsList">

                   {articles.map((article)=>

                   <Link to={`/berita/artikel/${article.id}`} key={article.id}> 
                   <div className="container" id="news">
                   <div className="newscontent">
                     <img src={article.imgsrc} />
                     <p>
                       <b>
                         <p>{article.text}</p>                         
                       </b>
                     </p>
                   </div>
                 </div>
                 </Link>

                )}

                </div>               
            </div>
            
        </>
    )
}

export default BeritaPage