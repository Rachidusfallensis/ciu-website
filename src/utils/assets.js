export const getAssetPath = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // import.meta.env.BASE_URL is '/ciu-website/' in production and '/' in dev
    return `${import.meta.env.BASE_URL}${cleanPath}`;
};
