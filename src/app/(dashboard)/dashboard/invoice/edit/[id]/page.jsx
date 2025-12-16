import InvoiceEdit from '@/components/dashboard/InvoicePage/invoiceEdit/InvoiceEdit';
import React from 'react';

const page = async ({params}) => {
    const {id}  = await params; 
    return (
        <div>
            <InvoiceEdit />
        </div>
    );
};

export default page;