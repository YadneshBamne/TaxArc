import imageUrlBuilder from '@sanity/image-url'
import { client } from '../sanity/client'

const builder = imageUrlBuilder(client)

/**
 * Generate optimized image URL from Sanity image object
 * @param {object} source - Sanity image object
 * @param {number} width - Optional image width
 * @param {number} height - Optional image height
 * @returns {string} - Optimized image URL
 */
const urlFor = (source, width = null, height = null) => {
  if (!source) return null
  let url = builder.image(source)

  if (width) url = url.width(width)
  if (height) url = url.height(height)

  return url.auto('format').url()
}

/**
 * Get responsive image URLs for different breakpoints
 * @param {object} source - Sanity image object
 * @returns {object} - URLs for different sizes
 */
const getResponsiveImages = (source) => {
  return {
    mobile: urlFor(source, 640),
    tablet: urlFor(source, 1024),
    desktop: urlFor(source, 1920),
    thumbnail: urlFor(source, 300),
  }
}

/**
 * Custom hook for Sanity image URL generation
 * @returns {object} - { urlFor, getResponsiveImages }
 */
export const useSanityImage = () => {
  return { urlFor, getResponsiveImages }
}

export default useSanityImage
