# link-preview-extractor

**link-preview-extractor** is a simple and lightweight Node.js package designed to extract essential metadata from a given URL, such as the title, description, images, and more. It's perfect for applications that need to generate link previews like social media platforms, chat apps, and content-sharing sites.

## Features
- Extracts title, description, images, and more from URLs.
- Supports Open Graph (OG) and Twitter Card metadata.
- Easy-to-use API with minimal setup.
- Works with a wide range of websites.
- Lightweight and efficient for quick metadata extraction.

## Installation

```bash
npm install link-preview-extractor
```

## Usage

```javascript
const extractLinkPreview = require('link-preview-extractor');

const url = 'https://example.com';

extractLinkPreview(url)
  .then((metadata) => {
    console.log(metadata);
    // Output: { title: 'Example', description: 'An example site', image: 'https://example.com/image.png' }
  })
  .catch((err) => console.error(err));
```

## Output Example

```json
{
  "url": "https://www.youtube.com/watch?v=ofc_jAxW6Hs",
  "title": "How to Upload Your Local Website to cPanel Hosting Server || Visualize Code",
  "description": "Thank you for your support you can join us from the below links.Please ...",
  "domain": "youtu.be",
  "image": "https://i.ytimg.com/vi/ofc_jAxW6Hs/maxresdefault.jpg",
  "base64Image": "< BAS64 IMAGE STRING >",
  "metaTags": {
    "title": "How to Upload Your Local Website to cPanel Hosting Server || Visualize Code",
    "description": "Thank you for your support you can join us from the below links.Please ...",
    "url": ""
  },
  "ogTags": {
    "title": "How to Upload Your Local Website to cPanel Hosting Server || Visualize Code",
    "description": "Thank you for your support you can join us from the below links.Please ...",
    "site_name": "YouTube",
    "url": "https://www.youtube.com/watch?v=ofc_jAxW6Hs",
    "image": "https://i.ytimg.com/vi/ofc_jAxW6Hs/maxresdefault.jpg"
  },
  "twitterTags": {
    "title": "How to Upload Your Local Website to cPanel Hosting Server || Visualize Code",
    "description": "Thank you for your support you can join us from the below links.Please ...",
    "card": "player",
    "image": "https://i.ytimg.com/vi/ofc_jAxW6Hs/maxresdefault.jpg"
  }
}
```

## License

This project is licensed under the MIT License.