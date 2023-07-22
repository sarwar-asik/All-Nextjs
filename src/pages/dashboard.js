import React from 'react';
import DashBoardLayout from '../components/DashboardLayout';


const DashBoard = () => {
    return (
        <div>
            <h1> DashBoard Home</h1>
        </div>
    );
};

export default DashBoard


DashBoard.getLayout = function getLayout(page){
    return (
        <DashBoardLayout>
            {page}
        </DashBoardLayout>
    )
}