//payment button page
import React from "react";
import { useTabPayment } from "../Api/Api";

const Tapredirection = () => {
  const { vahaforms, isVahaFormLoading, isVahaFormError } = useTabPayment();

  const handlePayment = async () => {
 

    try {
      const result = await vahaforms();
      console.log("Payment Success:", result);
      console.log(result.transaction.url, "dta");
      // Set local storage token to 0
      localStorage.setItem("paymentToken", "0");

      // Open the URL in a new window
      window.location.href = result.transaction.url;
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };
  return (
    <div>
      <button onClick={handlePayment} disabled={isVahaFormLoading}>
        {isVahaFormLoading ? "Processing..." : "Make Payment"}
      </button>
      {isVahaFormError && <p>Error: {isVahaFormError.message}</p>}
    </div>
  );
};

export default Tapredirection;
