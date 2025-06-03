function calculateDaysLeft() {
    const startDate = new Date('2025-08-07');
    const endDate = new Date('2026-05-30');
    const today = new Date();
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    if (todayMidnight > endDate) {
        return "Tänään Jäljellä: 0 (Koulu loppui!)";
    } else if (todayMidnight < startDate) {
        return "Tänään Jäljellä: Koulu ei ole vielä alkanut!";
    } else {
        const daysLeft = Math.ceil((endDate - todayMidnight) / (1000 * 60 * 60 * 24));
        return `Tänään Jäljellä: ${daysLeft}`;
    }
}

window.onload = function() {
    document.getElementById('days-left').textContent = calculateDaysLeft();
};
