const dials = document.querySelectorAll('.dial-unit');
  const tunedLabel = document.getElementById('tunedLabel');
  const master = document.getElementById('masterSwitch');

  dials.forEach(d => {
    d.addEventListener('click', () => {
      dials.forEach(o => o.classList.remove('active'));
      d.classList.add('active');
      tunedLabel.textContent = d.dataset.wing;
    });
  });

  master.addEventListener('click', () => {
    dials.forEach(o => o.classList.remove('active'));
    tunedLabel.textContent = 'Full Archive';
  });

  const entries = [
    'EG-014 <b>→ In the Field</b>',
    'EG-009 <b>→ Catalogued</b>',
    'EG-021 <b>→ In the Field</b>',
    'EG-006 <b>opened</b>',
    'EG-017 <b>→ Catalogued</b>',
    'EG-003 <b>→ Shelved</b>'
  ];
  const track = document.getElementById('tickerTrack');
  track.innerHTML = entries.map(e => `<span>${e}</span>`).join('') +
                     entries.map(e => `<span>${e}</span>`).join('');
