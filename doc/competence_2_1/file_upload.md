###Upload
Um einen File-Upload zu implementieren kann man den nativen input-tag von HTML5 mit dem Typ file angeben. Um ein Bild an den Server zu senden kann man mittels eines HTTP-Post requests an den Server geschickt werden. Auf dem Server muss dieser Request validiert werden und das Bild kann gespeichert werden. 

#####HTML Clientside

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

#####Server (NodeJS) Handling

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

###Sicherheitsrisiken
Da ein File-Upload immer gewisse Sicherheitsrisiken beinhaltet sollte man sich diesen bewusst sein und dagegen schützen. Nachfolgend eine Website mit detailiertem Beschrieb, was die Sicherheitsrisiken sind und wie man diese verhindern kann. 

https://www.acunetix.com/websitesecurity/upload-forms-threat/

