//call charge api throught server


import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";


export const API = "https://admin.myfamilyfitness.com/api/v1";

export function useTabPayment() {
  const formData = new FormData();
  const token = localStorage.getItem("paymentToken");

  const tapBody = {
    amount: 1,
    currency: "KWD",
    customer_initiated: true,
    threeDSecure: true,
    save_card: false,
    description: "Test Description",
    metadata: { udf1: "Metadata 1" },
    reference: { transaction: "txn_01", order: "ord_03" },
    receipt: { email: true, sms: true },
    customer: {
      first_name: "test",
      middle_name: "test",
      last_name: "test",
      email: "test@test.com",
      phone: { country_code: 965, number: 51234567 }
    },
    merchant: { id: "1234" },
    source: { id: token ? token :0 },
    post: { url: "https://ippolkittum.com/" },
    redirect: { url: "https://ippolkittum.com/redirect" }
  };
  formData.append('tap_body', JSON.stringify(tapBody));
  const TabPayment = async () => {
    try {
      const res = await axios.post(`
        ${API}/tab-charge`
        , formData, {
    
      });
      // console.log(res.data.data.transaction.url
      //   ,"dta")
      return res.data.data
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const {
    mutateAsync: vahaforms,
    isLoading: isVahaFormLoading,
    error: isVahaFormError,
  } = useMutation(TabPayment);

  return { vahaforms, isVahaFormLoading, isVahaFormError };
}





export const useRetrieveACharge = (charge_id) => {
  const retrieveCharge = async () => {
    try {
      const res = await axios.post(`${API}/tab-charge-get`, { charge_id });
      return res.data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const { mutateAsync: retrieveChargeMutate, data, isLoading, isError } = useMutation(retrieveCharge);

  return { data, isLoading, isError, retrieveCharge: retrieveChargeMutate };
};

