---
title: Contacteer ons
template: contact

form:
    name: contact

    fields:
        - name: name
          label: Naam en voornaam
          placeholder: Geef hier je naam in
          autofocus: off
          autocomplete: on
          type: text
          validate:
            required: true

        - name: email
          label: E-mail
          placeholder: Geef hier je e-mail adres in
          type: email
          validate:
            required: true

        - name: message
          label: Bericht
          placeholder: Geef hier je bericht in
          type: textarea
          validate:
            required: true

        - name: g-recaptcha-response
          label: Captcha
          type: captcha
          recaptcha_site_key: 6LccVhsUAAAAAGUqZRIkZWmGaVFpY2C6Ye8r1gVK
          recaptcha_not_validated: 'Captcha not valid!'
          validate:
            required: true

    buttons:
        - type: submit
          value: Verzenden

    process:
        - captcha:
            recaptcha_secret: 6LccVhsUAAAAAKEBC0xFMTSWO6_UN7V9xdAtkfmp
        - email:
            subject: "[Site Contact Form] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
            from: "{{ config.plugins.email.from }}"
            to:
              - "{{ config.plugins.email.from }}"
              - "{{ form.value.email }}"
        - save:
            fileprefix: contact-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        - message: Bedankt voor je bericht!
        - display: thankyou
---

Hebt u een vraag, wilt u een offerte voor een opdracht of willt u gewoon even kennis maken?

U kan ons bellen op **050 615 002** of **0495 68 57 13** en faxen op **050 615 006**.<br>
Een E-mail sturen kan u doen naar **[info@greenid.be](mailto:info@greenid.be)**.<br>
Daarnaast kan u ook mailen via het onderstaand contactformulier. <br>Wij nemen binnen enkele dagen gegarandeerd contact met u op.
