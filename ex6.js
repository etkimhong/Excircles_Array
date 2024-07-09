const items = [
    { name: "Bread", category: "Grocery" },
    { name: "Butter", category: "Grocery" },
    { name: "Shampoo", category: "Personal Care" }
];
function groupByCategory(item) {
    return item.reduce((acc, item) => {
        const { category, name } = item;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(name);
        return acc;
    }, {});
}
console.log(groupByCategory(items));


