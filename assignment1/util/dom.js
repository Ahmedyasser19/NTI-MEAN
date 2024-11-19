export { app };

const app = await getApp();

function htmlLoaded() {
  return new Promise((resolve) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", resolve);
    } else {
      resolve();
    }
  });
}

function initDom() {
  const root = document.getElementById("root");
  if (!root) {
    console.error("Failed to initialize the DOM: 'root' element not found.");
    throw new Error("Root element is missing.");
  }
  return root;
}

async function getApp() {
  await htmlLoaded();
  return initDom();
}
