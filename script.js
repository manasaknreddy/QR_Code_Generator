const container = document.querySelector(".container");
qrInput = container.querySelector(".form input");
generateBtn = container.querySelector(".form button");
Img = container.querySelector(".qr-code img");

let preValue;

generateBtn.addEventListener("click", () => {


    let Value = qrInput.value.trim();
    if (!Value || preValue === Value) return;
    preValue = Value;
    generateBtn.innerText = "Generating QR Code...";
    Img.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Value}`;

    Img.addEventListener("load", () => {
        container.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        container.classList.remove("active");
        preValue = "";
    }
});

