function rot13(message){
    let letras = [" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let codex = [" ","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m",'N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];
    var cifrado = message.split("").reduce((s, d,) => s + (letras.indexOf(d)>0 ? codex[letras.indexOf(d)] : d),"",0)
  
    return cifrado
  }

  console.log(rot13('hola kase'))