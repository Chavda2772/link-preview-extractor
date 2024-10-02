// Packages
const axios = require('axios')

async function getImgBase64String(url) {
    let res
    try {
        res = await axios.get(url, { responseType: 'arraybuffer' })
    } catch (error) {
        return
    }

    const imgBuffer = Buffer.from(res.data, 'binary')
    return imgBuffer.toString('base64')
}

function getValidUrl(url) {
    if (/^(:\/\/)/.test(url)) return `http${url}`
    else if (!/^(f|ht)tps?:\/\//i.test(url)) return `http://${url}`

    return url
}

module.exports = {
    getImgBase64String,
    getValidUrl
}