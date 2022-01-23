module.exports = {
  hashGenerate() {
    let text = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    for(let i = 0; i < 5; i++) {
      text += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return text;
  }
}
