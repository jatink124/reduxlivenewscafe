import React,{useEffect} from 'react'
import PostGridSection from './PostGridSection'
import AOS from 'aos';
import ETC from './ETC';
import CardIcon from './CardIcon';
import CardOne from './CardOne';
function Blog() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  var cardone=1;
  var counticon=0;
  var cardetc=0;
  var grid=0;
  return (
   <>
  
   <div> 
{cardone ?<CardOne/>:""}
{counticon ?<CardIcon/>:""}
{cardetc ?<ETC/>:""}
{grid ?<PostGridSection/>:""}
  

  
  </div>
  </>
  )
}

export default Blog