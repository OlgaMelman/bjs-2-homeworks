"use strict"

function solveEquation(a, b, c) {
    //let sqrt = a * Math.pow(x, 2) + bx + c;
    let arr = [];
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return arr;
    } else if (D === 0) {
        arr = [-b / (2 * a)];
        return arr;

    } else if (D > 0) {
        arr = [(-b + Math.sqrt(D)) / (2 * a),
            (-b - Math.sqrt(D)) / (2 * a)];
        return arr;
    }


}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

    let percentMonth = percent / 100 / 12;
    let bodyCredit = amount - contribution;
    let monthlyPayment = bodyCredit * (percentMonth + (percentMonth / (Math.pow((1 + percentMonth), countMonths) - 1)));
    let totalSum = monthlyPayment * countMonths;
    totalSum = Number(totalSum.toFixed(2));
    return totalSum;
}

