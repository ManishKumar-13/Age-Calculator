
document.getElementById('calculate').addEventListener('click', function() {
    var birthdate = new Date(document.getElementById('birthdate').value);
    var today = new Date();

    if (birthdate > today) {
        alert("Not born yet!");
        return;
    }

    var ageInYears = today.getFullYear() - birthdate.getFullYear();
    var monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        ageInYears--;
        monthDiff += 12;
    }

    var ageInMonths = monthDiff;
    var ageInDays = today.getDate() - birthdate.getDate();

    if (ageInDays < 0) {
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        ageInMonths--;
        ageInDays += lastMonth.getDate();
    }

    document.getElementById('years').querySelector('p:first-child').textContent = ageInYears;
    document.getElementById('months').querySelector('p:first-child').textContent = ageInMonths;
    document.getElementById('days').querySelector('p:first-child').textContent = ageInDays;
});
