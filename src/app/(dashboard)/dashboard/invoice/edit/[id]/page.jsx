import React from 'react';

const page = async ({params}) => {
    const {id}  = await params; 
    console.log(id);
    return (
        <div>
            this is edit {id} page
        </div>
    );
};

export default page;