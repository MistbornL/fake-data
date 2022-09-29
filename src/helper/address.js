export function generateAddress(country) {
  let randCity = Math.floor(Math.random() * country.cities.length);
  let randStreet = Math.floor(Math.random() * country.streets.length);
  let randHouse = Math.floor(Math.random() * 1000);
  let randApartment = Math.floor(Math.random() * 1000);
  return [
    `${country.cities[randCity]} city`,
    `${country.streets[randStreet]} street`,
    `${randHouse} / ${randApartment}`,
  ].join(", ");
}
