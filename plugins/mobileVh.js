// https://dev.to/maciejtrzcinski/100vh-problem-with-ios-safari-3ge9

export default defineNuxtPlugin(() => {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();
});
