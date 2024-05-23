import React, { useMemo } from "react";

export default function useAvailableShift(shifts) {
  const shiftArea = useMemo(() => {
    let newData = shifts ? [...shifts] : [];

    return newData?.reduce((res, shift) => {
      if (res[shift?.area]) {
        res[shift?.area].push(shift);
      } else {
        res[shift?.area] = [shift];
      }
      return res;
    }, {});
  }, [shifts]);
  return {
    shiftArea,
  };
}
