import MyPaystackButton from '@/components/PaystackButton';

interface PaystackReference {
  transaction: string; // Transaction ID or reference string
  status: string; // Payment status, e.g., 'success'
  reference: string; // Paystack-provided reference
  message?: string; // Optional: Any accompanying message
  domain?: string; // Optional: Transaction domain (e.g., 'test' or 'live')
  [key: string]: unknown; // Allows additional properties with safer typing
}

const CheckoutPage = () => {
  const handleSuccess = (reference: PaystackReference) => {
    console.log('Payment successful! Reference:', reference);
    // Save the payment reference in your backend
  };

  const handleClose = () => {
    console.log('Transaction closed');
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p>Amount: ₦1000</p>
      <MyPaystackButton 
        amount={100000} // 1000 NGN in kobo
        email="customer@example.com"
        onSuccess={handleSuccess}
        onClose={handleClose}
      />
    </div>
  );
};

export default CheckoutPage;
