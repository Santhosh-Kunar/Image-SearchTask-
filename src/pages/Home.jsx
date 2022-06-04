import React from 'react'
import SidebarProvider from '../apis/SidebarContext';
import SidebarModal from '../components/helper/SidebarModal';
import Listing from '../components/Listing Component/Listing'
import SiedebarMenu from '../components/sidebars/SiedebarMenu';

const Home = () => {
  return (
    <div>
      <SidebarProvider>
        <aside>
          <SidebarModal>
            <SiedebarMenu />
            <Listing />
          </SidebarModal>
        </aside>
      </SidebarProvider>
    </div>
  );
}

export default Home