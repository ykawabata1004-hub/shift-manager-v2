import { INITIAL_USERS } from './data.js';

const STORAGE_KEY = 'shift_manager_v1';

class Store {
    constructor() {
        this.state = this.loadState();
    }

    loadState() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            // Ensure users are loaded even if storage is old/corrupt
            if (!parsed.users || parsed.users.length === 0) {
                console.warn('Users missing in storage, resetting to defaults');
                return this.getInitialState();
            }
            return parsed;
        }
        return this.getInitialState();
    }

    getInitialState() {
        return {
            users: INITIAL_USERS,
            entries: [], // { id, userId, date, status }
            periods: [], // { id, startDate, endDate, isLocked }
            currentUser: INITIAL_USERS[0], // Default logged in user
            currentPeriodId: null
        };
    }

    saveState() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    }

    // --- Users ---
    getUsers() {
        return this.state.users;
    }

    getCurrentUser() {
        return this.state.currentUser;
    }

    setCurrentUser(userId) {
        const user = this.state.users.find(u => u.id === userId);
        if (user) {
            this.state.currentUser = user;
            this.saveState();
        }
    }

    // --- Periods ---
    getPeriods() {
        return this.state.periods;
    }

    createPeriod(startDate, endDate) {
        const newPeriod = {
            id: Date.now().toString(),
            startDate,
            endDate,
            isLocked: false,
            createdAt: new Date().toISOString()
        };
        this.state.periods.push(newPeriod);
        this.state.currentPeriodId = newPeriod.id;
        this.saveState();
        return newPeriod;
    }

    getCurrentPeriod() {
        // If no period exists, create a default one starting from "last Monday"
        if (!this.state.currentPeriodId || this.state.periods.length === 0) {
            // Simple default logic: create a period if none
            return null;
        }
        return this.state.periods.find(p => p.id === this.state.currentPeriodId);
    }

    setPeriodLock(periodId, isLocked) {
        const period = this.state.periods.find(p => p.id === periodId);
        if (period) {
            period.isLocked = isLocked;
            this.saveState();
        }
    }

    // --- Entries ---
    getEntries(periodId) {
        // Filter entries that fall within the period date range?
        // For simplicity, we just store date string YYYY-MM-DD
        return this.state.entries;
    }

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
        this.saveState();
    }

    // --- Reset ---
    resetData() {
        localStorage.removeItem(STORAGE_KEY);
        this.state = this.getInitialState();
        location.reload();
    }
}

export const store = new Store();
