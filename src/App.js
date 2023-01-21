import css from "./App.css"
import React,{useState,useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Mainpage from "./Mainpage";
import {BrowserRouter as Router, Routes, Route, Link,Navigator, useNavigate} from "react-router-dom";
import Detailpage from "./Detailpage";
function App() {


  const [tagList,setTagList] = useState([])
  const [promotions,setPromotions] = useState([]);
  const [seciliKategori,setSeciliKategori] = useState("");
useEffect(()=>{
fetch(`https://api.extrazone.com/tags/list`,{
    method: "GET",  
  

    headers: {
      "content-type": "application/json",
      "X-Country-Id" :"TR",
      "X-Language-Id" :"TR"
}}).then(response=>response.json()).then(response=>setTagList(response)).catch(err=>console.log(err))
},[])

useEffect(()=>{
  fetch(`https://api.extrazone.com/promotions/list?Channel=pwa`,{
    method: "GET",  
  

    headers: {
      "content-type": "application/json",
      "X-Country-Id" :"TR",
      "X-Language-Id" :"TR"
}}).then(response=>response.json()).then(response=>setPromotions(response)).catch(err=>console.log(err))
},[])
  return (
    <div className="App container  justify-content-center">
      <ul className="nav row"  >
  
   <div className="col-8"><Link to="/"><img src={require('./images/Daha_Daha.png')} alt="" className="nav-link LogoStyle" ></img></Link></div>

  <div className="col-4"><button className='Btn1'><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
  <path  d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
  </svg> Daha Cüzdan</button><button className='Btn2'> Giriş Yap/Kayıt Ol</button><button className='Btn3' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg></button></div>


</ul>
  <Routes>
  <Route  path="" element={<Mainpage Carousel={Carousel}  tagList={tagList} seciliKategori={seciliKategori}  setSeciliKategori={setSeciliKategori} promotions={promotions}></Mainpage>}></Route>
  <Route  path="/campaign/:SeoName/:id" element={<Detailpage></Detailpage>}></Route>
  
</Routes>

    </div>
  );
}

export default App;
