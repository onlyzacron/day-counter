function createCounterCard(eventName, mode, uniqueId, targetDate) {
    const resultDiv = document.getElementById('result');
    const card = document.createElement('div');
    card.className = "card text-dark shadow-sm";
    card.id = uniqueId;

    card.innerHTML = `
        <div class="card-body">
            <h3 class="card-title mb-2" id="title-${uniqueId}">${eventName}</h3>
            <h6 class="text-secondary mb-1">Tarih: ${new Date(targetDate).toLocaleString('tr-TR')}</h6>
            <h5 class="card-subtitle mb-3 text-muted">${mode === 'countdown' ? 'Geri Sayım' : 'İleri Sayım'}</h5>
            <p class="card-text fs-4" id="time-${uniqueId}">
                Sayaç başlıyor...
            </p>
            <div class="d-flex justify-content-end gap-2">
                <button class="btn btn-sm btn-warning" onclick="editCounter('${uniqueId}')">Düzenle</button>
                <button class="btn btn-sm btn-danger" onclick="deleteCounter('${uniqueId}')">Sil</button>
            </div>
        </div>
    `;

    resultDiv.appendChild(card);
}

function updateCounterDisplay(timeData, mode, uniqueId, eventName) {
    const timeDiv = document.getElementById('time-' + uniqueId);
    if (!timeDiv) return;

    if (timeData.expired && mode === 'countdown') {
        timeDiv.innerHTML = `<span class="text-success">${eventName} başladı!</span>`;
    } else {
        timeDiv.innerHTML = `
            ${timeData.days} gün 
            ${timeData.hours} saat 
            ${timeData.minutes} dakika 
            ${timeData.seconds} saniye
        `;
    }
}
