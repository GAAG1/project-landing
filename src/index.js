const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8d0BaJBPaAgee_IL8_Sd8g&part=snippet%2Cid&order=date&maxResults=5';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '335bbadb39msh7c289c90463fa79p1042bcjsn57d9e46173b4',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div>
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-black-700">
            <span aria-hidden="true" class="absolute inset-0"></span> ${video.snippet.title}
           
          </h3>
        </div>
      </div>
    `).slice(0, 10).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();