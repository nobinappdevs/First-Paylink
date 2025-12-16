import Conversation from '@/components/dashboard/helpCenter/Conversation';
import React from 'react';

const page = async ({params }) => {
    const {id} = await params
    return (
        <div className="xl:p-8 p-4">
            <Conversation />
        </div>
    );
};

export default page;