let countdownInterval;

function updateCountdown() {
  const title = document.getElementById('inputTitle').value || '🚀 Product Launch';
  const target = document.getElementById('targetDate').value;
  document.getElementById('event-title').innerText = `Countdown to: ${title}`;
  if (countdownInterval) clearInterval(countdownInterval);

  const endTime = new Date(target).getTime();
  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = endTime - now;
    if (distance < 0) {
      clearInterval(countdownInterval);
      alert('🎉 The event has started!');
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }, 1000);
}

function toggleTheme() {
  document.body.classList.toggle('light');
}