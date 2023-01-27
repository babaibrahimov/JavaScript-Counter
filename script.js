let content = document.querySelector(".content span");
let value = 0;

let btnMinus = document.getElementById('minus').addEventListener('click', () => {
    value--;
    content.textContent = value;
});

let btnReset = document.getElementById('res').addEventListener('click', () => {
    value = 0;
    content.textContent = value;
});

let btnPlus = document.getElementById('plus').addEventListener('click', () => {
    value++;
    content.textContent = value;
})

let copy = document.getElementById('copy')

copy.addEventListener('click', () => {
    // var copyText = rgbInp;
    // var rgb1 = rgbInp.value;
    // if(rgb1 != ""){

    //     copyText.select()
    //     copyText.setSelectionRange(0, 9999)
    //     document.execCommand('copy')
    //     rgbCopy.classList.remove("ri-file-copy-line")
    //     rgbCopy.classList.add("ri-file-copy-fill")
    //     rgbInp.value = "Copied!"
    //     setTimeout(() => rgbCopy.classList.remove("ri-file-copy-fill"), 1000)
    //     setTimeout(() => rgbCopy.classList.add("ri-file-copy-line"), 1000)
    //     setTimeout(() => rgbInp.value = rgb1, 1000)
    // } else {
    //     alert("It is empty broo. There are not anything for copy!")
    // }
    const copyContent = content.textContent;
    navigator.clipboard.writeText(copyContent);
    copy.classList.remove("ri-file-copy-line")
    copy.classList.add("ri-file-copy-fill")
    setTimeout(() => copy.classList.remove("ri-file-copy-fill"), 1000)
    setTimeout(() => copy.classList.add("ri-file-copy-line"), 1000)
})