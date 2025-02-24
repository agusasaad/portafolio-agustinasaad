export default function robots() {
  return {
    rules: [
      {
        userAgent: "",
        allow: ["/"],
        disallow: ["/detail"],
      },
    ],
    sitemap: "https://agustinasaad.com.ar/sitemap.xml",
  };
}
