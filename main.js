const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click',() => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});


// UpNext hover Play

const upNextVideo = document.querySelector('.upNext');

upNextVideo.addEventListener('mouseover', (e) => {
    const videoId = e.target;
    if (videoId.id === 'video') { videoId.setAttribute('controls', 'controls'); }
});

upNextVideo.addEventListener('mouseout', (e) => {
    const videoId = e.target;
    
    if (videoId.id === 'video') { videoId.removeAttribute('controls', 'controls'); }
});


