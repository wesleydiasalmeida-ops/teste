// Array contendo a lista de imagens do site.
// Você pode alterar as URLs e os títulos abaixo conforme a sua necessidade.
const listaImagens = [
    {
        titulo: "Estudos Digitais - Escola",
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop"
    },
    {
        titulo: "Tecnologia e Educação",
        url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop"
    },
    {
        titulo: "Interface do Usuário Google",
        url: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=600&auto=format&fit=crop"
    },
    {
        titulo: "Ambiente Computacional",
        url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop"
    },
    {
        titulo: "Pesquisa e Desenvolvimento",
        url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop"
    },
    {
        titulo: "Espaço de Trabalho",
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop"
    }
];

const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');

// Carrega as imagens dinamicamente na página
function renderGallery() {
    listaImagens.forEach(item => {
        // Cria a estrutura do card
        const card = document.createElement('div');
        card.className = 'image-card';
        
        card.innerHTML = `
            <div class="image-wrapper">
                <img src="${item.url}" alt="${item.titulo}" loading="lazy">
            </div>
            <div class="image-info">
                <h3>${item.titulo}</h3>
            </div>
        `;
        
        // Evento de clique para abrir o Lightbox (Zoom)
        card.addEventListener('click', () => {
            lightboxImg.src = item.url;
            lightboxImg.alt = item.titulo;
            lightbox.style.display = 'flex';
        });

        galleryGrid.appendChild(card);
    });
}

// Fecha o Lightbox
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = ""; // Limpa o link ao fechar
});

// Fecha o Lightbox caso o usuário clique fora da imagem
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxImg.src = "";
    }
});

// Inicializa a galeria
document.addEventListener('DOMContentLoaded', renderGallery);
