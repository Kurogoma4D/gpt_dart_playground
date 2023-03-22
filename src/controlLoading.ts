function obtainLoading(): HTMLElement | null {
  return document.getElementById('loading');
}

function obtainSubmit(): HTMLButtonElement | null {
  const form = document.getElementById('submit-form');
  return form?.querySelector(
    'button[type="submit"]'
  ) as HTMLButtonElement | null;
}

export function enableLoading() {
  const loading = obtainLoading();
  loading?.style.setProperty('display', 'block');
  const submit = obtainSubmit();
  if (submit) {
    submit.disabled = true;
  }
}

export function disableLoading() {
  const loading = obtainLoading();
  loading?.style.setProperty('display', 'none');
  const submit = obtainSubmit();
  if (submit) {
    submit.disabled = false;
  }
}
