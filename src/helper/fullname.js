function generateFullName(country) {
  let randName = Math.floor(Math.random() * country.names.length);
  let randMidName = Math.floor(Math.random() * country.middleNames.length);
  let randLastName = Math.floor(Math.random() * country.lastNames.length);
  return [
    country.names[randName],
    country.middleNames[randMidName],
    country.lastNames[randLastName],
  ].join(" ");
}
