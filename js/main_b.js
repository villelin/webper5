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
