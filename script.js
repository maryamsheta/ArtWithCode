const buttonsContainer = document.getElementById('artwork-buttons');
const iframeContainer = document.getElementById('iframe-container');
let buttons = [];

fetch('art.json')
  .then(res => {
    if (!res.ok) throw new Error("art.json not found or server not running.");
    return res.json();
  })
  .then(artworks => {
    artworks.forEach((art, index) => {
      const btn = document.createElement('button');
      btn.className = 'tab-btn w-[400px] h-[400px] px-3 py-2 rounded bg-gray-200 hover:bg-gray-300 text-left';
      if (index === 0) btn.classList.add('active-tab');
      btn.dataset.src = art.folder;
      btn.innerHTML = `
  <div>${art.title}</div>
  ${art.subtitle ? `<div class="subtitle text-sm text-gray-500">${art.subtitle}</div>` : ''}
`;


      buttonsContainer.appendChild(btn);
      buttons.push(btn);

      if (index === 0) loadArtwork(art.folder, btn);

      btn.addEventListener('click', () => loadArtwork(art.folder, btn));
    });
  })
  .catch(err => {
    console.error(err);
  });


function loadArtwork(src, activeBtn) {
  iframeContainer.innerHTML = `<iframe src="${src}"></iframe>`;
  buttons.forEach(b => b.classList.remove('active-tab'));
  activeBtn.classList.add('active-tab');
}
