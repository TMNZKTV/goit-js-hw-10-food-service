const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  themeToggler: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const savedTheme = localStorage.getItem('theme');

if (savedTheme === JSON.stringify(`${Theme.DARK}`)) {
  refs.themeToggler.setAttribute('checked', 'true');
  refs.body.classList.add(`${Theme.DARK}`);
} else {
  refs.themeToggler.removeAttribute('checked');
  refs.body.classList.add(`${Theme.LIGHT}`);
}

function changeTheme() {
  if (refs.themeToggler.hasAttribute('checked')) {
    refs.themeToggler.removeAttribute('checked');
    refs.body.classList.remove(`${Theme.DARK}`);
    refs.body.classList.add(`${Theme.LIGHT}`);
    localStorage.setItem('theme', JSON.stringify(`${Theme.LIGHT}`));
  } else {
    refs.themeToggler.setAttribute('checked', 'true');
    refs.body.classList.remove(`${Theme.LIGHT}`);
    refs.body.classList.add(`${Theme.DARK}`);
    localStorage.setItem('theme', JSON.stringify(`${Theme.DARK}`));
  }
}

refs.themeToggler.addEventListener('change', changeTheme);
