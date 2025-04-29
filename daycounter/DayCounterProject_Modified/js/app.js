document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const targetInput = document.getElementById('targetDate');
    const modeSelect = document.getElementById('mode');
    const eventNameInput = document.getElementById('eventName');

    const stored = getStoredCounters();
    stored.forEach(item => {
        createCounterCard(item.eventName, item.mode, item.id, item.targetDate);
        updateSingleCounter(item.targetDate, item.mode, item.id, item.eventName);
        setInterval(() => {
            updateSingleCounter(item.targetDate, item.mode, item.id, item.eventName);
        }, 1000);
    });

    startButton.addEventListener('click', function() {
        const targetDate = targetInput.value;
        const mode = modeSelect.value;
        let eventName = eventNameInput.value.trim();
        if (!targetDate) {
            alert('Lütfen bir tarih ve saat seçin!');
            return;
        }
        if (eventName === '') {
            eventName = "Etkinlik";
        }

        const uniqueId = 'counter-' + Date.now();

        createCounterCard(eventName, mode, uniqueId);
        updateSingleCounter(targetDate, mode, uniqueId, eventName);
        setInterval(() => {
            updateSingleCounter(targetDate, mode, uniqueId, eventName);
        }, 1000);

        saveCounter({ id: uniqueId, eventName, mode, targetDate });
    });
});

function updateSingleCounter(targetDate, mode, uniqueId, eventName) {
    const timeData = calculateTimeDifference(targetDate, mode);
    if (timeData === null) return;
    updateCounterDisplay(timeData, mode, uniqueId, eventName);
}

function deleteCounter(id) {
    const card = document.getElementById(id);
    if (card) {
        card.remove();
    }
    deleteCounterFromStorage(id);
}

function editCounter(id) {
    const newName = prompt("Yeni etkinlik ismi girin:");
    const newDate = prompt("Yeni tarih ve saat girin (örneğin: 2025-12-31T23:59):");

    if (!newName || !newDate) {
        alert("Düzenleme iptal edildi. İsim ve tarih boş bırakılamaz.");
        return;
    }

    const title = document.getElementById('title-' + id);
    if (title) {
        title.textContent = newName;
    }

    const counters = getStoredCounters();
    const counter = counters.find(c => c.id === id);
    if (counter) {
        counter.eventName = newName;
        counter.targetDate = newDate;
        updateCounterInStorage(counter);
    }

    alert("Düzenleme kaydedildi. Sayaçlar yenileniyor...");
    window.location.reload();
}
