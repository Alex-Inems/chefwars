// @types/paystack.d.ts

declare global {
    interface Window {
      PaystackPop: any; // or specify the type more strictly if you know it
    }
  }
  
  export {};
  
  interface PaystackResponse {
    status: string;
    reference: string;
    // Add any other fields you expect from the response
  }
  