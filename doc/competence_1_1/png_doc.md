#PNG

Portable Network Graphics (PNG) ist ein verlustfreies Grafikformat. Es ist ein von World Wide Web Consortium (W3C) anerkanntes Grafikformat für Rastergrafiken mit verlustfreier Datenkompression.
Da PNG-Fotos wesentlich grösser sind als JPG konnte PNG lange Zeit nicht ohne weitere in Browsern dargestellt werden, dadurch konnte PNG sich nicht gegen GIF und JPG durchsetzen im Webbereich.
PNG wurde als Ersatz für das bis zum Jahr 2006 Lizenzenpflichtige Graphics Interchange Format (GIF) entworfen.

PNG ermöglicht Vollfarb-, Graustufen- und Farbpaletten-Modus, sowie einen Graustufen- und Farbmodus mit Alpha-Kanal.

##Farbtiefen

Bei Bildern, welche Graustufen enthalten kann die Auflösung 1,2,4,8 oder 16 Bit pro Pixel betragen. Bei Bildern mit Farbe entweder 8 (RGB8) oder 16 Bit (RGB16) pro Farbkanal.
Bei Farbbildern kann man mittels des Farbpalettenmodus diese mittel 256 indizierten Farben abspeichern. Die indizierten Farben sind dabei aus dem vollen RBG8-Spektrum frei wählbar.

##Transparenz

PNG-Dateien können in Form eines Alphakanals, oder einer einzelnen transparenten Farbe oder als ergänzende Transparenzpalette zu einer Farbpalette Transparenzinformationen enthalten.
Alphakanäle werden dabei mit einer Tiefe von 8 Bit oder 16 Bit unterstützt. Dabei enthält jeder Kanal eine zusätzliche Information für jeden Pixel. Diese Informationen enthalten die unterschiedlichen Deckungskräfte.
Mit Hilfe des PNG-Formats kann man also Kanten von Text zu Bildern unabhängig glätten. Zudem kann man echte Schlagschatten verwenden, welche den Hintergrund ausblenden, oder beliebig geformte Bilder erzeugen können, insofern das Anzeigeprogramm PNG beherrscht.

##Komprimierung
Die verlustfreie Kompression von PNG wird basiert auf mehreren Verarbeitungsschritten Mit einem Vorfilter werden die Beziehung der Werte benachbarter Bildpunkte beschrieben, um sie besser komprimierbar zu machen.
Anschliessend kann mit einer Substitutionskompressionsmethode versucht werden, wiederkehrende Bildmuster zu erkennen und durch kürzere Rückverweise ersetzen.
Abschliessend wird eine Entropiekodierung, eine Methode, welche jedem einzelnen Zeichen eines Textes eine unterschiedlich lange Folge von Bits zuordnet, angewendet.

##Vorteile

* Verlustfreie Kompression
* Kompakter als vergleichbare Formate
* Unterstützung aller grafischen Webbrowser
* Unterstützung von Alpha-Transparenz

##Nachteile
* Keine Animationsmöglichkeit
* Unterstützt CMYIK-Farbmodel, welches für den Druck verwendet wird, nicht
* Kann nicht einzelne Bildteile laden