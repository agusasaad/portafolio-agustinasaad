export default function robots() {
  return {
    rules: [
      {
        userAgent: "",
        allow: ["/"],
        disallow: ["/datail"],
      },
    ],
    sitemap: "https://portafolio-agustinasaad.vercel.app/sitemap.xml",
  };
}
