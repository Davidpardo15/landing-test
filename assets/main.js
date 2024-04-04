const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCH_zBfX_o5GDZwevkh1jl9Q&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2b92b44830mshbcc9a18156bff2fp127cafjsn6320db0a5021',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(url) {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;

} 

(async () => {
    try{
        const videos = await fetchData(url);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0, 4).join('')}
        `;
        content.innerHTML = view;
    } catch(error){
        console.log(error);
    }
})();
