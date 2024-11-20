import React from 'react';
import { PaystackButton } from 'react-paystack';

interface PaystackReference {
  transaction: string; // Transaction reference or ID
  status: string; // Payment status
  message?: string; // Optional: Message about the payment
  reference: string; // Paystack reference
  domain: string; // The domain of the transaction (e.g., 'live' or 'test')
  [key: string]: unknown; // Allow additional properties with unknown type for flexibility
}

interface PaystackButtonProps {
  amount: number; // Amount in kobo
  email: string;
  onSuccess: (reference: PaystackReference) => void;
  onClose: () => void;
}

const MyPaystackButton: React.FC<PaystackButtonProps> = ({ amount, email, onSuccess, onClose }) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!; // Ensure your environment variable is set

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
