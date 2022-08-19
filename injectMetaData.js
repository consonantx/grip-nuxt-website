// read file and convert content to string
var fs = require('fs');
const { parse, HTMLElement } = require('node-html-parser')

console.log(process.env)

var file = fs.readFileSync('./.output/public/index.html', 'utf8');
var content = parse(file.toString());

".vercel_build_output/static";

const htmlHeadElement = content.querySelector('head');
// replace content

const metaTags = [
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
  },
  {
    property: "og:title",
    name: "og:title",
    content: "One Channel, All Payments Everything",
  },
  {
    property: "title",
    name: "title",
    content: "One Channel, All Payments Everything",
  },
  {
    property: "og:site_name",
    name: "og:site_name",
    content: "Grip",
  },
  {
    property: "site_name",
    name: "site_name",
    content: "Grip",
  },
  {
    property: "og:url",
    name: "og:url",
    content: "https://grip-nuxt-website.vercel.app",
  },
  {
    property: "og:description",
    name: "og:description",
    content:
      "Access, manage and pay from all your bank accounts and fintech wallets, anywhere in the world, with one global card and one super app.",
  },
  {
    property: "og:description",
    name: "description",
    content:
      "Access, manage and pay from all your bank accounts and fintech wallets, anywhere in the world, with one global card and one super app.",
  },
  {
    property: "og:type",
    name: "og:type",
    content: "website",
  },
  {
    property: "type",
    name: "type",
    content: "website",
  },
  {
    property: "og:image",
    name: "og:image",
    content: "https://grip-nuxt-website.vercel.app/og_image.png",
  },
  {
    name: "image",
    content: "https://grip-nuxt-website.vercel.app/og_image.png",
  },
  {
    name: "twitter:card",
    content: "summary_large_image",
  },
  {
    name: "twitter:creator",
    content: "@trygripapp",
  },
  {
    name: "twitter:title",
    content: "One Channel, All Payments Everything",
  },
  {
    name: "twitter:description",
    content:
      "Access, manage and pay from all your bank accounts and fintech wallets, anywhere in the world, with one global card and one super app.",
  },
  {
    name: "twitter:image",
    content: "https://grip-nuxt-website.vercel.app/og_image.png",
  },
];

for (const metaTag in metaTags) {
  if (Object.hasOwnProperty.call(metaTags, metaTag)) {
    const element = metaTags[metaTag];
    const metaElement = new HTMLElement('meta', element.name);

    if (element.property) metaElement.setAttribute("property", element.property);
    if (element.content) metaElement.setAttribute("content", element.content);
    if (element.name) metaElement.setAttribute("name", element.name);

    htmlHeadElement.appendChild(metaElement);
  }
}

fs.writeFileSync('./.output/public/index.html', content.toString());
console.log('html metdata updated');