function nbYear(p0, percent, aug, p) {
    percent = percent/100;
    let numYear = 0;
    console.log(p0);

    while (p0 < p) {
      p0 = p0 + (p0 * percent) + aug;
      console.log(p0);
      numYear += 1;
    }
    return numYear;
}

nbYear(1500, 5, 100, 5000);
