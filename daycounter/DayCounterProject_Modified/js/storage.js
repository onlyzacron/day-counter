const STORAGE_KEY = "dayCounterEvents";

function getStoredCounters() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveCounter(counter) {
    const counters = getStoredCounters();
    counters.push(counter);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(counters));
}

function deleteCounterFromStorage(id) {
    const counters = getStoredCounters();
    const updated = counters.filter(c => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

function updateCounterInStorage(updatedCounter) {
    const counters = getStoredCounters();
    const index = counters.findIndex(c => c.id === updatedCounter.id);
    if (index !== -1) {
        counters[index] = updatedCounter;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(counters));
    }
}
