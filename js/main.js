// main.js

// Example of Chart.js for department distribution
document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('departmentChart').getContext('2d');
    var departmentChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['HR', 'Engineering', 'Marketing', 'Sales'],
            datasets: [{
                label: 'Department Distribution',
                data: [12, 30, 20, 10],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
});
