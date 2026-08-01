document$.subscribe(() => {
  const palette = __md_get("__palette");
  const isDark = palette && palette.color && palette.color.scheme === "slate";

  if (window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: true,
      theme: isDark ? "dark" : "default",
      securityLevel: "loose"
    });
    window.mermaid.run();
  }
});
