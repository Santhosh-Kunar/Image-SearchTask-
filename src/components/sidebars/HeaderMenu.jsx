import React, { useContext, useState } from 'react'
import { SidebarContext } from '../../apis/SidebarContext';
import Styles from "./auth.module.css"
const HeaderMenu = () => {
  let {details}=useContext(SidebarContext)
 return (
   <section id={Styles.authBlock} style={{ height: "500px" }}>
     <article style={{ margintop: "20px"}}>
       <img
         style={{
           width: "300px",
           height: "300px",
           borderRadius: "10px",
           float: "left",
           margintop: "20px",
         }}
         src={details.avatar_url}
         alt=""
       />
       <header style={{ padding: "20px" }}>
         <h1> Name:{details.login}</h1>
         <span style={{ float: "left" }}>id:{details.id}</span>
         <p style={{ fontSize: "14px" }}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
           perspiciatis vero libero assumenda eum a, ad eligendi voluptatum,
           quod alias, officia aperiam id possimus porro voluptas. Tenetur
           numquam quia dolorum incidunt?
         </p>
         <span>type:{details.type}</span>
         <span>admin:{details.site_admin}</span>

         {/* <img src="html_url" alt="" /> */}
       </header>
       <p style={{ fontSize: "16px" }}>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non esse
         aperiam laborum reprehenderit repudiandae modi hic, accusamus quis
         ipsum a officia voluptatem, eveniet quidem nobis aspernatur quia
         mollitia facere ducimus vitae nostrum exercitationem odio sit illum.
         Sit laborum eum similique debitis hic. Libero maiores dignissimos
         laborum molestiae velit. Velit, architecto.
       </p>
     </article>
   </section>
 );
}

export default HeaderMenu