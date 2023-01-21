import {BrowserRouter as Router, Routes, Route, Link,Navigator, useNavigate} from "react-router-dom";

const Mainpage = (props) => {


    return(
        <div ><div class="d-flex flex-nowrap FlexHeader  ">
    {props.tagList?.map(x=>{
      return ( <button onClick={()=>props.setSeciliKategori(x?.Name)} className="row Category" style={props.seciliKategori==x?.Name ? {backgroundColor:"#0081C9"}  : {backgroundColor:"#eceeef"} }><div className="col" ><p style={{fontSize:11,display:"inline-block"}}><img  style={{borderRadius:8,height:18,marginRight:3}} src={x?.IconUrl}></img>{x?.Name}</p></div></button>)
    })}
 

  
  
</div>
<div className="container" style={{marginTop:10}}>
<div className="col-2"></div>
<div className="col-11" style={{height:300,width:300}} ><props.Carousel showStatus={false}  showThumbs={false}>
{props.promotions?.map(x=>{
  return (
    <Link to={`/campaign/${x?.SeoName}/${x?.Id}`} style={{textDecoration:"none"}}><div  style={{height:300,width:300,backgroundColor:"white",borderRadius:10}}>            
                    <img style={{padding:10,borderRadius:20,borderBottomLeftRadius:50}} src={x?.ImageUrl} ></img>
                    <p  style={{opacity:1,position:"relative",color:"black",marginTop:-70,width:300,fontSize:12}}><div dangerouslySetInnerHTML={{ __html: x?.Title }}></div></p>
                    <p  style={{opacity:1,position:"relative",color:"black",marginTop:-10,width:300,fontSize:12}}><div dangerouslySetInnerHTML={{ __html: x?.BrandPromotionCardParticipationText }}></div></p>
                    <img  style={{position:"relative",height:33,width:33,marginLeft:-260,marginTop:-30}} src={x?.BrandIconUrl}></img>
                </div></Link>
  )
})}
              
             
            </props.Carousel></div>



</div></div>
    )
} 
export default Mainpage;