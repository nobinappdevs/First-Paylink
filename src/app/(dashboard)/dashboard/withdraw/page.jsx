import MoneyOut from '@/components/dashboard/moneyOutPage/MoneyOut';
import MoneyOutLog from '@/components/dashboard/moneyOutPage/MoneyOutLog';
import React from 'react';

const page = () => {
    return (
        <div className="xl:p-8 p-4">
            <MoneyOut />
            <MoneyOutLog />
        </div>
    );
};

export default page;