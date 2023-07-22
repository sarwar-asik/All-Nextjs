import React from 'react';
import RootLayout from '../components/layouts/RootLayout';
import DashBoardLayout from '../components/DashboardLayout';


const AdminPage = () => {
    return (
        <div>
           <h2> This is about Admin page</h2> 
        </div>
    );
};

export default AdminPage;


AdminPage.getLayout = function getLayout(page){
    return (
       <RootLayout>
         <DashBoardLayout>
            {page}
        </DashBoardLayout>
       </RootLayout>
    )
}