export const getLogo = (coinName: string, coinSymbol: string) => {
  const logo = `https://cryptologos.cc/logos/${coinName.toLowerCase()}-${coinSymbol.toLowerCase()}-logo.png`;
  return logo;
};
