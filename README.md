# Authenticator Extension Website [![Crowdin](https://d322cqt584bo4o.cloudfront.net/authenticator-docs/localized.svg)](https://crowdin.com/project/authenticator-docs)

- Increment `ver` by one when making important changes to a page
- When updating `_data/locales/sidebar/xx.yml`, make sure to sync changes between all languages
- When making a table, add `{: .table .table-striped}` on the line under the table or the table will not be formatted properly

#### Adding languages

1. Add to `_data/locales/languages.yml`
2. Make sure `_data/locales/default/xx.json` is fully translated
3. Make sure `_data/locales/sidebar/xx.yml` exists
4. Copy `index.md` and change front matter for `lang`

Note that untranslated pages should not exist. If a page is untranslated the UI will defualt to the english page (unless linked to).

#### Making alert box

```
{% include warning.html class="[alert class]" message="[your html here]" %}

```
Where `class` is one of the classes from [here](https://getbootstrap.com/docs/4.3/components/alerts/#examples). E.g. `primary`, `danger`, `warning`, etc.

#### Default front matter for new pages

Normal page:

```yml
---
title: [Title]
stub: [File name]
lang: en
ver: 1
---
```

Add `layout: no-sidebar` to remove sidebar, localization buttons, and edit button.
