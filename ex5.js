const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1];
function findMaxNumber(numbers) {
    return numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
}

console.log(findMaxNumber(numbers));