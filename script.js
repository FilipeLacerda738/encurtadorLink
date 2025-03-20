const encurtabtn = document.getElementById('encurtar-btn');
const recarregarbtn = document.getElementById('recarregar-btn');

encurtabtn.addEventListener('click', URLencurtada);

function URLencurtada(){
    let URLoriginal = document.getElementById("URLoriginal").value;
    const api = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(URLoriginal);
    URLencurtadaTextArea = document.getElementById("URLencurtada");

    fetch(api).then(res => res.text()).then(data => {
        URLencurtadaTextArea.value = data;
    }).catch(error => {
        URLencurtadaTextArea.value = "Error: Não é possível encurtar o URL!"
    });

}

recarregarbtn.addEventListener('click', () => {
    location.reload();
});