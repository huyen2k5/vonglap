function a() {
    let text = "";
    let i = 11;
    do {
        text += "<br>The number is" + i;
        i++;
    }
    while (i < 10);
    document.write(text);
}

