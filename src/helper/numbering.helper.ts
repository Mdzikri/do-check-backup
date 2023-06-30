export const thousandSeparator = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const thousandFormatter = (value: number) => {
  return Math.abs(value) > 999
    ? Math.sign(value) * (Math.abs(value) / 1000) + "K"
    : Math.sign(value) * Math.abs(value);
};
