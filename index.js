// Packages
const axios = require('axios')
const cheerio = require('cheerio')

// Helper functions
const { getImgBase64String, getValidUrl } = require('./utilityFunction')

// Extractor class
class Metadata {
    constructor(data) {
        this.dom = cheerio.load(data)
    }

    getMetadata() {
        return {
            metaTags: this.getMetaTags(),
            ogTags: this.getOgTags(),
            twitterTags: this.getTwitterTags(),
        }
    }

    getMetaTags() {
        return {
            title: this.dom('meta[name="title"]')?.attr('content'),
            description: this.dom('meta[name="description"]')?.attr('content'),
            url: this.dom('meta[name="url"]')?.attr('content'),
        }
    }

    getOgTags() {
        return {
            title: this.dom('meta[property="og:title"]')?.attr('content'),
            description: this.dom('meta[property="og:description"]')?.attr('content'),
            site_name: this.dom('meta[property="og:site_name"]')?.attr('content'),
            url: this.dom('meta[property="og:url"]')?.attr('content'),
            image: this.dom('meta[property="og:image"]')?.attr('content'),
        }
    }

    getTwitterTags() {
        return {
            title: this.dom('meta[name="twitter:title"]')?.attr('content'),
            description: this.dom('meta[name="twitter:description"]')?.attr('content'),
            card: this.dom('meta[name="twitter:card"]')?.attr('content'),
            image: this.dom('meta[name="twitter:image"]')?.attr('content'),
        }
    }
}

module.exports = async (url, imageAsBase64 = false, extraDetails = false) => {
    if (!url)
        throw 'URL cannot be blank'

    url = getValidUrl(url)
    let res = await axios.get(url)

    const md = new Metadata(res.data);
    const metadata = md.getMetadata();

    let urlDetails = {
        'url': metadata.metaTags?.url || metadata.ogTags?.url || url,
        'domain': url.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/)[1],
        'title': metadata.metaTags?.title || metadata.ogTags?.title || metadata.twitterTags?.title,
        'description': metadata.metaTags?.description || metadata.ogTags?.description || metadata.twitterTags?.description,
        'image': metadata.ogTags?.image || metadata.twitterTags?.image,
        'imgBase64String': ''
    };

    // Return base64 string of image
    if (imageAsBase64 && urlDetails.image)
        urlDetails['imgBase64String'] = await getImgBase64String(urlDetails['image'])

    if (!extraDetails)
        return urlDetails;

    return {
        ...metadata,
        ...urlDetails
    }
}