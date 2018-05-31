
#####Ich kann nach Bedarf programmtechnisch neue Kategorien und Ordner erstellen und hochgeladene Bilder automatisch in die entsprechenden Ordner ablegen.

Nachfolgend ein Codebeispiel wie man eines neues Verzeichniss mit Node-JS erstellt.

```
var fs = require('fs');
var dir = './tmp';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
```

