import * as vscode from 'vscode';
import * as Parser from 'web-tree-sitter';
import { parserDocument } from './parser';

export default vscode.languages.registerHoverProvider('gsql', {
  provideHover(document, position) {
    const contents: string[] = [];

    const tree = parserDocument(document.getText());
    (function f(node: Parser.SyntaxNode) {
      if (
        node.startPosition.column <= position.character &&
        node.endPosition.column >= position.character &&
        node.startPosition.row <= position.line &&
        node.endPosition.row >= position.line
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