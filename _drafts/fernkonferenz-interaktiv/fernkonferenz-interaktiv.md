# Video-Konferenzen interaktiv und produktiv gestalten


## OBS einrichten

{>>@justus orientiere dich hier https://docs.google.com/document/d/12SSl1bmbMOKr6SbumdyRWbFSR889WCvqJHCBmrCOWrc/edit <<}

---



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
