function addText() {
    console.log("uppu")
    const text = document.getElementById('text-input').value;
    const fontFamily = document.getElementById('font-family-select').value;
    const fontSize = document.getElementById('font-size-select').value + 'px';
    const fontWeight = document.getElementById('font-weight').value;

    const textAlign = document.getElementById('text-align').value;
    const fontColor = document.getElementById('font-color-input').value;
    console.log(fontColor)  ;

    const leftSection = document.getElementById('left-section');
    const elemento = document.createElement('p');
    elemento.textContent = text;
    elemento.style.fontFamily = fontFamily;
    elemento.style.textAlign = textAlign;
    elemento.style.fontSize = fontSize;
    elemento.style.fontWeight = fontWeight
    elemento.style.color = fontColor;
    console.log(elemento)
    leftSection.appendChild(elemento);
    document.getElementById('text-input').value = '';
    // leftSection.textContent = `<p style="font-family: ${fontFamily}; font-size: ${fontSize}; color: ${fontColor};">${text}</p>`;
  }