import * as Parser from 'web-tree-sitter';
import * as _path from 'path';

let parser: Parser;
const wasmPath = _path.join(__dirname, './tree-sitter-gsql.wasm');

async function initTreeSitter() {
	await Parser.init();
	parser = new Parser();
	const GSQL = await Parser.Language.load(wasmPath);
	parser.setLanguage(GSQL);
}

function parserDocument(document: string) {
  return parser.parse(document);
}

export {
  initTreeSitter,
  parserDocument
};
