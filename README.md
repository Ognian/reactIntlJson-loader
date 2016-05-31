# reactIntlJson-loader

## Workflow

1. Use `<FormattedMessage id="newItem" defaultMessage="Add item" />` for adding text in your react components.
2. Use the babel plugin `babel-plugin-react-intl` to extract them from your source code.
3. Use `react-intl-webpack-plugin` to combine them into one message file called `reactIntlMessages.json` and put this file into the webpack output path.
4. Use CAT (Computer Aided Translation) tools (like the cloud based memsource.com or okapi) to translate this file into the translated file. These tools use a concept called Translation Memory (TM) . This is a separate file where all translations are stored and with this file all translations can be reapplied to a newly generated `reactIntlMessages.json` file.
5. Save the TM file and the translated json file in a separate directory of your source code.
6. Use `reactIntlJson-loader` to load the translated files and convert them to messages.

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