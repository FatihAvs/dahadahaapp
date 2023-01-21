import { useEffect,useState } from "react";
import { useParams,useLocation,useHref } from "react-router-dom";


const Detailpage  = () =>{


    let {id} = useParams();
    const [promotion,setPromotion] = useState("");
    const [loading,setLoading] = useState(false);
    const [katildi,setKatildi] = useState(false);
    useEffect(()=>{
        setLoading(true);
        fetch(`https://api.extrazone.com/promotions?Id=${id}`,{
    method: "GET",  
  

    headers: {
      "content-type": "application/json",
      "X-Country-Id" :"TR",
      "X-Language-Id" :"TR"
}}).then(response=>response.json()).then(response=>{setPromotion(response);console.log(response);setLoading(false);} ).catch(err=>{setLoading(false);console.log(err)})
    },{})
    return (


<div className="container">
{loading==true ? <div class="spinner-border" role="status">
  <span class="sr-only"></span>
</div> : <span><div className="row">
<div className="col">

<img src={promotion?.ImageUrl} style={{width:380,borderRadius:20,borderBottomLeftRadius:60}}></img>
<img src={promotion?.BrandIconUrl} style={{width:50,marginLeft:-360,marginTop:250}}></img>
</div>
<div  className="col">

<div  dangerouslySetInnerHTML={{__html: promotion?.Description}}></div>
</div>


</div>{katildi==true ? <button disabled={true}  className="col-md-auto" style={{position:"fixed",bottom:10,left:"5%",right:"5%",backgroundColor:"#86C8BC",color:"white",borderRadius:30,borderWidth:0,padding:10}}>Katıldınız</button> : <button onClick={()=>setKatildi(true)}  className="col-md-auto" style={{position:"fixed",bottom:10,left:"5%",right:"5%",backgroundColor:"#F40000",color:"white",borderRadius:30,borderWidth:0,padding:10}}>Hemen Katıl</button>}</span>  }
</div>

    )
}
export default Detailpage;