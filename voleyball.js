function voleyball(year, p, h) {
  p = Number(p);
  h = Number(h);
  let weekendsInSofia = 48 - h;
  let gamesInSofia = weekendsInSofia * 0.75;
  let holidays = p * (2 / 3);
  calc = gamesInSofia + holidays + h;
  if (year === "leap") {
    let visokosna = calc + calc * 0.15;
    console.log(Math.floor(visokosna));
  } else if (year === "normal") {
    console.log(Math.floor(calc));
  }
}

voleyball("normal", 3, 2);
voleyball("leap", 2, 3);
voleyball("normal", 11, 6);
voleyball("leap", 0, 1);
voleyball("normal", 6, 13);
