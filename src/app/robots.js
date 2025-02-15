export default function robots() {
  return {
    rules: [
      {
        userAgent: "",
        allow: ["/"],
        disallow: ["/detail"],
      },
    ],
    sitemap: "https://portafolio-agustinasaad.vercel.app/sitemap.xml",
  };
}
