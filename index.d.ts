declare interface MetaTags {
    url: string;
    title: string;
    description: string;
}

declare interface Ogtags {
    title: string,
    description: string,
    site_name: string,
    url: string,
    image: string,
}

declare interface TwitterTags {
    title: string,
    description: string,
    card: string,
    image: string,
}

declare interface UrlPreviewResult {
    url: string;
    title: string;
    description: string;
    domain: string;
    image: string;
    base64Image?: string,
    metaTags?: MetaTags,
    ogTags?: Ogtags,
    twitterTags?: TwitterTags
}

declare function url_preview_extractor(
    uri: string,
    imageAsBase64?: boolean = false,
    extraDetails?: boolean = false,
): Promise<UrlPreviewResult>;

export = url_preview_extractor;