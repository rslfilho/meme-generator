const imageInput = document.getElementById('meme-insert');
const img = document.getElementById('meme-image');

function getText() {
  const textInput = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');

  textInput.addEventListener('keyup', (event) => {
    memeText.innerHTML = event.target.value;
  });
}

function getImage() {
  imageInput.addEventListener('change', (event) => {
    img.src = URL.createObjectURL(event.target.files[0]); // Pesquisa do colega Eduardo Linhares da Turma 12. Source: https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
    img.onload = () => {
      URL.revokeObjectURL(event.target.files[0]);
    };
  });
}

function createCustomButton(id, text) {
  const optionsContainer = document.getElementById('options');
  const customButton = document.createElement('button');

  customButton.className = 'custom-button';
  customButton.id = id;
  customButton.innerHTML = text;

  optionsContainer.appendChild(customButton);
}

function customizeButton() {
  const buttons = document.querySelectorAll('.custom-button');
  const buttonBorder = ['3px dashed red', '5px double blue', '6px groove green'];
  const memeContainer = document.getElementById('meme-image-container');

  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', () => {
      memeContainer.style.border = buttonBorder[index];
    });
  }
}

function createImgReady() {
  const parentElement = document.getElementById('meme-ready');
  const imgId = ['meme-1', 'meme-2', 'meme-3', 'meme-4'];

  for (let index = 0; index < imgId.length; index += 1) {
    const memeReady = document.createElement('img');

    memeReady.id = imgId[index];
    memeReady.className = 'meme1-4';
    memeReady.src = `./imgs/meme${index + 1}.png`;

    parentElement.appendChild(memeReady);
  }
}

function setImgReadyToMeme() {
  const imgReady = document.querySelectorAll('.meme1-4');

  for (let index = 0; index < imgReady.length; index += 1) {
    imgReady[index].addEventListener('click', (event) => {
      img.src = event.target.src;
    });
  }
}

getText();
getImage();
createCustomButton('fire', 'Fire &#128293');
createCustomButton('water', 'Water &#128167');
createCustomButton('earth', 'Earth \u26f0');
customizeButton();
createImgReady();
setImgReadyToMeme();
