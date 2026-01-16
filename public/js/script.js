const expenseItems = document.querySelectorAll("#expenseList li");

if (expenseItems.length > 0) {

    const categoryTotals = {};

    expenseItems.forEach(item => {
        const category = item.dataset.category;
        const amount = Number(item.dataset.amount);

        categoryTotals[category] = (categoryTotals[category] || 0) + amount;
    });

    const labels = Object.keys(categoryTotals);
    const data = Object.values(categoryTotals);

    const colors = [
        "#ff7675", // Food
        "#74b9ff", // Travel
        "#55efc4", // Shopping
        "#ffeaa7", // Medicines
        "#a29bfe", // Stationery
        "#fab1a0", // Electricity
        "#dfe6e9"  // Other
    ];

    const ctx = document.getElementById("expenseChart");

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation: {
                animateScale: true
            }
        }
    });
}
