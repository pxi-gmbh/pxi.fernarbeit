# Video-Konferenzen interaktiv und produktiv gestalten


## OBS einrichten

{>>@justus orientiere dich hier https://docs.google.com/document/d/12SSl1bmbMOKr6SbumdyRWbFSR889WCvqJHCBmrCOWrc/edit <<}

---

## Notizen


- [ ] TODO: Werkzeug-Tips aus OneNote (und evtl weiteren Quellen) in eigenen Artikel unter > Werkzeuge auslagern, hier relevante Kompetenzen sammeln

![screenshot in whereby](technik/obs-excalidraw.png)

.-- Aufnahme-Studio (minimalistisch)

## TOC:
- [technik-obs](technik-obs.md)
- [Hilfe](_hilfe.txt)

Garantieren Sie Qualität in Fern-Konferenzen für Seminare und Workshops. Es gibt viele Überlegungen, Qualität mit einer absurden Materialschlacht zu leisten. Aber sie brauchen kein professionelles Aufnahmestudio, um professionelle Anmutung für einen Stream zu gewährleisten. Arbeiten Sie mit dem, was Sie haben und fügen bei Bedarf und nach Ihren Möglichkeiten nach und nach hochwertigere Komponenten hinzu.

Machen Sie sich mit ihrer Technik unabhängig von Beschränkungen eines geschlossenen Ökosystems. Sie sollten frei zwischen Video-Konferenz-Systemen wechseln können und Ihrem Publikum dort entgegenkommen, wo es sich im digitalen Raum aufhält.

Diese Anleitung für Ihr Heimstudio ist dafür gedacht, mit dem kleinstmöglichen (finanziellen) Aufwand eine professionelle Anmutung für Sie und Ihre Kundschaft zu gestalten. Wir bevorzugen weitgehend günstige und robuste Software-Lösungen, mit denen Sie Interaktivität in Ihre Video-Konferenz bringen. Nachteil der Software-Lösung ist, dass Sie beim Einrichten einige verschiedene Werkzeuge einrichten und miteinander verknüpfen müssen, und dann bei der Konferenz vorher all die virtuellen Kabel prüfen müssen. Sie sind nicht ganz so flexibel und robust, als wenn Sie professionelle Hardware zum Abmischen und zur Verarbeitung heran ziehen.


1. Tonqualität ist wichtiger als Bild. Wenn Sie investieren, dann zuerst in ein passables Mikrofon, das Hintergrund-Geräusche minimiert und Ihrer Stimme Präsenz verleiht. (für Synchronisation von Bild und Ton, siehe Sektion Audio-Mix)
2. Fügen Sie das gewünschte Bildsignal selbst zusammen und als virtuelle Webcam ihrem Fernkonferenz-Werkzeug hinzu, damit sie Präsenz für ihre Körpersprache und Mimik mit Visualisierungen ergänzen
----------
Audio-Mix

Virtuelles Mikrofon, um den Ton durch das virtuelle Aufnahmestudio durchzuschleifen und darüber Webcam-Bild und externes Mikrofon synchron zu bekommen

- (sobald OBS virtual cam verfügbar ist) Auf dem Mac: Soundflower + OBS
- Auf dem PC: VB-Audio + OBS
[ ] @justus j deutsche, gekürzte Version (mit Bildschirmaufnahmen) zur Installation von VB-Audio erstellen https://golightstream.com/handbook/how-to-setup-virtual-audio-cables/

In OBS externes Mikrofon als Audio-Eingang zur Szene hinzufügen, dann den Desktop-Output auf den Input des Virtual Cable setzen und das Monitoring einschalten. (check in OBS-Einstellungen, dass unter Sound der Output für den Monitor das virtuelle Kabel ist)
Im Video-Konferenz-Werkzeug als Ton-Input den Output des Virtual Cables verwenden.

- in Windows Geräteeinstellungen [System] alle überflüssigen Quellen und Outputs deaktivieren (z.B. Bildschirme) die z.B. beim Anschluss von HDMI-Kabeln sich Audio-Input “stehlen”


----------
Video-Mix

Virtuelle Webcam, um das aus verschiedenen Quellen zusammen gestellte und gemischte Videosignal für die Video-Konferenz auszuspielen.

- auf dem PC: OBS + Plugin: VirtualCam + PowerPoint + WhiteBoard (nach Wahl) + Browser etc (bei Bedarf)


Whiteboard

Suchen Sie etwas mit frei einstellbarem Hintergrund (für Chroma-Key / Green-Screen-Effekt).
MS-Whiteboard (manuell mit grünem Hintergrund versehen)

[x] testen: MS Whiteboard nur mit Hack, ein grünes PNG zu verankern nutzbar: Latenz ist nahezu keine

Excalidraw: start a session on one device (source), copy the link and join the session from my streaming device, where the browser window is overlayed over the video signal. Then I have to make an edit on (source) before the content  becomes visible on (stream) - I suspect a quirk or bug. However, on (stream) the background is set to the default white and I have to manually update the background on (stream) to turn blue for the chroma key to work. Dann muss ich noch allen Teilnehmenden sagen, dass sie in möglichst hellen Farben zeichnen sollen (evtl eine arbe festlegen oder jedem eine Farbe zuweisen, dass zumindest für farb-sehende neue Beiträge zuzuordnen sind)

MS-Teams (geht auch auf Einladung in web app) nur mit Office-Account. OBS Browser merkt sich aber zum Glück die Login-Daten. Kann nicht per CSS gesteuert werden, hier mit blauem PNG arbeiten (das kann leider nicht “lock” festgestellt werden, aber wenn nur mit Stift interagiert wird, sollte das recht wenig Verschiebe-Fehler produzieren). Architektur-Blaupause-Anmutung. Dort drüber Anleitung “hier drin zeichnen” und Bildzuschnitt mit Toleranz legen. Als Vorlage immer wieder verwenden. Oder besseres Tool finden (gleich schnell, aber mit CSS die Farben extern veränderbar, ohne Login nutzbar)

ConceptBoard ist nach Registrierung für bis zu 100 Elemente frei nutzbar. Sehr komfortable Features (Moderator-Modus, in 16:9 oder 4:3 oder 1:1 Vordefinierte Flächen einziehen, benutzerdefinierte Farbschemata erstellen) wahrscheinlich die eleganteste Lösung, Leute (spontan) zum angeleiteten Whiteboarding einzuladen. Lohnt wahrscheinlich die Bezahlversion (erst mal eine Lizenz). Zudem der Server in Deutschland steht.

AWW und die anderen freien Tools aus dem Werkzeugkasten (außer Miro und Mural und Invision, die noch ungetestet) sind für chroma-key in OBS-Browser ungeeignet


----------

Setup optimieren

- zweiter Bildschirm (macht Mauszeiger verstecken und komplexe Interaktion in OBS möglich)
- Companion (Open Source Macro-Studio zur Erstellung von komplexen Kurzbefehlen, mit denen Sie OBS und PPT etc fernsteuern können) lässt sich im Browser bedienen. Eventuell mit Elgato Streamdeck komfortabler nutzbar machen


----------

Minimale Hardware:

Windows-PC
Webcam
Ausleuchtung (Gesicht)
USB-Hub (den Hub nicht überfordern! Dinge dran hängen, die wenig Datendurchsatz und Energiehunger haben, wie Maus, Tastatur etc. Kamera möglichst direkt in PC)


[ ] testen: Zoom- Aspect ratio schneidet 1080p HD an den Rändern auf dem iPad ab. Evtl eigenes Setup mit 4:3 für manche Konferenz-Tools besser? Oder reines iPad Problem? Verwandt mit Problem, dass Teams mit Software jenseits der Webcam Gesichtsverfolgung betreibt und Bildausschnitte wählt. Hier kann eingeblendete Animation nur im Zentrum statt finden. http://test.webrtc.org/

Stinger (Überblende-Animationen und Einspieler) lassen sich mit Apple Keynote erstellen. Export von Folien mit transparentem Hintergrund über Custom-Einstellungen mit Apple ProRes 4444. In WebM-Format konvertieren (z.B. mit Adapter auf dem Mac) bei mindestens 8000k bitrate (sollte für streaming passen) für 1080p

Mikrofon an Kopfhörer-Eingang: Rumprobieren, welche Polung die Aufnahme des Computers hat. TRRS oder TRS. Mikrofon wird eventuell nur erkannt, wenn zuerst Adapter (der gleichzeitig Weiche für Mikro und Kopfhörer ist) und dann Mikro angeschlossen wird. (zukünftig besser TRS-Mikro und Headset plus USB-Interface als Standardpaket verwenden)


----------

Chroma Key (green screen Effekt) mit CSS-Hintergründen von Webseiten nutzen: Webseiten lassen sich mit integriertem Browser von OBS in den Stream einbinden (und dabei Größe und sogar custom CSS definieren)
Hex-Values: #00b140 (grün) #0047bb (blau)

![grün oder blau](chroma-key.jpeg)

----------

visuelle signale


- Background oder Wasserzeichen im Videosignal als “Uniform” (gehört zum OrgaTeam des Barcamps z.B.)
- ich höre dich (euch) nicht. (aufforderung, was zu tun ist?)
- ich kann euch nicht sehen. (evtl aufforderung, was zu tun ist?)
- ich höre Störgeräusche von jmd
- Demo-Bildschirme: z.B. simulierter split screen - eine Seite (Browserfenster mit) Videokonferenz, eine Seite Browserfenster mit Web-App. “richten Sie ihren Desktop so ein, dass sie beide Inhalte nebeneinander sehen, so wie in dieser Ansicht” - dabei die Browser-UI nur andeuten, damit sie systemübergreifend funktioniert


----------

eigene kurz-URLs erstellen
https://yourls.org (free open source, auf eigenem server, auch shared host, schnell zu installieren)
hilfreich, lange links von diversen Web-Apps (und direkt-links auf untermenüs oder laufende live-sessions) unter einer Haupt-Domain zu versammeln und mit leicht zu merkenden links zu


----------
testprotokoll: ich höre dich nicht

einloggen mit anderem browser oder profil (als gast, auf einem anderen gerät) und dort checken, ob mein mikro beim gast ankommt und checken, ob das mikro vom gast bei mir ankommt = von meiner Seite kann der Fehler nicht kommen.

Anleitung für das Publikum, mit welchen Schritten Sie ihre Verbindung testen können


----------

Hybrid (physisch + virtuell):
Für Kundschaft vorab Karten für visuelle Kommunikation mit der Kamera schicken
Für (besondere) Kundschaft vorab “Studio in einer Box” (ausgeliehen, mit Rücksendeschein) schicken, geprüfte Dinge, die plug-and-play funktionieren


----------

via OBS andere Personen in das eigene Kamera-Signal einspeisen (und so Kamera-Regie in Video-Konferenz ermöglichen) mit OBS.ninja https://docs.google.com/document/d/e/2PACX-1vSDPs--Oxjc7Omu2gPTrMzmZDrduaYs18kMtvB_HAXRaEBPtlGjVgMXMzvOoLMCtldfFtJzHAZVYHXS/pub
bitrate und andere parameter lassen sich über die URL von OBS.ninja anpassen https://www.reddit.com/r/OBSNinja/comments/g5ot3s/reference_advanced_settings_and_parameter_options/ (rausbekommen, wo der Flaschenhals liegt, der Video beim Testen total pixelig macht. YouTube-Demo-Video war mit minimaler Verzögerung und sehr scharf)

Formate: Fishbowl oder World-Café werden möglich, wenn aus einem Chat von > 50 Leuten jetzt einzelne Beiträge zu Panel-Teilnehmenden “befördert” werden können und per Einladungslink dem Stream hinzugefügt (und wieder rausgeschmissen) werden können.

----------

bitrate kalkulieren: speed-test machen und dann mit etwas puffer kalkulieren, was mein maximaler durchsatz und dementsprechend die leistbare bitrate der videos für OBS ist. rausbekommen, ob die bitrate von videos (picture-in-picture) irgendwie akkumulieren?

[x] getestet: Kabel ist Pflicht! echte 60Mbit sind der Hammer, WLAN wenn andere Sachen im gleichen Netz passieren geht gerne mal unter 1Mbit. Mit LAN-Kabel sollten in Telekom Hybrid 40 Mbit Downstream und 8Mbit Upstream verlässlich gehen


----------

 Anleitungen Konferenz-Software

 Zoom
 https://docs.google.com/document/d/1xdENyIV1505FDXBj7n5PaaHinGGUWc1R0ib1t7DRSCw/edit

 Microsoft Teams
 - regelt die Bildqualität bei Videosignal (gegenüber "Bildschirm teilen") dramatisch runter. Zum Text anzeigen, lieber [Bildschirm teilen] nutzen - und eventuell hacken, indem dort die OBS-Vorschau als Fenster im Vollformat (zweiter Bildschirm) angezeigt wird.









### webcam

Framerate 24/s (higher framerate leads to delay)

> Those little Logitech webcams also lag like crazy at 60 FPS, along with having issues like color fidelity and focus. Sure, they'll "technically" do 60 FPS, but lag like crazy when you do. You'll also want to manually enable buffering on those Logitech webcams, even at 30 FPS.
Just remember to keep any video sources (headshot camera, game feed, etc) at an integer multiple of the output stream. A 30 FPS headshot will still look buttery smooth on a 60 FPS stream as 60 is 2x 30. You can also run your games at 120/180/240 FPS on a 60 FPS stream for the same reason.

### browser

- edge verzögert die Tonaufnahme um fast 1s. clipped den Anfang eines Satzes



## Whiteboards

### conceptboard

ids zum transparent setzen

html hat hintergrund
pad-main=container (dahinter ist nur noch body)
padUnderlay=Farbe des Canvas-Hintergrundes (linien bleiben erhalten, wird durch user-interaktion farbauswahl evtl zurückgesetzt)
padViewport (hat eigtl keinen bg, aber für alle fälle)
.underlay-inner-background-grid (auf display:none)

Anzeige der Mäuse in der App ausschalten. evtl Mäuse auskommentieren, wenn jemand anderes Admin ist:
```.user-cursors-container {display:none}```



### excalidraw

damit nur die gezeichneten Elemente ohne Hintergrund erscheinen:
CSS unverändert lassen, in der App dem Canvas die Farbe rgba(0,0,0,0) geben (voll transparent)
Bug: Hintergrundfarbe des Canvas transferiert nicht über Sessions hinweg zw Clients
Bug: Gruppierung funktioniert nicht konsistent
- mangels "abschließen" für Elemente und Bugs ist Excalidraw zu anfällig für gemeinsame Nutzung mit vielen Clients gleichzeitig


## cuckoo.timer CSS in OBS

html, body, .bubble__container {background: none !important;}
.powered-by, .team, .timer__purpose, .sidebar__nav, .activity {display:none;}
.progress-bar {background: rgba(220,220,220,0.3) !important;}
.timer__display {font-size: 20em !important;}
.link-event, .show-shortcuts {}


## obs.ninja invite

https://obs.ninja/?push=JJwJwUz&stereo&webcam&quality=1 (guest)

https://obs.ninja/?view=JJwJwUz&bitrate=20000&codec=vp9&stereo&label=pxi202006 (OBS source)


## random web tools

- hellobackgrounds.com/zoom-backgrounds
-
