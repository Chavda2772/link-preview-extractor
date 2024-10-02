# url-preview-extractor

**url-preview-extractor** is a simple and lightweight Node.js package designed to extract essential metadata from a given URL, such as the title, description, images, and more. It's perfect for applications that need to generate link previews like social media platforms, chat apps, and content-sharing sites.

## Features
- Extracts title, description, images, and more from URLs.
- Supports Open Graph (OG) and Twitter Card metadata.
- Easy-to-use API with minimal setup.
- Works with a wide range of websites.
- Lightweight and efficient for quick metadata extraction.

## Installation

```bash
npm install url-preview-extractor
```

## Usage

```javascript
const extractUrlPreview = require('url-preview-extractor');

const url = 'https://example.com';

extractUrlPreview(url)
  .then((metadata) => {
    console.log(metadata);
    // Output: { title: 'Example', description: 'An example site', image: 'https://example.com/image.png' }
  })
  .catch((err) => console.error(err));
```

## Output Example

```json
{
  "title": "Example Site",
  "description": "This is an example description for the website.",
  "image": "https://example.com/example-image.jpg",
  "url": "https://example.com"
}
```

## License

This project is licensed under the MIT License.