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
