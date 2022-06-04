import React, { createContext, useState } from 'react'
export let SidebarContext = createContext();
let defaultDetails = {
  login: "mojombo",
  id: 1,
  avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  html_url: "https://github.com/mojombo",
  type: "User",
  site_admin: false,
};
const SidebarProvider = ({ children }) => {
  let [toggle, setToggle] = useState(false);
  let [details,setDetails]=useState(defaultDetails)
  return (
      <SidebarContext.Provider value={{toggle,setToggle,details,setDetails}}>
          {children}
   </SidebarContext.Provider>
  )
}

export default SidebarProvider