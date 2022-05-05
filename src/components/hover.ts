import * as vscode from 'vscode';
import * as Parser from 'web-tree-sitter';
import { parserDocument } from './parser';

export default vscode.languages.registerHoverProvider('gsql', {
  provideHover(document, position) {
    const contents: string[] = [];

    const tree = parserDocument(document.getText());
    (function f(node: Parser.SyntaxNode) {
      if (
        node.startIndex <= position.character &&
        node.endIndex >= position.character
      ) {
        contents.push(node.type);
      }
  
      node.children.forEach(child => f(child));
    })(tree.rootNode);
    return {
      contents
    };
  }
});