import React from 'react'
import SidebarProvider from "./apis/SidebarContext";
import SidebarModal from "./components/helper/SidebarModal";
import Pagination from "./components/pagenations/Pagenation";
import SiedebarMenu from "./components/sidebars/SiedebarMenu";
import SongCards from "./components/songs/SongCards";
import SongCarousel from "./components/songs/SongCarousel";
import Navbar from "./navbar/Navbar";
import "./App.css"
import Listing from "./components/Listing Component/Listing";
import List from "./apis/List";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Songs from './pages/Songs';
import CustomRoutes from './CustomRoutes';
import Carosule from './pages/Carosule';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SidebarProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/carosule" element={<Carosule />} />
            {/* <aside>
              <SidebarModal>
                <SiedebarMenu />
                <Listing />
              </SidebarModal>
            </aside> */}
          </Routes>
        </SidebarProvider>
        {/* <SongCarousel /> 
       <SongCards /> */}
        {/* <Pagination />   */}
        {/* <Listing/> */}
        {/* <List/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;






























// custom rout
// import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import CustomRoutes from './CustomRoutes'
// import Navbar from './navbar/Navbar'
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <CustomRoutes/>
//     </BrowserRouter>
//   )
// }

// export default App
