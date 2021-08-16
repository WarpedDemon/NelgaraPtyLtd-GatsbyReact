// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contactus-js": () => import("./../../../src/pages/contactus.js" /* webpackChunkName: "component---src-pages-contactus-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-industries-js": () => import("./../../../src/pages/industries.js" /* webpackChunkName: "component---src-pages-industries-js" */),
  "component---src-pages-people-js": () => import("./../../../src/pages/people.js" /* webpackChunkName: "component---src-pages-people-js" */),
  "component---src-pages-services-js": () => import("./../../../src/pages/services.js" /* webpackChunkName: "component---src-pages-services-js" */)
}

