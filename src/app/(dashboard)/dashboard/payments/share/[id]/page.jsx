import PaymentLinkSuccess from '@/components/dashboard/paymnetPage/PaymentLinkSuccess';
import React from 'react';

const page = () => {
  return (
    <div>
      <PaymentLinkSuccess   paymentLink="https://example.com/pay/abc123"/>
    </div>
  );
};

export default page;