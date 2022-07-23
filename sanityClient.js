import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '2r82mu91',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-07-23',
})
