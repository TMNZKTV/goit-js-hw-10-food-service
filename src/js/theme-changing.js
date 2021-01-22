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

function changeThemeToDark() {
  refs.themeToggler.setAttribute('checked', 'true');
  refs.body.classList.remove(`${Theme.LIGHT}`);
  refs.body.classList.add(`${Theme.DARK}`);
  localStorage.setItem('theme', JSON.stringify(`${Theme.DARK}`));
}

function changeThemeToLight() {
  refs.themeToggler.removeAttribute('checked');
  refs.body.classList.remove(`${Theme.DARK}`);
  refs.body.classList.add(`${Theme.LIGHT}`);
  localStorage.setItem('theme', JSON.stringify(`${Theme.LIGHT}`));
}

function changeTheme() {
  if (refs.themeToggler.hasAttribute('checked')) {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
}

refs.themeToggler.addEventListener('change', changeTheme);
