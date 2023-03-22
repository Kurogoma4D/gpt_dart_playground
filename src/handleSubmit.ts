import { callApi } from './callApi';
import { enableLoading, disableLoading } from './controlLoading';

export async function handleSubmit(event: Event) {
  event.preventDefault();
  enableLoading();

  const form = event.target as HTMLFormElement;
  const requirements = form.prompt.value as string;
  const apiKey = form.apiKey.value as string;

  const result = await callApi(requirements, apiKey);

  if (result === '') {
    disableLoading();
    return;
  }

  const container = document.getElementById('app-container');
  const previousFrame = container?.querySelector('div>iframe');
  if (previousFrame) {
    previousFrame.parentElement?.remove();
  }

  disableLoading();

  container?.appendChild(createCodeBlock(result));

  const previousScript = document.getElementById('dart-pad');
  previousScript?.remove();

  const script = document.createElement('script');
  script.id = 'dart-pad';
  script.src = 'https://dartpad.dev/inject_embed.dart.js';
  script.type = 'text/javascript';

  document.body.appendChild(script);
}

function createCodeBlock(content: string): HTMLElement {
  const pre = document.createElement('pre');
  const code = document.createElement('code');

  code.id = 'code-block';
  code.className = 'language-run-dartpad:theme-dark:mode-inline:split-true';
  code.textContent = content;
  pre.appendChild(code);
  return pre;
}
