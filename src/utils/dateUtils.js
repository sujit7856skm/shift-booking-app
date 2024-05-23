const monthConstant = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "Sepetember",
  9: "October",
  10: "November",
  11: "December",
};

export const dateUtils = (function () {
  const formatDate = (date) => {
    const newDate = new Date(date);
    const today = new Date();
    return today?.getDate() === newDate?.getDate()
      ? "Today"
      : today?.getDate() + 1 === newDate?.getDate()
      ? "Tomorrow"
      : `${monthConstant[newDate?.getMonth()]} ${newDate?.getDate()}`;
  };
  const formaTime = (date) => {
    const newDate = new Date(date);
    return `${
      newDate?.getHours() < 10 ? `0${newDate?.getHours()}` : newDate?.getHours()
    }:${
      newDate?.getMinutes() < 10
        ? `0${newDate?.getMinutes()}`
        : newDate?.getMinutes()
    }`;
  };
  const sort = (a, b) => {
    const timeA = new Date(a?.startTime);
    const timeB = new Date(b?.startTime);
    if (timeA > timeB) {
      return 1;
    } else if (timeA < timeB) {
      return -1;
    }
    return 0;
  };

  return {
    formatDate,
    formaTime,
    sort,
  };
})();
