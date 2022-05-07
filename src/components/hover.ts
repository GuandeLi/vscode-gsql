import * as vscode from 'vscode';
import { parserDocument } from './parser';

export default vscode.languages.registerHoverProvider('gsql', {
  provideHover(document, position) {
    const contents: string[] = [];
    const tree = parserDocument(document.getText());
    const node = tree.rootNode.descendantForPosition({
      row: position.line,
      column: position.character
    });
    contents.push(node.type);
    let parent = node.parent;
    while(parent) {
      contents.push(parent.type);
      parent = parent.parent;
    }
    contents.reverse();
    contents.push(
      `${JSON.stringify(node.startPosition)}`,
      `${JSON.stringify(node.endPosition)}`,
      node.text,
    );
		return {
      contents
    };
  }
});