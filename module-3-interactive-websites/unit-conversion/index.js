function changeUnits() {
  let initialUnit = document.getElementById("initial").value;
  let feetUnit = (initialUnit * 3.28084).toFixed(3);
  let meterUnit = (initialUnit / 3.28084).toFixed(3);
  let litreUnit = (initialUnit / 0.264172).toFixed(3);
  let gallonUnit = (initialUnit * 0.264172).toFixed(3);
  let kilogramUnit = (initialUnit / 2.2046).toFixed(3);
  let poundUnit = (initialUnit * 2.2046).toFixed(3);

  document.getElementById("length").textContent =
    initialUnit +
    " meters = " +
    feetUnit +
    " feet | " +
    initialUnit +
    " feet = " +
    meterUnit +
    " meters";
  document.getElementById("volume").textContent =
    initialUnit +
    " litres = " +
    gallonUnit +
    " gallons | " +
    initialUnit +
    " gallons = " +
    litreUnit +
    " litress";
  document.getElementById("mass").textContent =
    initialUnit +
    " kilos = " +
    poundUnit +
    " pounds | " +
    initialUnit +
    " pounds = " +
    kilogramUnit +
    " kilos";
}
