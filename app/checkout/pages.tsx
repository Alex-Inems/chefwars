// pages/checkout.tsx


import MyPaystackButton from '@/components/PaystackButton';

const CheckoutPage = () => {
  const handleSuccess = (reference: any) => {
    console.log('Payment successful! Reference:', reference);
    // You might want to save this payment reference in your backend for record-keeping
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
