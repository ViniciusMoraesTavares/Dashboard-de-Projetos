/**
 * Formata hora com timezone e locale.
 * @param {{date?: Date, timezone: string, locale?: string, hour12?: boolean}} p
 * @returns {string}
 */
export function formatTime(p) {
  const date = p.date ?? new Date();
  const locale = p.locale ?? 'pt-BR';
  const hour12 = p.hour12 ?? false;
  return date.toLocaleTimeString(locale, {
    timeZone: p.timezone,
    hour12,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

/**
 * Cria um relógio DOM atualizado em intervalo fixo.
 * @param {string} timezone
 * @param {string} label
 * @param {number} intervalMs
 * @returns {HTMLElement}
 */
export function createClock(timezone, label, intervalMs = 1000) {
  const clockDiv = document.createElement('div');
  clockDiv.className = 'clock';

  const labelDiv = document.createElement('div');
  labelDiv.textContent = label;
  labelDiv.style.fontWeight = 'bold';
  labelDiv.style.marginBottom = '10px';

  const timeDiv = document.createElement('div');
  timeDiv.style.fontSize = '24px';

  clockDiv.appendChild(labelDiv);
  clockDiv.appendChild(timeDiv);

  function update() {
    timeDiv.textContent = formatTime({ timezone, locale: 'pt-BR', hour12: false });
  }

  update();
  setInterval(update, intervalMs);
  return clockDiv;
}

