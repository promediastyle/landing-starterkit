# Landing Starter Kit

## What is included in the project
[NuxtJS](https://nuxtjs.org/)<br>
[Tailwind CSS](https://tailwindcss.com/)<br>
[Oruga UI Components](https://oruga.io/)<br>

## Nuxt Firebase

[👍 Firebase Form Tutorial](https://youtu.be/btQWHig29pA)

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

## Sequence

```bash
# 001 (Form)
form.ru

# 002 (Send)
type="submit" Registration

# 003 (Save Data)
.json or .js

# 004 (Show Data)
FormData.vue
```

## UTM

```bash
# Utm Url
?utm_source=website_com&utm_medium=news&utm_term=name_conference&utm_content=article&utm_campaign=moscow
```

## Script UTM

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
