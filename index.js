// Code your solution in this file!

function distanceFromHqInBlocks (start) {
    const distance = Math.abs(42 - start);
    return distance;
}

function distanceFromHqInFeet (start) {
    const feet = distanceFromHqInBlocks (start) * 264;
    return feet;
}

function distanceTravelledInFeet (start, destination) {
    const distance = Math.abs(start - destination);
    const feet = distance * 264;
    return feet;
}

function calculatesFarePrice (start, destination) {
    const feet = distanceTravelledInFeet (start, destination);
    let price;
    if (feet<400) {
        price = 0;}                                             
    else if (feet >400 && feet < 2000) {
        price = (feet - 400) * .02;}
    else if (feet > 2000 && feet < 2500) {
        price = 25}
    else if (feet > 2500) {
        price = "cannot travel that far"
    }
    return price;
}