export function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', weekday: 'short' });
}

export function getDatesInRange(startDateStr, endDateStr) {
    const dates = [];
    let currentDate = new Date(startDateStr);
    const stopDate = new Date(endDateStr);

    while (currentDate <= stopDate) {
        dates.push(currentDate.toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
}

export function getBiWeeklyRange(startDateStr) {
    // Determine 2 weeks from start date
    const start = new Date(startDateStr);
    const end = new Date(start);
    end.setDate(end.getDate() + 13); // 14 days total
    return {
        start: start.toISOString().split('T')[0],
        end: end.toISOString().split('T')[0]
    };
}

// Rules Validation
export function validateRules(user, entries, periodDates) {
    const messages = [];
    const officeCount = entries.filter(e => e.status === 'O').length;

    // Simple Weekly Check logic (This assumes period is exactly 2 weeks starting Mon)
    // We will split periodDates into Week 1 and Week 2
    const week1Dates = periodDates.slice(0, 7);
    const week2Dates = periodDates.slice(7, 14);

    const week1Office = entries.filter(e => e.status === 'O' && week1Dates.includes(e.date)).length;
    const week2Office = entries.filter(e => e.status === 'O' && week2Dates.includes(e.date)).length;

    // Exceptions
    if (user.customRule === 'biweekly-5') {
        if (officeCount < 5) {
            messages.push(`Exception (Jon): Min 5 office days required in 2 weeks (Current: ${officeCount})`);
        }
    } else {
        // Standard Rules
        const min = user.weeklyMin || 3;
        if (week1Office < min) {
            messages.push(`Week 1: Min ${min} office days required (Current: ${week1Office})`);
        }
        if (week2Office < min) {
            messages.push(`Week 2: Min ${min} office days required (Current: ${week2Office})`);
        }
    }

    return messages;
}
