import React, { useState } from 'react'; 
import { AppProvider } from './AppContext'; 
import Sidebar from './Components/TelaInicial/Sidebar';
import Home from './Components/TelaInicial/Home';
import Header from './Components/TelaInicial/Header';

function App2() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <AppProvider>
            <div className='grid-container'>
                <Header OpenSidebar={OpenSidebar} />
                <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                <Home />
            </div>
        </AppProvider>
    );

    
}

export default App2;

