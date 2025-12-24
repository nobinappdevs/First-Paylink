import EditProduct from '@/components/dashboard/ProductPage/EditProduct';
import React from 'react';

const page = async ({params}) => {
    const {id} = await params
    return (
        <div className="xl:p-8 p-4">
            <EditProduct id={id} />
        </div>
    );
};

export default page;