import { store } from './store.js';
import { renderLogin, renderTeamSchedule, renderMyInput, renderAdmin, updateHeader } from './ui.js';
import { getBiWeeklyRange } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    const currentUser = store.getCurrentUser();

    // Elements
    const loginView = document.getElementById('login-view');
    const dashboardView = document.getElementById('dashboard-view');

    if (!currentUser) {
        renderLogin();
    } else {
        loginView.classList.add('hidden');
        dashboardView.classList.remove('hidden');
        dashboardView.classList.add('flex');

        updateHeader(currentUser);

        // Initialize Default Period if none
        if (!store.getCurrentPeriod()) {
            // Create a default period starting last Monday for demo
            const today = new Date();
            const day = today.getDay();
            const diff = today.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
            const lastMonday = new Date(today.setDate(diff));
            const { start, end } = getBiWeeklyRange(lastMonday.toISOString());
            store.createPeriod(start, end);
        }

        renderTeamSchedule(); // Default tab
    }

    // Tab Navigation
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // UI Toggle
            document.querySelectorAll('.nav-tab').forEach(b => {
                b.classList.remove('bg-gray-100', 'text-primary', 'border-primary');
                b.classList.add('border-transparent', 'text-gray-500');
            });
            e.target.classList.remove('border-transparent', 'text-gray-500');
            e.target.classList.add('text-primary', 'border-primary');

            // View Toggle
            document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
            const tabId = e.target.getAttribute('data-tab');
            document.getElementById(tabId).classList.remove('hidden');

            // Render content
            if (tabId === 'team-schedule') renderTeamSchedule();
            if (tabId === 'my-input') renderMyInput();
            if (tabId === 'admin-panel') renderAdmin();
        });
    });

    // Logout
    document.getElementById('logout-btn').addEventListener('click', () => {
        // Simple "logout" by clearing current user in memory (conceptually)
        // For this demo store, we might just reload or unset currentUser
        // But store.setCurrentUser saves to localstorage. 
        // Let's add a clear user method or just reload to login
        store.setCurrentUser(null);
        // Force reload to clear any stale DOM states
        window.location.reload();
    });

    // Reset Data
    document.getElementById('reset-data-btn').addEventListener('click', () => {
        if (confirm('Reset all data?')) {
            store.resetData();
        }
    });

    // Export PNG
    document.getElementById('export-btn').addEventListener('click', () => {
        const node = document.getElementById('schedule-container');
        htmlToImage.toPng(node, { pixelRatio: 2, backgroundColor: '#ffffff' })
            .then(function (dataUrl) {
                const link = document.createElement('a');
                link.download = 'team-schedule.png';
                link.href = dataUrl;
                link.click();
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
                alert('Export failed.');
            });
    });

    // Admin: Create Period
    document.getElementById('create-period-btn').addEventListener('click', () => {
        const dateInput = document.getElementById('new-period-start').value;
        if (dateInput) {
            const { start, end } = getBiWeeklyRange(dateInput);
            store.createPeriod(start, end);
            alert(`New period created: ${start} ~ ${end}`);
            store.createPeriod(start, end);
            alert(`New period created: ${start} ~ ${end}`);
            renderTeamSchedule();
            renderAdmin(); // Update admin view status too
        }
    }
    });
});
