# 👍 Landing Starter Kit
> Nuxt app template project with my customisation.


## What is included in the project
[Nuxt 2](https://nuxtjs.org/)<br>
[Tailwind CSS](https://tailwindcss.com/)<br>
[Firebase](https://firebase.google.com/)

## Additional Plugins to consider
[Oruga - UI Components](https://oruga.io/)<br>
[Vant - Mobile UI Components](https://vant-contrib.gitee.io/vant/#/en-US/)<br>
[VueMotion - components in animation](https://motion.vueuse.org/)

## Examples of code and components
[Nuxt, HTML, CSS - Components](https://heartcode.fuxing.dev/)

## Nuxt Firebase Tutorial
[Firebase Form Tutorial](https://youtu.be/btQWHig29pA)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate

# build for production and launch server
$ npm run start
```

## UTM

```bash
# Utm Url
?utm_source=website_com&utm_medium=news&utm_term=name_conference&utm_content=article&utm_campaign=moscow
```

## JavaScript UTM

```bash
  // парсим гет-параметры
  var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
      function(p,e){
        var a = e.split('=');
        p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return p;
      },
      {}
  );
  if (params.utm_source) {
    $('#form-input-utm_source').val(params.utm_source);
  }
  if (params.utm_medium) {
    $('#form-input-utm_medium').val(params.utm_medium);
  }
  if (params.utm_term) {
    $('#form-input-utm_term').val(params.utm_term);
  }
  if (params.utm_content) {
    $('#form-input-utm_content').val(params.utm_content);
  }
  if (params.utm_campaign) {
    $('#form-input-utm_campaign').val(params.utm_campaign);
  }
```
