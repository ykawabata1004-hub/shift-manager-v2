import { store } from './store.js';
import { STATUS_TYPES, HOLIDAYS } from './data.js';
import { formatDate, getDatesInRange, validateRules } from './utils.js';

export function renderLogin() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    store.getUsers().forEach(user => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left px-4 py-3 rounded border hover:bg-gray-50 flex justify-between items-center transition-colors";
        btn.innerHTML = `
            <span class="font-medium">${user.name}</span>
            <span class="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600">${user.role}</span>
        `;
        btn.onclick = () => {
            store.setCurrentUser(user.id);
            window.location.reload();
        };
        userList.appendChild(btn);
    });
}

export function updateHeader(user) {
    document.getElementById('user-display').textContent = `Logged in as: ${user.name}`;
    if (user.role === 'manager') {
        document.getElementById('admin-tab-btn').classList.remove('hidden');
    }
}

export function renderTeamSchedule() {
    const container = document.getElementById('schedule-table-wrapper');
    const period = store.getCurrentPeriod();
    if (!period) {
        container.innerHTML = '<div class="text-center p-8 text-gray-500">No active period found. Please create one in Admin panel.</div>';
        return;
    }

    document.getElementById('current-period-display').innerText = `${period.startDate} ~ ${period.endDate}`;

    const dates = getDatesInRange(period.startDate, period.endDate);
    const users = store.getUsers();
    const entries = store.getEntries(period.id);

    // Create Table HTML
    let html = `<table class="min-w-full divide-y divide-gray-200 border-collapse text-sm">`;

    // Header Row
    html += `<thead class="bg-gray-50 sticky top-0 z-10"><tr>
        <th class="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-20 border-r border-gray-200 min-w-[150px]">Member</th>`;

    dates.forEach(date => {
        const d = new Date(date);
        const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
        const isWeekend = d.getDay() === 0 || d.getDay() === 6;
        const headerClass = isWeekend ? 'text-red-500 bg-red-50' : 'text-gray-700';

        // Calculate daily office count
        const officeCount = entries.filter(e => e.date === date && e.status === STATUS_TYPES.OFFICE).length;

        html += `<th class="px-1 py-2 text-center font-medium ${headerClass} min-w-[40px] border-r border-gray-100">
            <div class="text-xs">${dayName}</div>
            <div class="text-xs font-bold">${d.getDate()}</div>
            <div class="mt-1 text-[10px] bg-blue-100 text-blue-800 rounded px-1 w-fit mx-auto" title="Office count">${officeCount}</div>
        </th>`;
    });
    html += `</tr></thead>`;

    // Body
    html += `<tbody class="bg-white divide-y divide-gray-200">`;
    users.forEach(user => {
        html += `<tr>
            <td class="px-3 py-2 whitespace-nowrap font-medium text-gray-900 sticky left-0 bg-white z-10 border-r border-gray-200 shadow-sm">${user.name}</td>`;

        dates.forEach(date => {
            const entry = store.getEntry(user.id, date);
            const status = entry ? entry.status : '';
            const statusClass = status ? `status-${status}` : 'status-Empty';
            const displayStatus = status === 'Off' ? '/' : (status || '-');

            html += `<td class="px-1 py-1 text-center border-r border-gray-100 p-0 h-10 w-10">
                <div class="${statusClass} w-full h-full flex items-center justify-center rounded-sm text-xs font-bold">
                    ${displayStatus}
                </div>
             </td>`;
        });
        html += `</tr>`;
    });
    html += `</tbody></table>`;

    container.innerHTML = html;
}

export function renderMyInput() {
    const period = store.getCurrentPeriod();
    const container = document.getElementById('my-input-grid');
    const infoContainer = document.getElementById('my-input-period-info');
    const validationContainer = document.getElementById('validation-messages');
    container.innerHTML = '';

    if (!period) {
        container.innerHTML = 'No active period.';
        return;
    }

    const isLocked = period.isLocked;
    const currentUser = store.getCurrentUser();

    infoContainer.innerHTML = `
        <span>Period: ${period.startDate} ~ ${period.endDate}</span>
        <span class="${isLocked ? 'text-red-600 font-bold' : 'text-green-600 font-bold'}">
            ${isLocked ? 'LOCKED (Read Only)' : 'OPEN (You can edit)'}
        </span>
    `;

    const dates = getDatesInRange(period.startDate, period.endDate);

    dates.forEach(date => {
        const d = new Date(date);
        const isWeekend = d.getDay() === 0 || d.getDay() === 6;
        const entry = store.getEntry(currentUser.id, date);
        const currentStatus = entry ? entry.status : '';

        const div = document.createElement('div');
        div.className = `p-3 rounded border flex flex-col items-center justify-center gap-2 transition-all ${isWeekend ? 'bg-gray-100 opacity-70' : 'bg-white'}`;

        // Status indicator
        const statusClass = currentStatus ? `status-${currentStatus}` : 'status-Empty';

        div.innerHTML = `
            <div class="text-xs font-bold ${isWeekend ? 'text-red-500' : 'text-gray-700'}">${d.toDateString()}</div>
            <button class="${statusClass} w-10 h-10 rounded shadow-sm font-bold flex items-center justify-center border focus:ring-2 focus:ring-offset-1 focus:ring-blue-500" 
                data-date="${date}"
                ${isLocked ? 'disabled' : ''}>
                ${currentStatus || '-'}
            </button>
        `;

        if (!isLocked) {
            const btn = div.querySelector('button');
            btn.onclick = () => cycleStatus(currentUser.id, date, currentStatus);
        }

        container.appendChild(div);
    });

    // Validation
    const entries = store.getEntries(period.id).filter(e => e.userId === currentUser.id); // In real app, filter properly by period dates
    // For this mock, assume entries array contains all.
    // We need to filter entries relevant to this period
    const relevantEntries = entries.filter(e => dates.includes(e.date));

    const messages = validateRules(currentUser, relevantEntries, dates);
    validationContainer.innerHTML = messages.map(msg =>
        `<div class="p-2 text-sm text-red-700 bg-red-100 rounded border border-red-200 flex items-center gap-2">
            <i data-lucide="alert-circle" class="w-4 h-4"></i> ${msg}
        </div>`
    ).join('');

    lucide.createIcons();
}

function cycleStatus(userId, date, currentStatus) {
    const statuses = [STATUS_TYPES.OFFICE, STATUS_TYPES.HOME, STATUS_TYPES.TRIP, STATUS_TYPES.OFF, STATUS_TYPES.EMPTY];
    // Simple cycle: Empty -> O -> H -> T -> Off -> Empty
    // Or better: O -> H -> T -> Off -> O (skip empty once set?)

    // Let's implement: user clicks to toggle through O, H, T, Off
    const map = {
        '': STATUS_TYPES.OFFICE,
        'O': STATUS_TYPES.HOME,
        'H': STATUS_TYPES.TRIP,
        'T': STATUS_TYPES.OFF,
        'Off': STATUS_TYPES.OFFICE // Cycle back to Office
    };

    const next = map[currentStatus] || STATUS_TYPES.OFFICE;
    store.updateEntry(userId, date, next);
    renderMyInput(); // Re-render to show update and re-validate
}

export function renderAdmin() {
    const period = store.getCurrentPeriod();
    const statusSpan = document.getElementById('admin-period-status');
    const lockBtn = document.getElementById('toggle-lock-btn');
    const memberList = document.getElementById('admin-member-list');

    if (period) {
        statusSpan.textContent = period.isLocked ? 'Locked' : 'Open';
        statusSpan.className = `px-2 py-0.5 rounded text-xs font-bold ${period.isLocked ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`;

        lockBtn.textContent = period.isLocked ? 'Unlock Period' : 'Lock Period';
        lockBtn.onclick = () => {
            store.setPeriodLock(period.id, !period.isLocked);
            renderAdmin();
        };
    } else {
        statusSpan.textContent = 'No Period';
        lockBtn.disabled = true;
    }

    // Member List
    memberList.innerHTML = '';
    store.getUsers().forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="p-2 border-b">${user.name}</td>
            <td class="p-2 border-b">${user.role}</td>
            <td class="p-2 border-b text-xs text-gray-500">${user.type} (Min ${user.weeklyMin}/week)</td>
        `;
        memberList.appendChild(row);
    });
}
