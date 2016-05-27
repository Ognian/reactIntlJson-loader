# reactIntlJson-loader
# WORK IN PROGRESS

## Workflow

TBD

## Installation

`npm install reactIntlJson-loader --save-dev`

## Usage

``` javascript
var messages_de = require("reactIntlJson!./translated-file-de.json");
// => returns content reformated as "id":"message"
```

If you have added the json-loader to your config, do not forget to exclude the directory where your translated files are
```
{test: /\.json$/, exclude:/src\/intl/, loader: "json-loader"}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)