function calculateTimeDifference(targetDate, mode) {
    const now = new Date();
    const target = new Date(targetDate);
    let difference;

    if (mode === 'countdown') {
        difference = target.getTime() - now.getTime();
    } else if (mode === 'countup') {
        difference = now.getTime() - target.getTime();
    } else {
        return null;
    }

    if (difference < 0 && mode === 'countdown') {
        return { expired: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, expired: false };
}
