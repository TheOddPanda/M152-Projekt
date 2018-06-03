#####Ich kenne die Möglichkeiten von HTML5 im Bereich der clientseitigen Datenhaltung und kann eine Datenhaltung für eine Applikation entwerfen und implementieren. Über dies kann ich Entscheidungen über die Persistenz-Technologie treffen (SQL oder KeyValue Pair Speicherung).

####Cookies
Über sogenannte Cookies kann man Daten einfach aber eingeschränkt speichern. Die Grösse eines Cookies ist dabei limitiert. Nach einer Standartisierung müssen Browser mindestens 20 Cookies pro Domain mit einer grösse von bis zu 4KB akzeptieren. Cookies sind zusätzlich auch sessionbased, was soviel bedeuetet wie, dass die Daten nach einer gewissen Zeit verloren gehen.

####LocalStorage
LocalStorage haben keine Einschränkungen wie die Cookies. Jedoch wird die LocalStorage Funktion erst mit modernen Browsern wie zum Beispiel Google Chrome ab Version 4 unterstützt (Für Kompabilitätscheck: https://developer.mozilla.org/de/docs/Web/API/Window/localStorage).
LocalStorage bietet zudem die Möglichkeit an, Daten nur Sessionbased oder Temporär abzuspeichern. 

####KeyValue Pair
Ein KeyValue Pair ist ein Verbindung von zwei Datenelementen: einem Schlüsselelement, welches einzigartig ist und ein Wertelement, in welches die Daten abgespeichert werden.

Bei einem KeyValue Pair System erfolgen Zugriffe auf die Werte über den Key. Zwischen den Werten besteht keinerlei Beziehungen wie bei SQL-Datenbanken allerdings ermöglicht eine Baumstruktur in den KeyValue-Pairs eine Art 'Beziehung'. KeyValue Pairs sind zudem Schemalos und können ganz einfach verwendet werden und erweitert werden. Beispiele für ein Dokumentformat welches KeyValue Pair ist, ist JSON oder XML. Eine Datenbank welche ebenfalls über dieses KeyValue System verfügen und kein SQL verwendet ist zum Beispiel MongoDB.

######Vorteile
* flexible Datenhaltung
* schnelle Verfügbarkeit der Daten
* einfache Verwendung
* einfache Erweiterbarkeit

######Nachteile
* fehlende Transaktionen
* unperformant

####SQL Datenspeicherung

######Vorteile
* Transaktionssicherheit und Transaktionen
* Normalisierung
* Performantes Datenladen und abfragen

######Nachteile
* SQL-Injections