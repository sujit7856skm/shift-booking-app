import React, { useMemo } from "react";
import { dateUtils } from "../utils/dateUtils";

export default function useShiftSections(shifts) {
  const shiftSections = useMemo(() => {
    let newData = shifts ? [...shifts] : [];
    return newData?.reduce((res, shift) => {
      const startDate = new Date(shift?.startTime)?.getDate();
      if (
        res?.length > 0 &&
        new Date(res[res?.length - 1]?.date)?.getDate() === startDate
      ) {
        res[res?.length - 1].data.push(shift);
      } else {
        res.push({
          title: dateUtils.formatDate(shift?.startTime),
          index: res?.length,
          date: shift?.startTime,
          data: [shift],
        });
      }
      return res;
    }, []);
  }, [shifts]);
  return {
    shiftSections,
  };
}
