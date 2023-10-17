function getArrayParams(...arr) {
    if (arr.length === 0) return null;

    /*let min = Infinity;
    let max = -Infinity;
    let sum = 0;*/

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce(function (acc, val) {
        return acc + val;
    });
    const avg = sum / arr.length;
    return { min: min, max: max, avg: Number(avg.toFixed(2)) };

}

function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;

    const sum = arr.reduce(function (acc, val) {
        return acc + val;
    });
    return sum;

}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const maxMinusMin = max - min;

    return maxMinusMin;

}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;

    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sumEvenElement += arr[i];
        } else {
            sumOddElement += arr[i];
        }
    }
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;

    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sumEvenElement += arr[i];
            countEvenElement++;
        }
    }
    return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
        const workerResult = func(...arrOfArr[i]);

        if (workerResult > maxWorkerResult) {
            maxWorkerResult = workerResult;
        }
    }
    return maxWorkerResult;
}

