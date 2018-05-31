###Datum der Lerneinheit und aufgewendete Zeit:           30.04.2018

#####Behandelte Fachthemen: (Kompetenz, Hinweis Portfolio)
######Kompetenz 2.1 
Ich kann die grundlegenden Konzepte welche beim Upload einer Datei über HTTP eine Rolle spielen erklären und mit der Hilfe einer Library oder selbst programmierten Applikation eine oder mehrere Dateien gleichzeitig zum Webserver übertragen (Upload-Funktion in Website einbauen).

######Kompetenz 2.2 
Ich kann nach Bedarf programmtechnisch neue Kategorien und Ordner erstellen und hochgeladene Bilder automatisch in die entsprechenden Ordner ablegen.

####Erreichte Kompetenzen und notwendiges Wissen:
#####Kompetenz 2.1
Ich habe mir mein Wissen über Http-Requests zu Nutzen gemacht und über ein Node-JS Plugin eine einfache implementation eines Uploads implementiert. 

######Clientside HTML
```
 <form ref='uploadForm'
              id='uploadForm'
              action='/upload'
              method='post'
              encType="multipart/form-data">
            <input type="file" name="image"/>
            <input type='submit' value='Upload!'/>
        </form>
```

######Server (NodeJS)
```
app.post('/upload', function (req, res) {
    if (!req.files) {
        return res.status(7).send('No files were uploaded.');
    }
    let uploadedImage = req.files.image;
    let name = uploadedImage.name;

    uploadedImage.mv('./static/images/upload/' + name, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('File uploaded!');
    });
});
```

#####Kompetenz 2.2
Einen Ordner über einen programmatischen Weg zu erstellen ist nichts neues und in fast allen Programmiersprachen geil.
 
####Standortbestimmung und notwendiges Wissen
Ich habe durch mein Vorwissen Kompetenzen 2.1, 2.2 ohne Schwierigkeiten durchführen.
####Planung, nächste Schritte
Kompetenz 2.3, Kompetenz 3.1, Kompetenz 3.2