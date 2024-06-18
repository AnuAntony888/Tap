import React, { useEffect, useState } from "react";
import { useRetrieveACharge } from "../Api/Api";

const Tapresult = () => {
  const charge_id = "chg_TS07A5320240655u2L51806191";
  const { data, isLoading, isError, retrieveCharge } =
    useRetrieveACharge(charge_id);

  useEffect(() => {
    retrieveCharge(); // Call the retrieveCharge function on mount
  }, [charge_id, retrieveCharge]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError.message}</div>;
  console.log(data, "data");
  return (
    <div>
      <h1>Charge Details</h1>
      <h2>{data.status}</h2>
    </div>
  );
};

export default Tapresult;
