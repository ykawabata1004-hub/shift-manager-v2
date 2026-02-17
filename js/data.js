export const INITIAL_USERS = [
    { id: 'u1', name: 'Manager (Admin)', role: 'manager', type: 'Expat', weeklyMin: 5 },
    { id: 'u2', name: 'Alice (Expat)', role: 'member', type: 'Expat', weeklyMin: 5 },
    { id: 'u3', name: 'Bob (NS)', role: 'member', type: 'NS', weeklyMin: 3 },
    { id: 'u4', name: 'Charlie (Contractor)', role: 'member', type: 'Contractor', weeklyMin: 3 },
    { id: 'u5', name: 'Jon (Exception)', role: 'member', type: 'NS', weeklyMin: 3, customRule: 'biweekly-5' },
    { id: 'u6', name: 'Dave (NS)', role: 'member', type: 'NS', weeklyMin: 3 },
];

export const STATUS_TYPES = {
    OFFICE: 'O',
    HOME: 'H',
    TRIP: 'T',
    OFF: 'Off',
    EMPTY: ''
};

export const HOLIDAYS = [
    // Add some sample holidays if needed
    // { date: '2023-12-25', name: 'Christmas' }
];
