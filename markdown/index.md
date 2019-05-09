# ESLint ile Kaliteli JavaScript Yazmak

İsmail Arılık

Yazılım Mühendisi

---

## Konular

1. Statik Kod Analizcisi Nedir?
2. ESLint Nedir?
3. Neden ESLint?
4. ESLint Kurulumu
5. ESLint Kullanımı
6. ESLint Yapılandırması
7. ESLint'teki Gömülü Kurallar
8. ESLint'in Genişleyebilirliği
9. ESLint'e Geçişte Nelere Dikkat Etmeliyiz?
10. Örnek
11. Soru-Cevap

notes:

- İlk üç konu 5 dakika
- 4-8 arası konular 10 dakika
- 9. konu 5 dakika
- 10. konu 10 dakika
- 11. konu 15 dakika

---

## Statik Kod Analizcisi Nedir?

- Kodu, "çalıştırmadan" analiz eden araçlara denir. <!-- .element: class="fragment" -->
- Lint, hint, vb. isimlerle de bilinirler. <!-- .element: class="fragment" -->

notes:

- "çalıştırmadan" kısmı önemli.

-

<pre>
<code data-trim data-line-numbers>
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
</code>
</pre>

---

## ESLint Nedir?

<li><a href="https://eslint.org/">https://eslint.org/</a></li> <!-- .element: class="fragment" -->
<li>JavaScript için bir statik kod analizcisidir.</li> <!-- .element: class="fragment" -->

---

## Neden ESLint?

- Popüler <!-- .element: class="fragment" -->
- Genişleyebilir (Her kural bir eklentidir.) <!-- .element: class="fragment" -->

---

## ESLint Kurulumu

<li>Node.js'i kurun <a href="https://nodejs.org/">https://nodejs.org/</a></li> <!-- .element: class="fragment" -->
<li>ESLint'i kurun: <code>npm install -g eslint</code></li> <!-- .element: class="fragment" -->
<li>ESlint'i ilklendirin: <code>eslint --init</code></li> <!-- .element: class="fragment" -->
<li> Geliştirme ortamınızı hazırlayın <a href="https://eslint.org/docs/user-guide/integrations">https://eslint.org/docs/user-guide/integrations</a></li> <!-- .element: class="fragment" -->

notes:

- `eslint --init`'i göster.

---

## ESLint Kullanımı

<li>Komut satırı aracılığıyla: <code>eslint .</code></li> <!-- .element: class="fragment" -->
<li>Editörünüz aracılığıyla.</li> <!-- .element: class="fragment" -->

notes:

- `eslint .`'yı göster.
- Editör aracılığıyla kullanımı göster.

-

### Komut Satırı Seçenekleri

```sh
eslint [options] file.js [file.js] [dir]
```

notes:

- Komut satırı seçeneklerini göster (eslint -h).
- --fix ve fix-dry-run'ı göster.

---

## ESLint Yapılandırması

- .eslintrc
- .eslintignore

-

<pre>
<code data-trim data-line-numbers>
module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:all",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        quotes: [ 'error', 'single']
    }
};
</code>
</pre>

-

<pre>
<code data-trim data-line-numbers>
# .config dizinini boşver
.config
# Karma yapılandırma dosyasını boşver
karma.conf.js
# PostCSS yapılandırma dosyasını boşver
postcss.config.js
# Webpack yapılandırma dosyasını boşver
webpack.config.js
</code>
</pre>

---

## ESLint'teki Gömülü Kurallar

<li><a href="https://eslint.org/docs/rules/">https://eslint.org/docs/rules/</a></li> <!-- .element: class="fragment" -->

notes:

- Gömülü kuralları değiştirmeyi göster.
- Gömülü kurallar listesinde `eslint:recommended` ve `eslint:all`'da bulunanları göster.
- Gömülü kurallar sayfasında otomatik düzeltilebilir kuralları göster.

---

## ESLint'in Genişleyebilirliği

<li>Paylaşılabilir yapılandırmalar (Shareable configs) <a href="https://eslint.org/docs/developer-guide/shareable-configs">https://eslint.org/docs/developer-guide/shareable-configs</a></li> <!-- .element: class="fragment" -->
<li>Eklentiler <a href="https://eslint.org/docs/developer-guide/working-with-plugins">https://eslint.org/docs/developer-guide/working-with-plugins</a></li> <!-- .element: class="fragment" -->

notes:

- eslintrc'deki extends'i göster.
- Paylaşılabilir yapılandırmaların eslint-config-* şeklinde bulunabileceğini anlat (örneğin, eslint-config-standard).
- eslintrc'deki plugins'i göster
- Eklentilerin eslint-plugin-* şeklinde bulunabileceğini anlat (örneğin eslint-plugin-angular).
- Paylaşılabilir yapılandırmalar ve eklentiler arasındaki farkları anlat.

---

##  ESLint'e Geçişte Nelere Dikkat Etmeliyiz?

- En başta, ekibin geleneklerini de göz önüne alarak, kuralları olabildiğince belirlemeliyiz. <!-- .element: class="fragment" -->
- "eslint:all"u kullanmamalıyız. <!-- .element: class="fragment" -->
- Tüm sorunları bir anda düzeltmemeliyiz. <!-- .element: class="fragment" -->
- Otomatik düzeltmeye tedbirli yaklaşmalıyız. <!-- .element: class="fragment" -->

notes:

- İlk madde için: Daha sonra bir kuralı değiştirmek, kodda boşuna yapılmış düzeltme anlamına gelebilir, yani zaman kaybı.
- İkinci madde için: "eslint:all" her ESLint sürümünde değişebileceği için ürününüzün inşa sürecinde hata çıkmasına neden olabilir. "eslint:recommended" ise değişmez.
- Üçüncü madde için: Birleştirme çakışmalarına (merge conflicts) neden olabilir. Ayrıca ortaya çıkabilecek hataların nedenlerini takibi zorlaştırır.
- Dördüncü madde için: Ne olur ne olmaz diye kontrol etmekte fayda var.

---

## Örnek

Şimdi bir örnek üzerinde düzeltmeler yapalım.

notes:

- Önce otomatik düzeltmeyi dene.
- Sonra sorunları tek tek düzelt.

---

##  Soru-Cevap

Katıldığınız için teşekkür ederim.
Sorularınız?
