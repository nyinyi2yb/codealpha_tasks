function calculateAge() {
    const dateInput = document.getElementById('date');
    const birthDateValue = dateInput.value;

    if (!birthDateValue) {
        document.getElementById('result').innerHTML = "Please enter a birth date.";
        return;
    }

    const birthDate = new Date(birthDateValue);
    const currentDate = new Date();

    const birthDay = birthDate.getDate();
    const birthMonth = birthDate.getMonth() + 1;
    const birthYear = birthDate.getFullYear();

    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;

    if (ageMonths < 0) {
        ageMonths += 12;
        ageYears--;
    }

    if (ageDays < 0) {
        const previousMonthLastDay = new Date(currentYear, currentMonth - 1, 0).getDate();
        ageDays += previousMonthLastDay;
        ageMonths--;
    }

    document.getElementById('result').innerHTML = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}