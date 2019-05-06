var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('Hesap makinesi programına hoşgeldiniz!')

rl.question("İşlem? (+,-,*,/) ", function (işlem) {
    rl.question("İlk sayı? ", function (ilkSayı) {
        rl.question("İkinci sayı? ", function (ikinci_sayı) {
            ilkSayı = parseInt(ilkSayı);
            ikinci_sayı = parseInt(ikinci_sayı);
            var sonuç;

            if (işlem == '+') {
                sonuç = ilkSayı + ikinci_sayı;
            } else if (işlem == '-') {
                sonuç = ilkSayı - ikinci_sayı;
            } else if (işlem == '*') {
                sonuç = ilkSayı * ikinci_sayı;
            } else if (işlem == '/') {
                sonuç = ilkSayı / ikinci_sayı;
            }

            console.log(sonuç);

            rl.close();
        })
    })
})