export const getGift = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=12&api_key=EPZo7Ux9T0HJRiNklvxCmy9CHaIAhfdf&q=${ encodeURI(category) }`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}