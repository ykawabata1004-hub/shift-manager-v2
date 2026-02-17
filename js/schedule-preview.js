// Schedule Preview Modal Function
function showSchedulePreview(user, period) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.id = 'schedule-preview-modal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';

    const periodDates = getDatesInRange(period.startDate, period.endDate);
    const userEntries = periodDates.map(date => {
        const entry = store.getEntry(user.id, date);
        return {
            date,
            status: entry ? entry.status : ''
        };
    });

    // Count statistics
    const officeDays = userEntries.filter(e => e.status === 'O').length;
    const homeDays = userEntries.filter(e => e.status === 'H').length;
    const tripDays = userEntries.filter(e => e.status === 'T').length;
    const offDays = userEntries.filter(e => e.status === 'Off').length;

    // Validation
    const validationMessages = validateRules(user, userEntries, periodDates);

    // Build schedule grid
    let scheduleHtml = '<div class="grid grid-cols-7 gap-2 mb-4">';
    userEntries.forEach(({ date, status }) => {
        const d = new Date(date);
        const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
        const isWeekend = d.getDay() === 0 || d.getDay() === 6 || UK_BANK_HOLIDAYS.includes(date);
        const statusClass = status ? `status-${status}` : 'status-Empty';
        const displayStatus = status === 'Off' ? '/' : (status || '-');

        scheduleHtml += `
            <div class="text-center p-2 border rounded ${isWeekend ? 'bg-red-50' : 'bg-white'}">
                <div class="text-xs text-gray-500">${dayName}</div>
                <div class="text-sm font-bold">${d.getDate()}</div>
                <div class="${statusClass} mt-1 px-2 py-1 rounded text-xs font-bold">${displayStatus}</div>
            </div>
        `;
    });
    scheduleHtml += '</div>';

    modal.innerHTML = `
        <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div class="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <h2 class="text-xl font-bold">📅 ${user.name}'s Schedule Preview</h2>
                <button id="close-modal" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
            </div>
            <div class="p-6">
                <div class="mb-4 p-3 bg-blue-50 rounded">
                    <div class="text-sm font-bold mb-1">Period: ${period.startDate} ~ ${period.endDate}</div>
                    <div class="text-xs text-gray-600">Type: ${user.type} | Rule: ${user.customRule || 'Min ' + user.weeklyMin + ' office days/week'}</div>
                </div>

                <div class="mb-4 grid grid-cols-4 gap-2 text-center">
                    <div class="p-2 bg-blue-100 rounded">
                        <div class="text-xs text-gray-600">Office</div>
                        <div class="text-lg font-bold text-blue-700">${officeDays}</div>
                    </div>
                    <div class="p-2 bg-green-100 rounded">
                        <div class="text-xs text-gray-600">Home</div>
                        <div class="text-lg font-bold text-green-700">${homeDays}</div>
                    </div>
                    <div class="p-2 bg-purple-100 rounded">
                        <div class="text-xs text-gray-600">Trip</div>
                        <div class="text-lg font-bold text-purple-700">${tripDays}</div>
                    </div>
                    <div class="p-2 bg-gray-100 rounded">
                        <div class="text-xs text-gray-600">Off</div>
                        <div class="text-lg font-bold text-gray-700">${offDays}</div>
                    </div>
                </div>

                ${validationMessages.length > 0 ? `
                    <div class="mb-4 p-3 bg-red-50 border border-red-200 rounded">
                        <div class="text-sm font-bold text-red-700 mb-1">⚠️ Validation Issues:</div>
                        ${validationMessages.map(msg => `<div class="text-xs text-red-600">• ${msg}</div>`).join('')}
                    </div>
                ` : `
                    <div class="mb-4 p-3 bg-green-50 border border-green-200 rounded">
                        <div class="text-sm font-bold text-green-700">✅ All rules satisfied</div>
                    </div>
                `}

                <h3 class="text-sm font-bold mb-2">Schedule Details:</h3>
                ${scheduleHtml}

                <div class="flex gap-2 justify-end mt-4">
                    <button id="approve-from-modal" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Approve</button>
                    <button id="deny-from-modal" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Deny</button>
                    <button id="close-modal-btn" class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Close</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Event listeners
    document.getElementById('close-modal').onclick = () => modal.remove();
    document.getElementById('close-modal-btn').onclick = () => modal.remove();
    document.getElementById('approve-from-modal').onclick = () => {
        store.updateApprovalStatus(period.id, user.id, 'approved');
        modal.remove();
        renderAdmin(period.id);
    };
    document.getElementById('deny-from-modal').onclick = () => {
        if (confirm('Deny this schedule? The user will be able to edit and resubmit.')) {
            store.updateApprovalStatus(period.id, user.id, 'denied');
            modal.remove();
            renderAdmin(period.id);
        }
    };

    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}
