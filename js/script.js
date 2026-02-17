// --- DATA ---
const INITIAL_USERS = [
    { id: 'u_kawabata', name: 'Kawabata', role: 'manager', type: 'Expat', weeklyMin: 5 },
    { id: 'u_jon', name: 'Jon', role: 'member', type: 'Exception', weeklyMin: 0, customRule: 'biweekly-5' },
    { id: 'u_karin', name: 'Karin', role: 'member', type: 'NS', weeklyMin: 3 },
    { id: 'u_matsumori', name: 'Matsumori', role: 'member', type: 'Expat', weeklyMin: 5 },
    { id: 'u_maho', name: 'Maho', role: 'member', type: 'NS', weeklyMin: 3 },
    { id: 'u_nomoto', name: 'Nomoto', role: 'member', type: 'Contractor', weeklyMin: 3 },
    { id: 'u_park', name: 'Park', role: 'member', type: 'Expat', weeklyMin: 5 },
    { id: 'u_phi', name: 'Phi', role: 'member', type: 'Contractor', weeklyMin: 3 },
    { id: 'u_rahidul', name: 'Rahidul', role: 'member', type: 'Contractor', weeklyMin: 3 },
    { id: 'u_reika', name: 'Reika', role: 'member', type: 'Expat', weeklyMin: 5 },
    { id: 'u_sumitra', name: 'Sumitra', role: 'member', type: 'Expat', weeklyMin: 5 },
    { id: 'u_yamamoto', name: 'Yamamoto', role: 'member', type: 'Expat', weeklyMin: 5 },
];

const SEED_DATA = {
    periods: [
        { id: 'p_feb9', startDate: '2026-02-09', endDate: '2026-02-22', isLocked: false, createdAt: new Date().toISOString() },
        { id: 'p_feb23', startDate: '2026-02-23', endDate: '2026-03-08', isLocked: false, createdAt: new Date().toISOString() }
    ],
    currentPeriodId: 'p_feb9',
    entries: [
        // Jon (Week 1: O, O, H, O, H; Week 2: H, O, H, O, O)
        { userId: 'u_jon', date: '2026-02-09', status: 'O' }, { userId: 'u_jon', date: '2026-02-10', status: 'O' }, { userId: 'u_jon', date: '2026-02-11', status: 'H' }, { userId: 'u_jon', date: '2026-02-12', status: 'O' }, { userId: 'u_jon', date: '2026-02-13', status: 'H' },
        { userId: 'u_jon', date: '2026-02-16', status: 'H' }, { userId: 'u_jon', date: '2026-02-17', status: 'O' }, { userId: 'u_jon', date: '2026-02-18', status: 'H' }, { userId: 'u_jon', date: '2026-02-19', status: 'O' }, { userId: 'u_jon', date: '2026-02-20', status: 'O' },

        // Karin (Week 1: H, H, O, O, O; Week 2: H, H, O, O, Off)
        { userId: 'u_karin', date: '2026-02-09', status: 'H' }, { userId: 'u_karin', date: '2026-02-10', status: 'H' }, { userId: 'u_karin', date: '2026-02-11', status: 'O' }, { userId: 'u_karin', date: '2026-02-12', status: 'O' }, { userId: 'u_karin', date: '2026-02-13', status: 'O' },
        { userId: 'u_karin', date: '2026-02-16', status: 'H' }, { userId: 'u_karin', date: '2026-02-17', status: 'H' }, { userId: 'u_karin', date: '2026-02-18', status: 'O' }, { userId: 'u_karin', date: '2026-02-19', status: 'O' }, { userId: 'u_karin', date: '2026-02-20', status: 'Off' },

        // Matsumori (Week 1: O, O, H, O, H; Week 2: O, O, H, O, H)
        { userId: 'u_matsumori', date: '2026-02-09', status: 'O' }, { userId: 'u_matsumori', date: '2026-02-10', status: 'O' }, { userId: 'u_matsumori', date: '2026-02-11', status: 'H' }, { userId: 'u_matsumori', date: '2026-02-12', status: 'O' }, { userId: 'u_matsumori', date: '2026-02-13', status: 'H' },
        { userId: 'u_matsumori', date: '2026-02-16', status: 'O' }, { userId: 'u_matsumori', date: '2026-02-17', status: 'O' }, { userId: 'u_matsumori', date: '2026-02-18', status: 'H' }, { userId: 'u_matsumori', date: '2026-02-19', status: 'O' }, { userId: 'u_matsumori', date: '2026-02-20', status: 'H' },

        // Maho (Week 1: Off, O, O, H, H; Week 2: O, O, H, O, H)
        { userId: 'u_maho', date: '2026-02-09', status: 'Off' }, { userId: 'u_maho', date: '2026-02-10', status: 'O' }, { userId: 'u_maho', date: '2026-02-11', status: 'O' }, { userId: 'u_maho', date: '2026-02-12', status: 'H' }, { userId: 'u_maho', date: '2026-02-13', status: 'H' },
        { userId: 'u_maho', date: '2026-02-16', status: 'O' }, { userId: 'u_maho', date: '2026-02-17', status: 'O' }, { userId: 'u_maho', date: '2026-02-18', status: 'H' }, { userId: 'u_maho', date: '2026-02-19', status: 'O' }, { userId: 'u_maho', date: '2026-02-20', status: 'H' },

        // Nomoto (Week 1: H, H, O, O, Off; Week 2: H, H, O, O, O)
        { userId: 'u_nomoto', date: '2026-02-09', status: 'H' }, { userId: 'u_nomoto', date: '2026-02-10', status: 'H' }, { userId: 'u_nomoto', date: '2026-02-11', status: 'O' }, { userId: 'u_nomoto', date: '2026-02-12', status: 'O' }, { userId: 'u_nomoto', date: '2026-02-13', status: 'Off' },
        { userId: 'u_nomoto', date: '2026-02-16', status: 'H' }, { userId: 'u_nomoto', date: '2026-02-17', status: 'H' }, { userId: 'u_nomoto', date: '2026-02-18', status: 'O' }, { userId: 'u_nomoto', date: '2026-02-19', status: 'O' }, { userId: 'u_nomoto', date: '2026-02-20', status: 'O' },

        // Park (Week 1: H, O, O, H, O; Week 2: H, O, O, H, O)
        { userId: 'u_park', date: '2026-02-09', status: 'H' }, { userId: 'u_park', date: '2026-02-10', status: 'O' }, { userId: 'u_park', date: '2026-02-11', status: 'O' }, { userId: 'u_park', date: '2026-02-12', status: 'H' }, { userId: 'u_park', date: '2026-02-13', status: 'O' },
        { userId: 'u_park', date: '2026-02-16', status: 'H' }, { userId: 'u_park', date: '2026-02-17', status: 'O' }, { userId: 'u_park', date: '2026-02-18', status: 'O' }, { userId: 'u_park', date: '2026-02-19', status: 'H' }, { userId: 'u_park', date: '2026-02-20', status: 'O' },

        // Phi (Week 1: T, T, T, T, T; Week 2: H, H, O, H, H)
        { userId: 'u_phi', date: '2026-02-09', status: 'T' }, { userId: 'u_phi', date: '2026-02-10', status: 'T' }, { userId: 'u_phi', date: '2026-02-11', status: 'T' }, { userId: 'u_phi', date: '2026-02-12', status: 'T' }, { userId: 'u_phi', date: '2026-02-13', status: 'T' },
        { userId: 'u_phi', date: '2026-02-16', status: 'H' }, { userId: 'u_phi', date: '2026-02-17', status: 'H' }, { userId: 'u_phi', date: '2026-02-18', status: 'O' }, { userId: 'u_phi', date: '2026-02-19', status: 'H' }, { userId: 'u_phi', date: '2026-02-20', status: 'H' },

        // Rahidul (Week 1: O, O, O, H, H; Week 2: O, O, O, H, H)
        { userId: 'u_rahidul', date: '2026-02-09', status: 'O' }, { userId: 'u_rahidul', date: '2026-02-10', status: 'O' }, { userId: 'u_rahidul', date: '2026-02-11', status: 'O' }, { userId: 'u_rahidul', date: '2026-02-12', status: 'H' }, { userId: 'u_rahidul', date: '2026-02-13', status: 'H' },
        { userId: 'u_rahidul', date: '2026-02-16', status: 'O' }, { userId: 'u_rahidul', date: '2026-02-17', status: 'O' }, { userId: 'u_rahidul', date: '2026-02-18', status: 'O' }, { userId: 'u_rahidul', date: '2026-02-19', status: 'H' }, { userId: 'u_rahidul', date: '2026-02-20', status: 'H' },

        // Reika (Week 1: O, O, O, O, O; Week 2: O, O, O, O, O)
        { userId: 'u_reika', date: '2026-02-09', status: 'O' }, { userId: 'u_reika', date: '2026-02-10', status: 'O' }, { userId: 'u_reika', date: '2026-02-11', status: 'O' }, { userId: 'u_reika', date: '2026-02-12', status: 'O' }, { userId: 'u_reika', date: '2026-02-13', status: 'O' },
        { userId: 'u_reika', date: '2026-02-16', status: 'O' }, { userId: 'u_reika', date: '2026-02-17', status: 'O' }, { userId: 'u_reika', date: '2026-02-18', status: 'O' }, { userId: 'u_reika', date: '2026-02-19', status: 'O' }, { userId: 'u_reika', date: '2026-02-20', status: 'O' },

        // Sumitra (Week 1: O, H, H, O, O; Week 2: O, H, H, O, O)
        { userId: 'u_sumitra', date: '2026-02-09', status: 'O' }, { userId: 'u_sumitra', date: '2026-02-10', status: 'H' }, { userId: 'u_sumitra', date: '2026-02-11', status: 'H' }, { userId: 'u_sumitra', date: '2026-02-12', status: 'O' }, { userId: 'u_sumitra', date: '2026-02-13', status: 'O' },
        { userId: 'u_sumitra', date: '2026-02-16', status: 'O' }, { userId: 'u_sumitra', date: '2026-02-17', status: 'H' }, { userId: 'u_sumitra', date: '2026-02-18', status: 'H' }, { userId: 'u_sumitra', date: '2026-02-19', status: 'O' }, { userId: 'u_sumitra', date: '2026-02-20', status: 'O' },

        // Yamamoto (Week 1: T, T, T, T, T; Week 2: O, O, O, O, O)
        { userId: 'u_yamamoto', date: '2026-02-09', status: 'T' }, { userId: 'u_yamamoto', date: '2026-02-10', status: 'T' }, { userId: 'u_yamamoto', date: '2026-02-11', status: 'T' }, { userId: 'u_yamamoto', date: '2026-02-12', status: 'T' }, { userId: 'u_yamamoto', date: '2026-02-13', status: 'T' },
        { userId: 'u_yamamoto', date: '2026-02-16', status: 'O' }, { userId: 'u_yamamoto', date: '2026-02-17', status: 'O' }, { userId: 'u_yamamoto', date: '2026-02-18', status: 'O' }, { userId: 'u_yamamoto', date: '2026-02-19', status: 'O' }, { userId: 'u_yamamoto', date: '2026-02-20', status: 'O' },

        // Kawabata (Week 1: O, O, O, O, O; Week 2: O, O, O, O, O)
        { userId: 'u_kawabata', date: '2026-02-09', status: 'O' }, { userId: 'u_kawabata', date: '2026-02-10', status: 'O' }, { userId: 'u_kawabata', date: '2026-02-11', status: 'O' }, { userId: 'u_kawabata', date: '2026-02-12', status: 'O' }, { userId: 'u_kawabata', date: '2026-02-13', status: 'O' },
        { userId: 'u_kawabata', date: '2026-02-16', status: 'O' }, { userId: 'u_kawabata', date: '2026-02-17', status: 'O' }, { userId: 'u_kawabata', date: '2026-02-18', status: 'O' }, { userId: 'u_kawabata', date: '2026-02-19', status: 'O' }, { userId: 'u_kawabata', date: '2026-02-20', status: 'O' },
    ],
    approvals: INITIAL_USERS.map(u => ({ periodId: 'p_feb9', userId: u.id, status: 'approved' })),
    memos: {}
};

const STATUS_TYPES = {
    OFFICE: 'O',
    HOME: 'H',
    TRIP: 'T',
    OFF: 'Off',
    EMPTY: ''
};

// --- UTILS ---
function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', weekday: 'short' });
}

function getDatesInRange(startDateStr, endDateStr) {
    const dates = [];
    let currentDate = new Date(startDateStr);
    const stopDate = new Date(endDateStr);

    while (currentDate <= stopDate) {
        dates.push(currentDate.toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
}

function getBiWeeklyRange(startDateStr) {
    const start = new Date(startDateStr);
    const end = new Date(start);
    end.setDate(end.getDate() + 13); // 14 days total
    return {
        start: start.toISOString().split('T')[0],
        end: end.toISOString().split('T')[0]
    };
}

function validateRules(user, entries, periodDates) {
    const messages = [];
    const officeCount = entries.filter(e => e.status === 'O').length;

    const week1Dates = periodDates.slice(0, 7);
    const week2Dates = periodDates.slice(7, 14);

    const week1Office = entries.filter(e => e.status === 'O' && week1Dates.includes(e.date)).length;
    const week2Office = entries.filter(e => e.status === 'O' && week2Dates.includes(e.date)).length;

    if (user.type === 'Exception' || user.customRule === 'biweekly-5') {
        if (officeCount < 5) {
            messages.push(`Exception (Min 5/2weeks): Current ${officeCount}`);
        }
    } else {
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

// UK Bank Holidays (2025-2027)
const UK_BANK_HOLIDAYS = [
    // 2025
    '2025-01-01', // New Year's Day
    '2025-04-18', // Good Friday
    '2025-04-21', // Easter Monday
    '2025-05-05', // Early May Bank Holiday
    '2025-05-26', // Spring Bank Holiday
    '2025-08-25', // Summer Bank Holiday
    '2025-12-25', // Christmas Day
    '2025-12-26', // Boxing Day

    // 2026
    '2026-01-01', // New Year's Day
    '2026-04-03', // Good Friday
    '2026-04-06', // Easter Monday
    '2026-05-04', // Early May Bank Holiday
    '2026-05-25', // Spring Bank Holiday
    '2026-08-31', // Summer Bank Holiday
    '2026-12-25', // Christmas Day
    '2026-12-28', // Boxing Day (substitute)

    // 2027
    '2027-01-01', // New Year's Day
    '2027-03-26', // Good Friday
    '2027-03-29', // Easter Monday
    '2027-05-03', // Early May Bank Holiday
    '2027-05-31', // Spring Bank Holiday
    '2027-08-30', // Summer Bank Holiday
    '2027-12-27', // Christmas Day (substitute)
    '2027-12-28'  // Boxing Day (substitute)
];

// --- STORE ---
const STORAGE_KEY = 'shift_manager_current_user'; // Session-based storage (clears on browser close)

class Store {
    constructor() {
        // Azure API endpoint
        this.apiEndpoint = '/api/data';
        this.state = {
            users: [],
            entries: [],
            periods: [],
            approvals: [],
            currentUser: null,
            currentPeriodId: null,
            memos: {}
        };

        // DO NOT auto-load user - always show login screen
        // Session will be maintained during browser session only

        // Initialize Azure data
        this.initializeAzure();
    }

    async initializeAzure() {
        try {
            // Fetch data from Azure API
            const response = await fetch(this.apiEndpoint);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            if (!data || !data.periods || data.periods.length === 0) {
                // Initialize with seed data
                console.log('Initializing Azure with seed data...');
                await this.saveToAzure({
                    users: INITIAL_USERS,
                    entries: SEED_DATA.entries,
                    periods: SEED_DATA.periods,
                    approvals: SEED_DATA.approvals,
                    currentPeriodId: SEED_DATA.currentPeriodId,
                    memos: SEED_DATA.memos || {}
                });
                console.log('Azure initialized successfully');
            } else {
                // Load existing data
                this.state.users = data.users || [];
                this.state.entries = data.entries || [];
                this.state.periods = data.periods || [];
                this.state.approvals = data.approvals || [];
                this.state.currentPeriodId = data.currentPeriodId || null;
                this.state.memos = data.memos || {};
            }

            // Set up periodic refresh (every 30 seconds)
            this.setupPolling();

        } catch (error) {
            console.error('Azure initialization error:', error);
            alert('Failed to connect to database. Please refresh the page.');
        }
    }

    async saveToAzure(data) {
        try {
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error saving to Azure:', error);
            throw error;
        }
    }

    setupPolling() {
        // Poll for data changes every 30 seconds
        setInterval(async () => {
            try {
                const response = await fetch(this.apiEndpoint);
                if (response.ok) {
                    const data = await response.json();
                    this.state.users = data.users || [];
                    this.state.entries = data.entries || [];
                    this.state.periods = data.periods || [];
                    this.state.approvals = data.approvals || [];
                    this.state.currentPeriodId = data.currentPeriodId || null;
                    this.state.memos = data.memos || {};

                    // Refresh UI if we're logged in
                    if (this.state.currentUser) {
                        this.refreshUI();
                    }
                }
            } catch (error) {
                console.error('Polling error:', error);
            }
        }, 30000);
    }

    refreshUI() {
        // Refresh the current view
        const currentView = document.querySelector('.tab-content:not(.hidden)');
        if (currentView) {
            const viewId = currentView.id;
            if (viewId === 'team-schedule-view') {
                renderTeamSchedule();
            } else if (viewId === 'my-input-view') {
                renderMyInput();
            } else if (viewId === 'admin-view') {
                renderAdmin();
            }
        }
    }

    getInitialState() {
        return {
            users: INITIAL_USERS,
            entries: [...SEED_DATA.entries],
            periods: [...SEED_DATA.periods],
            approvals: [...SEED_DATA.approvals],
            currentUser: null,
            currentPeriodId: SEED_DATA.currentPeriodId,
            memos: SEED_DATA.memos || {}
        };
    }

    getApprovalStatus(periodId, userId) {
        if (!this.state.approvals) this.state.approvals = [];
        const record = this.state.approvals.find(a => a.periodId === periodId && a.userId === userId);
        return record ? record.status : 'draft';
    }

    updateApprovalStatus(periodId, userId, status) {
        if (!this.state.approvals) this.state.approvals = [];
        let record = this.state.approvals.find(a => a.periodId === periodId && a.userId === userId);
        if (record) {
            record.status = status;
        } else {
            this.state.approvals.push({ periodId, userId, status });
        }
        // Save to Azure
        this.saveToAzure(this.state);
    }

    // --- Memos ---
    getMemos() { return this.state.memos || {}; }

    getMemo(date) {
        return (this.state.memos && this.state.memos[date]) || '';
    }

    updateMemo(date, text) {
        if (!this.state.memos) this.state.memos = {};
        this.state.memos[date] = text;
        // Save to Azure
        this.saveToAzure(this.state);
    }

    ensureFuturePeriods() {
        const periods = this.getPeriods().sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        if (periods.length === 0) return;

        const current = this.getCurrentPeriod();
        if (!current) return;

        const lastPeriod = periods[periods.length - 1];

        // Ensure we always have a period starting after current period's end
        // Logic: Find index of current. If index + 1 >= periods.length, create new.
        const currentIndex = periods.findIndex(p => p.id === current.id);

        if (currentIndex === -1) return; // Should not happen

        if (currentIndex + 1 >= periods.length) {
            // Need to create next period
            const lastEnd = new Date(lastPeriod.endDate);
            const nextStart = new Date(lastEnd);
            nextStart.setDate(nextStart.getDate() + 1);

            const nextEnd = new Date(nextStart);
            nextEnd.setDate(nextEnd.getDate() + 13);

            this.createPeriod(this.formatDateForStore(nextStart), this.formatDateForStore(nextEnd));
        }
    }

    formatDateForStore(date) {
        const offset = date.getTimezoneOffset();
        const d = new Date(date.getTime() - (offset * 60 * 1000));
        return d.toISOString().split('T')[0];
    }

    getUsers() {
        return [...this.state.users].sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    }

    getCurrentUser() { return this.state.currentUser; }

    setCurrentUser(userId) {
        if (!userId) {
            this.state.currentUser = null;
            sessionStorage.removeItem(STORAGE_KEY);
        } else {
            const user = this.state.users.find(u => u.id === userId);
            if (user) {
                this.state.currentUser = user;
                // Save current user to sessionStorage (session only)
                sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
            }
        }
    }

    getPreviousPeriod(currentPeriodId) {
        const sortedPeriods = [...this.state.periods].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        const index = sortedPeriods.findIndex(p => p.id === currentPeriodId);
        if (index > 0) return sortedPeriods[index - 1];
        return null;
    }

    getNextPeriod(currentPeriodId) {
        const sortedPeriods = [...this.state.periods].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        const index = sortedPeriods.findIndex(p => p.id === currentPeriodId);
        if (index >= 0 && index + 1 < sortedPeriods.length) return sortedPeriods[index + 1];
        return null;
    }

    copyPreviousSchedule(currentPeriodId, userId) {
        const currentPeriod = this.state.periods.find(p => p.id === currentPeriodId);
        const prevPeriod = this.getPreviousPeriod(currentPeriodId);

        if (!currentPeriod || !prevPeriod) return;

        const prevDates = getDatesInRange(prevPeriod.startDate, prevPeriod.endDate);
        const currDates = getDatesInRange(currentPeriod.startDate, currentPeriod.endDate);

        const len = Math.min(prevDates.length, currDates.length);

        for (let i = 0; i < len; i++) {
            const prevEntry = this.getEntry(userId, prevDates[i]);
            if (prevEntry && prevEntry.status) {
                this.updateEntry(userId, currDates[i], prevEntry.status);
            }
        }
    }

    getPeriods() { return this.state.periods; }

    createPeriod(startDate, endDate) {
        // Data Retention: Keep max 6 periods to allow for some history + future
        if (this.state.periods.length >= 6) {
            this.state.periods.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
            const oldest = this.state.periods.shift();

            // Clean up related entries and approvals
            this.state.entries = this.state.entries.filter(e => {
                return !(e.date >= oldest.startDate && e.date <= oldest.endDate);
            });
            if (this.state.approvals) {
                this.state.approvals = this.state.approvals.filter(a => a.periodId !== oldest.id);
            }
        }

        const newPeriod = {
            id: 'p_' + Date.now().toString(), // Helper ID
            startDate,
            endDate,
            isLocked: false,
            createdAt: new Date().toISOString()
        };
        this.state.periods.push(newPeriod);

        if (!this.state.currentPeriodId) {
            this.state.currentPeriodId = newPeriod.id;
        }

        // Save to Azure
        this.saveToAzure(this.state);
        return newPeriod;
    }

    updateUser(userId, newName) {
        const user = this.state.users.find(u => u.id === userId);
        if (user) {
            user.name = newName;
            // Save to Azure
            this.saveToAzure(this.state);
        }
    }

    addUser(name, type, role) {
        const id = 'u' + Date.now();
        const weeklyMin = (type === 'Expat') ? 5 : (type === 'Exception' ? 0 : 3);
        const newUser = { id, name, role, type, weeklyMin };

        if (type === 'Exception') newUser.customRule = 'biweekly-5';

        this.state.users.push(newUser);
        // Save to Azure
        this.saveToAzure(this.state);
        return newUser;
    }

    deleteUser(userId) {
        this.state.users = this.state.users.filter(u => u.id !== userId);
        // Save to Azure
        this.saveToAzure(this.state);
    }

    getCurrentPeriod() {
        if (!this.state.currentPeriodId || this.state.periods.length === 0) {
            return null;
        }
        return this.state.periods.find(p => p.id === this.state.currentPeriodId);
    }

    setPeriodLock(periodId, isLocked) {
        const period = this.state.periods.find(p => p.id === periodId);
        if (period) {
            period.isLocked = isLocked;
            // Save to Azure
            this.saveToAzure(this.state);
        }
    }

    getEntries(periodId) { return this.state.entries; }

    getEntry(userId, date) {
        return this.state.entries.find(e => e.userId === userId && e.date === date);
    }

    updateEntry(userId, date, status) {
        const existingIndex = this.state.entries.findIndex(e => e.userId === userId && e.date === date);
        if (existingIndex >= 0) {
            this.state.entries[existingIndex].status = status;
        } else {
            this.state.entries.push({
                id: Date.now().toString() + Math.random(),
                userId,
                date,
                status
            });
        }
        // Save to Azure
        this.saveToAzure(this.state);
    }

    setActivePeriod(periodId) {
        if (this.state.periods.find(p => p.id === periodId)) {
            this.state.currentPeriodId = periodId;
            // Save to Azure
            this.saveToAzure(this.state);
        }
    }

    async resetData() {
        // Clear Azure data and reinitialize
        await this.saveToAzure({
            users: INITIAL_USERS,
            entries: SEED_DATA.entries,
            periods: SEED_DATA.periods,
            approvals: SEED_DATA.approvals,
            currentPeriodId: SEED_DATA.currentPeriodId,
            memos: SEED_DATA.memos || {}
        });
        // Clear session user data
        sessionStorage.removeItem(STORAGE_KEY);
        window.location.reload();
    }
}

const store = new Store();

// --- UI ---
function renderLogin() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    const users = store.getUsers();
    if (!users || users.length === 0) {
        userList.innerHTML = '<div class="text-red-500">Error: No users found. Try Reset.</div>';
        return;
    }

    users.forEach(user => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left px-4 py-3 rounded border hover:bg-gray-50 flex justify-between items-center transition-colors mb-2";
        btn.innerHTML = `
            <span class="font-medium">${user.name}</span>
            <span class="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600">${user.role}</span>
        `;
        btn.onclick = () => {
            // Password protection for Kawabata (admin)
            if (user.id === 'u_kawabata') {
                const password = prompt('管理者パスワードを入力してください:');
                if (password !== 'kawabata') {
                    alert('パスワードが正しくありません。');
                    return;
                }
            }
            store.setCurrentUser(user.id);
            window.location.reload();
        };
        userList.appendChild(btn);
    });
}

function updateHeader(user) {
    document.getElementById('user-display').textContent = `Logged in as: ${user.name}`;
    if (user.role === 'manager') {
        document.getElementById('admin-tab-btn').classList.remove('hidden');
    }
}

function renderTeamSchedule() {
    store.ensureFuturePeriods();
    const container = document.getElementById('schedule-table-wrapper');
    const currentPeriod = store.getCurrentPeriod();

    if (!currentPeriod) {
        container.innerHTML = '<div class="text-center p-8 text-gray-500">No active period found. Please create one in Admin panel.</div>';
        return;
    }

    // Get Current and Next Period
    const periods = store.getPeriods().sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    const currentIndex = periods.findIndex(p => p.id === currentPeriod.id);
    const targetPeriods = [currentPeriod];
    if (currentIndex >= 0 && currentIndex + 1 < periods.length) {
        targetPeriods.push(periods[currentIndex + 1]);
    }

    // Combine dates
    let allDates = [];
    targetPeriods.forEach(p => {
        allDates = allDates.concat(getDatesInRange(p.startDate, p.endDate));
    });

    const start = allDates[0];
    const end = allDates[allDates.length - 1];
    document.getElementById('current-period-display').innerText = `${start} ~ ${end} (Continuous 4-Week View)`;

    const users = store.getUsers();
    const memos = store.getMemos();

    let html = `<div class="overflow-x-auto min-h-[500px]"><table class="divide-y divide-gray-200 border-collapse text-sm min-w-max relative">`;
    html += `<thead class="bg-gray-50 sticky top-0 z-20 shadow-sm">`;

    // ROW 1: MEMOS (Moved Above Dates)
    html += `<tr class="bg-yellow-50">
        <th class="px-3 py-2 font-bold text-gray-600 sticky left-0 bg-yellow-50 z-30 border-r border-gray-200 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] h-[40px] text-left align-middle">Memo</th>`;
    allDates.forEach(date => {
        const memoText = memos[date] || '';
        const minW = Math.max(40, (memoText.length * 8) + 20);
        html += `<th class="p-0 border-r border-gray-200 relative group min-h-[40px] align-top font-normal transition-all duration-200" style="min-width: ${minW}px">
            <textarea 
                class="w-full h-full text-center text-xs bg-transparent focus:bg-white focus:outline-none p-1 hover:bg-yellow-100 placeholder-gray-300 resize-none overflow-hidden" 
                placeholder="..."
                rows="1"
                onchange="store.updateMemo('${date}', this.value)"
                oninput="this.style.height = 'auto'; this.style.height = (this.scrollHeight) + 'px'; this.parentElement.style.minWidth = Math.max(40, (this.value.length * 8) + 20) + 'px'"
                title="${memoText}" 
            >${memoText}</textarea>
        </th>`;
    });
    html += `</tr>`;

    // ROW 2: DATE HEADERS
    html += `<tr>
        <th class="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-30 border-r border-gray-200 min-w-[150px] shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">Member</th>`;
    allDates.forEach(date => {
        const d = new Date(date);
        const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
        const isWeekend = d.getDay() === 0 || d.getDay() === 6 || UK_BANK_HOLIDAYS.includes(date);
        const headerClass = isWeekend ? 'text-red-500 bg-red-50' : 'text-gray-700';

        let officeCount = 0;
        targetPeriods.forEach(p => {
            if (date >= p.startDate && date <= p.endDate) {
                const pEntries = store.getEntries(p.id);
                // Only count entries from approved users
                pEntries.forEach(e => {
                    if (e.date === date && e.status === STATUS_TYPES.OFFICE) {
                        const approvalStatus = store.getApprovalStatus(p.id, e.userId);
                        if (approvalStatus === 'approved') {
                            officeCount++;
                        }
                    }
                });
            }
        });

        html += `<th class="px-1 py-1 text-center font-medium ${headerClass} w-[40px] border-r border-gray-100 align-top">
            <div class="text-[10px]">${dayName}</div>
            <div class="text-xs font-bold">${d.getDate()}</div>
            <div class="mt-1 text-[9px] bg-blue-100 text-blue-800 rounded px-1 w-fit mx-auto">${officeCount}</div>
        </th>`;
    });
    html += `</tr></thead>`;

    html += `<tbody class="bg-white divide-y divide-gray-200">`;
    // User Rows
    users.forEach(user => {
        html += `<tr>
            <td class="px-3 py-2 whitespace-nowrap font-medium text-gray-900 sticky left-0 bg-white z-10 border-r border-gray-200 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">${user.name}</td>`;

        allDates.forEach(date => {
            // Find which period this date belongs to
            let periodForDate = null;
            for (const p of targetPeriods) {
                if (date >= p.startDate && date <= p.endDate) {
                    periodForDate = p;
                    break;
                }
            }

            // Check approval status for this user and period
            const approvalStatus = periodForDate ? store.getApprovalStatus(periodForDate.id, user.id) : 'draft';

            // Only show entry if approved
            let entry = null;
            let status = '';
            if (approvalStatus === 'approved') {
                entry = store.getEntry(user.id, date);
                status = entry ? entry.status : '';
            }

            const statusClass = status ? `status-${status}` : 'status-Empty';
            const displayStatus = status === 'Off' ? '/' : (status || '-');

            html += `<td class="px-0 py-0 text-center border-r border-gray-100 h-8 w-10 relative">
                <div class="${statusClass} w-full h-full flex items-center justify-center text-xs font-bold">
                    ${displayStatus}
                </div>
             </td>`;
        });
        html += `</tr>`;
    });
    html += `</tbody></table></div>`;

    container.innerHTML = html;
}

let myInputPeriodId = null;

function cycleStatus(userId, date, currentStatus) {
    const map = {
        '': STATUS_TYPES.OFFICE,
        'O': STATUS_TYPES.HOME,
        'H': STATUS_TYPES.TRIP,
        'T': STATUS_TYPES.OFF,
        'Off': STATUS_TYPES.OFFICE
    };

    const next = map[currentStatus] || STATUS_TYPES.OFFICE;
    store.updateEntry(userId, date, next);
    renderMyInput(myInputPeriodId);
}

function renderMyInput(periodId = null) {
    store.ensureFuturePeriods();

    let period = null;
    if (periodId) {
        period = store.getPeriods().find(p => p.id === periodId);
    }
    if (!period) {
        period = store.getCurrentPeriod();
    }

    myInputPeriodId = period ? period.id : null;

    const container = document.getElementById('my-input-grid');
    const infoContainer = document.getElementById('my-input-period-info');
    const validationContainer = document.getElementById('validation-messages');
    container.innerHTML = '';
    infoContainer.innerHTML = '';

    if (!period) {
        container.innerHTML = 'No active period.';
        return;
    }

    const isLocked = period.isLocked;
    const currentUser = store.getCurrentUser();
    const myApproval = store.getApprovalStatus(period.id, currentUser.id);
    const isReadOnly = isLocked || myApproval === 'submitted' || myApproval === 'approved';

    // Period Navigation
    const currentGlobal = store.getCurrentPeriod();
    const nextGlobal = store.getNextPeriod(currentGlobal ? currentGlobal.id : null);

    let navHtml = '<div class="flex gap-2 mb-4">';
    if (currentGlobal) {
        const isSelected = period.id === currentGlobal.id;
        navHtml += `<button class="px-3 py-1 rounded text-sm font-medium ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}" onclick="renderMyInput('${currentGlobal.id}')">Current Period</button>`;
    }
    if (nextGlobal) {
        const isSelected = period.id === nextGlobal.id;
        navHtml += `<button class="px-3 py-1 rounded text-sm font-medium ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}" onclick="renderMyInput('${nextGlobal.id}')">Next Period</button>`;
    }
    navHtml += '</div>';

    infoContainer.innerHTML = `
        ${navHtml}
        <div class="flex justify-between items-center w-full">
            <div>
                <span class="font-bold text-lg">Period: ${period.startDate} ~ ${period.endDate}</span>
                <span class="ml-2 ${isLocked ? 'text-red-600 font-bold' : 'text-green-600 font-bold'}">
                    ${isLocked ? 'LOCKED' : 'OPEN'}
                </span>
                <span class="ml-2 px-2 py-0.5 rounded text-xs border font-bold ${myApproval === 'approved' ? 'bg-green-100 text-green-700' :
            (myApproval === 'submitted' ? 'bg-blue-100 text-blue-700' :
                (myApproval === 'denied' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'))
        }">
                    Status: ${myApproval.toUpperCase()}
                </span>
            </div>
            ${(myApproval === 'draft' || myApproval === 'denied') && !isLocked ?
            `<button id="submit-schedule-btn" class="bg-blue-600 text-white px-4 py-1 rounded shadow hover:bg-blue-700">Submit Request</button>` : ''}
        </div>
    `;

    // --- Previous Period Section ---
    const prevPeriod = store.getPreviousPeriod(period.id);
    let prevContainer = document.getElementById('prev-schedule-container');

    if (!prevContainer) {
        prevContainer = document.createElement('div');
        prevContainer.id = 'prev-schedule-container';
        container.parentNode.insertBefore(prevContainer, container);
    }

    if (prevPeriod) {
        prevContainer.classList.remove('hidden');
        prevContainer.className = 'mb-6 p-4 bg-gray-50 rounded border border-gray-200';

        let prevHtml = `
            <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-bold text-gray-500">Previous Period: ${prevPeriod.startDate} ~ ${prevPeriod.endDate}</span>
                ${!isReadOnly ? `<button id="copy-prev-btn" class="bg-indigo-500 text-white px-3 py-1 rounded text-xs hover:bg-indigo-600 flex items-center gap-1">Copy to Current</button>` : ''}
            </div>
            <div class="grid grid-cols-7 gap-2 opacity-75">
        `;

        const prevDates = getDatesInRange(prevPeriod.startDate, prevPeriod.endDate);
        prevDates.forEach(date => {
            const d = new Date(date);
            const isWeekend = d.getDay() === 0 || d.getDay() === 6;
            const entry = store.getEntry(currentUser.id, date);
            const currentStatus = entry ? entry.status : '';
            const statusClass = currentStatus ? `status-${currentStatus}` : 'status-Empty';

            prevHtml += `
                <div class="p-2 rounded border flex flex-col items-center justify-center gap-1 ${isWeekend ? 'bg-gray-100' : 'bg-white'}">
                    <div class="text-[10px] ${isWeekend ? 'text-red-500' : 'text-gray-500'}">${d.getDate()} (${d.toLocaleDateString('en-US', { weekday: 'short' })})</div>
                    <div class="${statusClass} w-8 h-8 rounded shadow-sm font-bold flex items-center justify-center text-xs">
                        ${currentStatus || '-'}
                    </div>
                </div>
            `;
        });
        prevHtml += `</div>`;
        prevContainer.innerHTML = prevHtml;

        const copyBtn = document.getElementById('copy-prev-btn');
        if (copyBtn) {
            copyBtn.onclick = () => {
                if (confirm('Copy previous schedule to current period? This will overwrite current entries.')) {
                    store.copyPreviousSchedule(period.id, currentUser.id);
                    renderMyInput(period.id);
                }
            };
        }
    } else if (prevContainer) {
        prevContainer.className = 'hidden';
        prevContainer.innerHTML = '';
    }

    const dates = getDatesInRange(period.startDate, period.endDate);

    dates.forEach(date => {
        const d = new Date(date);
        const isWeekend = d.getDay() === 0 || d.getDay() === 6;
        const entry = store.getEntry(currentUser.id, date);
        const currentStatus = entry ? entry.status : '';
        const statusClass = currentStatus ? `status-${currentStatus}` : 'status-Empty';

        const div = document.createElement('div');
        div.className = `p-3 rounded border flex flex-col items-center justify-center gap-2 transition-all ${isWeekend ? 'bg-gray-100 opacity-70' : 'bg-white'}`;
        div.innerHTML = `
            <div class="text-xs font-bold ${isWeekend ? 'text-red-500' : 'text-gray-700'}">${d.toDateString()}</div>
            <button class="${statusClass} w-10 h-10 rounded shadow-sm font-bold flex items-center justify-center border focus:ring-2 focus:ring-offset-1 focus:ring-blue-500" 
                data-date="${date}"
                ${isReadOnly ? 'disabled' : ''}>
                ${currentStatus || '-'}
            </button>
            ${store.getMemo(date) ? `<div class="text-[10px] text-gray-500 truncate w-full text-center" title="${store.getMemo(date)}">${store.getMemo(date)}</div>` : ''}
        `;

        if (!isReadOnly) {
            const btn = div.querySelector('button');
            btn.onclick = () => cycleStatus(currentUser.id, date, currentStatus);
        }
        container.appendChild(div);
    });

    // Attach Submit Event
    const submitBtn = document.getElementById('submit-schedule-btn');
    if (submitBtn) {
        submitBtn.onclick = () => {
            if (confirm('Are you sure you want to submit your schedule? You will not be able to edit it afterwards.')) {
                store.updateApprovalStatus(period.id, currentUser.id, 'submitted');
                alert('Submitted to Manager');
                renderMyInput(period.id);
            }
        };
    }

    const entries = store.getEntries(period.id);
    const userEntries = entries.filter(e => e.userId === currentUser.id);
    const relevantEntries = userEntries.filter(e => dates.includes(e.date));

    const messages = validateRules(currentUser, relevantEntries, dates);
    validationContainer.innerHTML = messages.map(msg =>
        `<div class="p-2 text-sm text-red-700 bg-red-100 rounded border border-red-200 flex items-center gap-2">
            <span>!</span> ${msg}
        </div>`
    ).join('');
}

let adminSelectedPeriodId = null;

function renderAdmin(periodId = null) {
    // Use provided periodId, or fall back to adminSelectedPeriodId, or current period
    if (periodId) {
        adminSelectedPeriodId = periodId;
    }

    let period = null;
    if (adminSelectedPeriodId) {
        period = store.getPeriods().find(p => p.id === adminSelectedPeriodId);
    }
    if (!period) {
        period = store.getCurrentPeriod();
        adminSelectedPeriodId = period ? period.id : null;
    }

    const statusSpan = document.getElementById('admin-period-status');
    const lockBtn = document.getElementById('toggle-lock-btn');
    const memberList = document.getElementById('admin-member-list');

    if (period) {
        statusSpan.textContent = period.isLocked ? 'Locked' : 'Open';
        statusSpan.className = `px-2 py-0.5 rounded text-xs font-bold ${period.isLocked ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`;

        lockBtn.textContent = period.isLocked ? 'Unlock Period' : 'Lock Period';
        lockBtn.onclick = () => {
            store.setPeriodLock(period.id, !period.isLocked);
            renderAdmin(period.id);
        };

        // --- Period Viewer ---
        const periodSwitcherContainer = document.querySelector('.period-switcher');
        if (!periodSwitcherContainer) {
            const switcherDiv = document.createElement('div');
            switcherDiv.className = 'period-switcher mb-4 border-b pb-4';
            switcherDiv.innerHTML = `<label class="block text-sm font-medium mb-2">View Period Approvals</label><div id="period-list" class="space-y-2"></div>`;
            statusSpan.closest('.space-y-4').insertBefore(switcherDiv, statusSpan.closest('.flex'));
        }

        const periodList = document.getElementById('period-list');
        if (periodList) {
            periodList.innerHTML = '';
            store.getPeriods().forEach(p => {
                const isSelected = p.id === adminSelectedPeriodId;
                const isActive = p.id === store.state.currentPeriodId;
                const div = document.createElement('div');
                div.className = `flex items-center justify-between p-2 rounded border ${isSelected ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'}`;
                div.innerHTML = `
                    <span class="text-xs ${isSelected ? 'font-bold text-blue-700' : 'text-gray-600'}">
                        ${p.startDate} ~ ${p.endDate} ${isActive ? '(Active)' : ''}
                    </span>
                    ${!isSelected ? `<button class="view-period-btn text-xs bg-white border border-gray-300 px-2 py-1 rounded hover:bg-gray-50" data-id="${p.id}">View</button>` : '<span class="text-xs text-blue-600 font-bold">Viewing</span>'}
                `;
                periodList.appendChild(div);
            });

            document.querySelectorAll('.view-period-btn').forEach(btn => {
                btn.onclick = (e) => {
                    renderAdmin(e.target.dataset.id);
                };
            });
        }
        // -----------------------------

    } else {
        statusSpan.textContent = 'No Period';
        lockBtn.disabled = true;
    }

    // Add User Form
    if (!document.getElementById('add-member-container')) {
        const addForm = document.createElement('div');
        addForm.id = "add-member-container";
        addForm.className = "mb-4 p-4 bg-gray-50 rounded border";
        addForm.innerHTML = `
            <h4 class="text-sm font-bold mb-2">Add New Member</h4>
            <div class="flex gap-2 mb-2">
                <input type="text" id="new-user-name" placeholder="Name" class="border px-2 py-1 text-sm rounded w-full">
                <select id="new-user-type" class="border px-2 py-1 text-sm rounded">
                    <option value="Expat">Expat</option>
                    <option value="NS">NS</option>
                    <option value="Exception">Exception</option>
                    <option value="Contractor">Contractor</option>
                </select>
                <select id="new-user-role" class="border px-2 py-1 text-sm rounded">
                    <option value="member">Member</option>
                    <option value="manager">Manager</option>
                </select>
            </div>
            <button id="add-user-btn" class="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700">Add</button>
        `;
        memberList.parentNode.insertBefore(addForm, memberList);

        document.getElementById('add-user-btn').addEventListener('click', () => {
            const name = document.getElementById('new-user-name').value;
            const type = document.getElementById('new-user-type').value;
            const role = document.getElementById('new-user-role').value;
            if (name) {
                store.addUser(name, type, role);
                renderAdmin(adminSelectedPeriodId);
                document.getElementById('new-user-name').value = '';
            }
        });
    }

    memberList.innerHTML = '';
    const users = store.getUsers();
    users.forEach(user => {
        const rowClass = (user.id === store.getCurrentUser().id) ? "bg-blue-50" : "";

        let approvalControls = '';
        if (period) {
            const status = store.getApprovalStatus(period.id, user.id);
            const statusColor = status === 'approved' ? 'text-green-600' : (status === 'submitted' ? 'text-blue-600' : 'text-gray-400');

            approvalControls = `
                <div class="flex flex-col items-end gap-1">
                    <span class="text-xs font-bold ${statusColor}">${status.toUpperCase()}</span>
                    ${status === 'submitted' ? `
                        <button class="view-schedule-btn text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded hover:bg-blue-200 mb-1" data-uid="${user.id}">📅 View Schedule</button>
                        <div class="flex gap-1">
                            <button class="approve-btn text-xs bg-green-500 text-white px-2 py-0.5 rounded hover:bg-green-600" data-uid="${user.id}">Approve</button>
                            <button class="deny-btn text-xs bg-red-500 text-white px-2 py-0.5 rounded hover:bg-red-600" data-uid="${user.id}">Deny</button>
                        </div>
                    ` : ''}
                    ${status === 'approved' ? `<button class="revert-btn text-xs text-gray-500 underline" data-uid="${user.id}">Revert</button>` : ''}
                    ${status === 'denied' ? `<button class="revert-btn text-xs text-gray-500 underline" data-uid="${user.id}">Reset to Draft</button>` : ''}
                </div>
            `;
        }

        const row = document.createElement('tr');
        if (rowClass) row.className = rowClass;
        row.innerHTML = `
            <td class="p-2 border-b">
                <div class="flex items-center justify-between">
                    <span>${user.name}</span>
                    <button class="text-xs text-blue-600 hover:underline rename-btn ml-2" data-userid="${user.id}" data-currentname="${user.name}">Rename</button>
                </div>
            </td>
            <td class="p-2 border-b">${user.role}</td>
            <td class="p-2 border-b text-xs text-gray-500">${user.type}</td>
            <td class="p-2 border-b text-right">
                <div class="flex items-center justify-end gap-4">
                    ${approvalControls}
                    ${user.role !== 'manager' ? `<button class="text-red-500 text-xs hover:underline delete-btn" data-userid="${user.id}">Delete</button>` : ''}
                </div>
            </td>
        `;
        memberList.appendChild(row);
    });

    // Approval Events
    if (period) {
        document.querySelectorAll('.approve-btn').forEach(btn => {
            btn.onclick = (e) => {
                store.updateApprovalStatus(period.id, e.target.dataset.uid, 'approved');
                renderAdmin(period.id);
            };
        });
        document.querySelectorAll('.deny-btn').forEach(btn => {
            btn.onclick = (e) => {
                if (confirm('Deny this schedule? The user will be able to edit and resubmit.')) {
                    store.updateApprovalStatus(period.id, e.target.dataset.uid, 'denied');
                    renderAdmin(period.id);
                }
            };
        });
        document.querySelectorAll('.view-schedule-btn').forEach(btn => {
            btn.onclick = (e) => {
                const userId = e.target.dataset.uid;
                const user = store.getUsers().find(u => u.id === userId);
                showSchedulePreview(user, period);
            };
        });
        document.querySelectorAll('.revert-btn').forEach(btn => {
            btn.onclick = (e) => {
                store.updateApprovalStatus(period.id, e.target.dataset.uid, 'draft');
                renderAdmin(period.id);
            };
        });
    }

    // Delete Event
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.onclick = (e) => {
            if (confirm('Delete this user?')) {
                store.deleteUser(e.target.dataset.userid);
                renderAdmin();
            }
        };
    });

    // Rename Event Listeners (Added)
    document.querySelectorAll('.rename-btn').forEach(btn => {
        btn.onclick = (e) => {
            const userId = e.target.dataset.userid;
            const currentName = e.target.dataset.currentname;
            const newName = prompt("Enter new name:", currentName);
            if (newName && newName.trim() !== "") {
                store.updateUser(userId, newName.trim());
                renderAdmin();
                if (store.getCurrentUser().id === userId) {
                    updateHeader(store.getCurrentUser());
                }
            }
        };
    });
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', async () => {
    if (window.lucide) lucide.createIcons();

    // Wait for Firebase to initialize
    await new Promise(resolve => {
        const checkInit = setInterval(() => {
            if (store.state.users && store.state.users.length > 0) {
                clearInterval(checkInit);
                resolve();
            }
        }, 100);

        // Timeout after 10 seconds
        setTimeout(() => {
            clearInterval(checkInit);
            if (!store.state.users || store.state.users.length === 0) {
                alert('Failed to load data from Firebase. Please refresh the page.');
            }
            resolve();
        }, 10000);
    });

    // ALWAYS show login screen - no auto-login
    console.log('App init. Always showing login screen.');

    const loginView = document.getElementById('login-view');
    const dashboardView = document.getElementById('dashboard-view');

    // Ensure login view is visible
    loginView.classList.remove('hidden');
    dashboardView.classList.add('hidden');

    // Render login screen with user list
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    const users = store.getUsers();
    users.forEach(user => {
        const btn = document.createElement('button');
        btn.className = 'w-full bg-white hover:bg-blue-50 text-gray-900 font-medium py-3 px-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors';
        btn.textContent = user.name;
        btn.onclick = () => {
            // Check if Kawabata - require password
            if (user.role === 'manager') {
                const password = prompt(`Enter password for ${user.name}:`);
                if (password !== 'kawabata') {
                    alert('Incorrect password');
                    return;
                }
            }

            // Set current user and show dashboard
            store.setCurrentUser(user.id);
            loginView.classList.add('hidden');
            dashboardView.classList.remove('hidden');
            dashboardView.classList.add('flex');

            updateHeader(user);
            store.ensureFuturePeriods();

            // SMART INIT: Ensure we are looking at the period containing Today
            const currentPeriod = store.getCurrentPeriod();
            const today = new Date().toISOString().split('T')[0];
            const periods = store.getPeriods();
            const todayPeriod = periods.find(p => today >= p.startDate && today <= p.endDate);

            if (todayPeriod && currentPeriod.id !== todayPeriod.id) {
                console.log('Auto-switching to Today period:', todayPeriod.id);
                store.setActivePeriod(todayPeriod.id);
            } else if (!currentPeriod) {
                // Fallback creation logic
                const todayDate = new Date();
                const day = todayDate.getDay();
                const diff = todayDate.getDate() - day + (day == 0 ? -6 : 1);
                const lastMonday = new Date(todayDate.setDate(diff));
                const { start, end } = getBiWeeklyRange(lastMonday.toISOString());
                store.createPeriod(start, end);
            }

            renderTeamSchedule();
        };
        userList.appendChild(btn);
    });

    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-tab').forEach(b => {
                b.classList.remove('bg-gray-100', 'text-primary', 'border-primary');
                b.classList.add('border-transparent', 'text-gray-500');
            });
            e.target.classList.remove('border-transparent', 'text-gray-500');
            e.target.classList.add('text-primary', 'border-primary');

            document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
            const tabId = e.target.getAttribute('data-tab');
            document.getElementById(tabId).classList.remove('hidden');

            if (tabId === 'team-schedule') renderTeamSchedule();
            if (tabId === 'my-input') renderMyInput();
            if (tabId === 'admin-panel') renderAdmin();
        });
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        store.setCurrentUser(null);
        window.location.reload();
    });

    document.getElementById('reset-data-btn').addEventListener('click', () => {
        if (confirm('Reset all data?')) {
            store.resetData();
        }
    });

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

    document.getElementById('create-period-btn').addEventListener('click', () => {
        const dateInput = document.getElementById('new-period-start').value;
        if (dateInput) {
            const { start, end } = getBiWeeklyRange(dateInput);
            store.createPeriod(start, end);
            alert(`New period created: ${start} ~ ${end}`);
            renderTeamSchedule();
            renderAdmin();
        }
    });
});
