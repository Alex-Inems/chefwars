// components/PaystackButton.tsx

import React from 'react';
import { PaystackButton } from 'react-paystack';

interface PaystackButtonProps {
  amount: number; // Amount in kobo
  email: string;
  onSuccess: (reference: any) => void;
  onClose: () => void;
}

const MyPaystackButton: React.FC<PaystackButtonProps> = ({ amount, email, onSuccess, onClose }) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!; // Test public key

  const componentProps = {
    email,
    amount,
    publicKey,
    text: 'Pay Now',
    onSuccess,
    onClose,
  };

  return (
    <div>
      <PaystackButton {...componentProps} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" />
    </div>
  );
};

export default MyPaystackButton;
