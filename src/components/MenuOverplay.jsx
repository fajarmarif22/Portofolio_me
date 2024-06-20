import React from "react";
import Navlink from "./Navlink";


function MenuOverplay({links}) {
  return <ul className="flex flex-col py-4 items-center">
    {links.map((link,index)=>(
        <li key={index}>
          <Navlink href={link.path} title={link.title}/>
        </li>
    ))
    }
  </ul>;
}

export default MenuOverplay;
