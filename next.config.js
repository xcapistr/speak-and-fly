const env = process.env.NODE_ENV

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io']
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['sk', 'en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'sk',
    localeDetection: env == 'production'
  }
}
