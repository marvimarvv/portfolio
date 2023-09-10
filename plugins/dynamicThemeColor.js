export default function () {
  if (process.client) {
    let element = document.documentElement;
    let cssValue = getComputedStyle(element)
      .getPropertyValue("--background")
      .trim();

    let metaThemeColor = document.querySelector("meta[name=theme-color]");

    // If the meta tag doesn't exist, create it
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }

    // Set the theme color
    metaThemeColor.setAttribute("content", cssValue);
  }
}
