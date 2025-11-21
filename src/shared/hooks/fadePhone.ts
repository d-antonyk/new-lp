export default function fadePhone(): void {
  if (typeof document === 'undefined') return;

  const elements = document.querySelectorAll<HTMLElement>('.fade1');
  const elements2 = document.querySelectorAll<HTMLElement>('.fade2');

  elements.forEach((e) => {
    e.classList.add('fade1-show');
  });
}
