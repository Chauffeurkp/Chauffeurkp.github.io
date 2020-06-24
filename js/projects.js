const modalOverlay = document.querySelector('.modalOverlay');
const modal = document.querySelector('.modal');

const openModal = () => {
    modalOverlay.style.display = 'flex';
    modalOverlay.offsetLeft; // wait for rerender.
    modalOverlay.style.opacity = 1;
};

const closeModal = () => {
    modalOverlay.style.opacity = 0;
    setTimeout(() => {
        modal.innerHTML = '';
        modalOverlay.style.display = 'none';
    }, 400);
};

const youtubeEmbedCode = `
    <div class="ratio-16-9">
        <iframe width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
`;

modalOverlay.addEventListener('click', closeModal);

document.querySelectorAll('.videoBtn').forEach(el => {
    el.addEventListener('click', () => {
        modal.innerHTML = youtubeEmbedCode;
        modal.querySelector('iframe').src = el.dataset.src;
        openModal();
    });
});

document.querySelectorAll('.projectImage').forEach(el => {
    el.addEventListener('click', () => {
        modal.innerHTML = '';
        const img = new Image();
        img.src = el.src;
        modal.appendChild(img);
        openModal();
    });
});
