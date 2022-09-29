export function generatePhone(country) {
  let phone = "";
  let randCode = Math.floor(Math.random() * country.phoneCodes.length);
  phone += country.phoneCodes[randCode];
  for (let i = 0; i < 7; i++) {
    const randInt = Math.floor(Math.random() * 10);
    phone += randInt;
  }
  return phone;
}
