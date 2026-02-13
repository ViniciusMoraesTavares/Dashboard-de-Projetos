self.onmessage = (e) => {
  const d = e.data || {};
  if (d.type !== 'run') return;
  const send = (type, data) => postMessage({ type, data });
  const format = (args) => args.map((a) => {
    try { return typeof a === 'string' ? a : JSON.stringify(a); } catch { return String(a); }
  }).join(' ');
  const log = (...args) => send('log', format(args));
  const error = (...args) => send('error', format(args));
  try {
    const console = { log, error, warn: log, info: log };
    const print = log;
    const fn = new Function('console', 'print', d.code);
    fn(console, log);
    send('done', null);
  } catch (err) {
    error(err && err.stack ? err.stack : String(err));
    send('done', null);
  }
};

