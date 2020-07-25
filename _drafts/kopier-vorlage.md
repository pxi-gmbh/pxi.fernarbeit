# Code-Schnipsel zum Kopieren und Einfügen

## Video (startet auf Klick, nimmt Video-Anfang oder Poster als Vorschaubild)

- den Text in `<video alt="" ...` anpassen: Inhalts-Beschreibung
- den Text in `<source src="" ...` anpassen: Dateipfad und Name des Videos (.mp4)
- evtl den Text in `<video poster="" ...` anpassen: Dateipfad und Name eines eigens angelegten Vorschau-Bildes
- Code-Schnipsel auf eigener Zeile einfügen, wenn das Video als Block alleine stehen soll. An beschriebene Zeile anhängen, wenn das Video innerhalb des zugehörigen Blocks stehen soll (z.B. in Seiten-Notizen)

```
<video poster="" alt="" class="drop-shadow" controls loop muted preload="metadata"><source src="" type="video/mp4">Entschuldigung, Ihr Browser unterstützt das Video-Format nicht.</video>
```


## Video (Autoplay)

- den Text in `<video alt="" ...` anpassen: Inhalts-Beschreibung
- den Text in `<source src="" ...` anpassen: Dateipfad und Name des Videos (.mp4)
- evtl den Text in `<video class="drop-shadow" ...` löschen, wenn der Inhalt sich ohne Schlagschatten mehr in die Seite einfügen soll.
- Code-Schnipsel auf eigener Zeile einfügen, wenn das Video als Block alleine stehen soll. An beschriebene Zeile anhängen, wenn das Video innerhalb des zugehörigen Blocks stehen soll (z.B. in Seiten-Notizen)

```
<video poster="" alt="" class="drop-shadow" autoplay controls loop muted><source src="" type="video/mp4">Entschuldigung, Ihr Browser unterstützt das Video-Format nicht.</video>
```


## Seiten-Notiz (wird auf schmalen Bildschirmen zum Ausklapp-Element)

- Text `<label for="" ...` um eine einmalige (auf der Seite nicht wiederkehrende) ID ergänzen. Zur Wiedererkennung und Eindeutigkeit sollten die ersten drei, vier Worte des vorhergehenden Absatzes passen.
- Text `<input id="" ...` mit Text aus `<label for="" ...` füllen. Muss identisch sein.
- Text `**Notiz**` mit passender Kategorie füllen. "Notiz" ist Standard. "Lese-Material" für Verweise oder "Quelle" für Zitate bietet sich an. Persönliche Anmerkungen sollten kursiv hervorgehoben werden. Dann mit Namen einleiten. `**Jakob**: *...*`
- Code-Schnipsel in Fließtext einfügen.

```
Hier steht Fließtext des zugehörigen Absatzes.
<label for="aside--ID-AUS-ANFANG-DES-ABSATZES" class="aside-toggle" role="button" aria-pressed="false" aria-label="Randbemerkung anzeigen" onkeypress="toggleButtonKeyPress()" onclick="toggleButtonClick()" tabindex="0">⨭ …</label>

<input id="aside--ID-AUS-ANFANG-DES-ABSATZES" type="checkbox" class="aside-toggle"/>

**Notiz**: Hier steht der Inhalt der Seitennotiz

Text der hier steht, wird wieder regulär in den Fließtext geschrieben.
```

## noch unkommentierte HTML-snippets. Müssen evtl angepasst werden

<!-- YouTube snippet: no cookies, minimal branding. Switch Video ID-comment with proper ID for use -->
<div class="embedcontainer">
	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/<!-- VIDEO-ID -->?controls=1&rel=0&modestbranding=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<!-- no tracking on iframes at all -->
<div class="embedcontainer">
	<iframe id='iframe-001' style="display:none;" frameborder="0" scrolling="no" width="560" height="315" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
	<noscript>Einbettung ist ausgeschaltet. <a href="<!-- IFRAME-URL -->">Video auf der Ursprungsseite ansehen</a>.</noscript>
	<img id="iframe-001-img" src="<!-- BILD -->" alt="placeholder-image for iframe content" onClick='document.getElementById("iframe-001").style="display:block";document.getElementById("iframe-001").src="QUELLE";document.getElementById("iframe-001-img").style="display:none";'>
</div>
