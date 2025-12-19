
import EditPayment from '@/components/dashboard/paymnetPage/editPage/EditPayment';
import React from 'react';

const page = async ({params}) => {
    const {id}   = await params;
    return (
        <div  className="xl:p-8 p-4 pb-0!" >  
            <EditPayment />    
        </div>
    );
};

export default page;