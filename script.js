
  // ── Navigation ──
  function goTo(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  // ── Login handler ──
  function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const pass  = document.getElementById('login-password').value.trim();
    if (!email || !pass) {
      alert('Please enter both email and password.');
      return;
    }
    populateSettings(email, '');
    goTo('screen-settings');
  }

  // ── Register handler ──
  function handleRegister() {
    const name  = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    if (!name || !email) {
      alert('Please fill in all required fields.');
      return;
    }
    populateSettings(email, name);
    goTo('screen-settings');
  }

  // ── Populate settings screen with user data ──
  function populateSettings(email, name) {
    const displayName = name || email.split('@')[0];
    document.getElementById('settings-name').textContent = displayName;
    document.getElementById('settings-email').textContent = email;

    // Generate initials for avatar
    const parts = displayName.split(' ');
    const initials = parts.map(p => p[0]).join('').toUpperCase().slice(0, 2);
    document.getElementById('avatar-initials').textContent = initials;
  }

  // ── Login button color: grey → purple when both fields filled ──
  ['login-email', 'login-password'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      const e = document.getElementById('login-email').value.trim();
      const p = document.getElementById('login-password').value.trim();
      const btn = document.getElementById('login-btn');
      if (e && p) {
        btn.className = 'btn btn-primary';
      } else {
        btn.className = 'btn btn-gray';
      }
    });
  });
