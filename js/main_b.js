'use strict';

// sivulla on p elementti 'message', jossa olisi tarkoitus näyttää palvelimen vastaus
// valitse se, ja tallenna muuttujaan

// tee funktio 'upload', joka
// - estää lomakkeen lähetyksen
// - kirjoittaa 'message' elementtiin 'Upload in progress...'
// - hakee lomakkeesta file kentän
// - tekee FormData -olion ja lisää käyttäjän valitseman tiedoston siihen
// - lähettää tiedoston fetch -metodilla osoitteeseen 'upload.php'
// - kun tiedoston lähetys on valmis, kirjoittaa palvelimen vastauksen 'message' elementtiin

// tee tapahtumakuuntelija, joka kutsuu 'upload' funktiota, kun lomake lähetetään

const message = document.querySelector("#message");

document.querySelector("form").addEventListener('submit', (event) => {
  event.preventDefault();
  upload();
});

const upload = (event) =>
{
  const input = document.querySelector('input[type="file"]');
  const data = new FormData();
  data.append('fileToUpload', input.files[0]);

  console.log("input = " + input.files[0]);
  console.log("data = " + data);

  const settings = { method: 'POST', body: data};

  fetch('upload.php', settings).then((response) => {
    if (response.status !== 200) {
      message.innerHTML = `Eipä toiminu.`;
    }
    else {
      message.innerHTML = `Tiedoston lähetys onnistui!`;
    }
  }).catch((error) => {
    message.innerHTML = `Fetch feilas`;
  });
}