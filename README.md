# link-preview-extractor

**link-preview-extractor** is a lightweight Node.js package that extracts metadata from URLs, including title, description, images, and Open Graph/Twitter Card tags. It's ideal for generating rich previews for links, commonly used in social media, chat apps, and content-sharing platforms.

## Features
- Extracts metadata including title, description, and images from URLs.
- Supports Open Graph (OG) and Twitter Card metadata.
- Optionally returns images as base64 strings.
- Simple to use with a clean API.
- Option to return additional metadata details if needed.

## Installation

Install the package using npm:

```bash
npm install link-preview-extractor
```

## Usage

### Basic Usage

```javascript
const extractLinkPreview = require('link-preview-extractor');

const url = 'https://example.com';

extractLinkPreview(url)
  .then((metadata) => {
    console.log(metadata);
    // Output: { url, domain, title, description, image }
  })
  .catch((err) => console.error(err));
```

### Example Output

```json
{
  "url": "https://example.com",
  "domain": "example.com",
  "title": "Example Site",
  "description": "This is an example description.",
  "image": "https://example.com/image.jpg"
}
```

## Advanced Usage

### 1. `imageAsBase64` (Set to `true`)

You can request the image as a base64 string by setting the `imageAsBase64` parameter to `true`. This is useful if you want to embed images directly into your app without making additional requests.

```javascript
extractLinkPreview(url, true)
  .then((metadata) => {
    console.log(metadata);
    // Output includes image as a base64 string
  })
  .catch((err) => console.error(err));
```

#### Example Output (with `imageAsBase64: true`):

```json
{
  "url": "https://example.com",
  "domain": "example.com",
  "title": "Example Site",
  "description": "This is an example description.",
  "image": "https://example.com/image.jpg",
  "imgBase64String": "<BASE64 IMAGE STRING>"
}
```

### 2. `extraDetails` (Set to `true`)

When you set the `extraDetails` parameter to `true`, additional metadata including `metaTags`, `ogTags`, and `twitterTags` is returned in the response.

```javascript
extractLinkPreview(url, false, true)
  .then((metadata) => {
    console.log(metadata);
    // Output includes extra metadata details like metaTags, ogTags, and twitterTags
  })
  .catch((err) => console.error(err));
```

#### Example Output (with `extraDetails: true`):

```json
{
  "url": "https://example.com",
  "domain": "example.com",
  "title": "Example Site",
  "description": "This is an example description.",
  "image": "https://example.com/image.jpg",
  "imgBase64String": "",
  "metaTags": {
    "title": "Example Meta Title",
    "description": "This is an example meta description.",
    "url": "https://example.com"
  },
  "ogTags": {
    "title": "Example OG Title",
    "description": "This is an example OG description.",
    "site_name": "Example Site",
    "url": "https://example.com",
    "image": "https://example.com/og-image.jpg"
  },
  "twitterTags": {
    "title": "Example Twitter Title",
    "description": "This is an example Twitter description.",
    "card": "summary_large_image",
    "image": "https://example.com/twitter-image.jpg"
  }
}
```

## License

This project is licensed under the MIT License.
