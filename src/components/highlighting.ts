import * as vscode from 'vscode';
import * as Parser from 'web-tree-sitter';
import { SELECTOR } from './contants';
import { parserDocument } from './parser';

const tokenTypes = ['namespace', 'class', 'enum', 'interface', 'struct', 'typeParameter', 'type', 'parameter', 'variable', 'property', 'enumMember', 'decorator', 'event', 'function', 'method', 'macro', 'label', 'comment', 'string', 'keyword', 'number', 'regexp', 'operator'];
const legend = new vscode.SemanticTokensLegend(tokenTypes);

interface HighlightingToken {
	type: string;
	start: Parser.Point;
	end: Parser.Point;
}

const provider = {
  provideDocumentSemanticTokens(
    document: vscode.TextDocument
  ) {
    const tokens: HighlightingToken[] = highlighting(document.getText());
    const tokensBuilder = new vscode.SemanticTokensBuilder(legend);
    tokens.forEach(token => {
      try {
        tokensBuilder.push(
          new vscode.Range(
            new vscode.Position(token.start.row, token.start.column),
            new vscode.Position(token.end.row, token.end.column)
          ),
          token.type
        );
      } catch(e) {
        console.log(e);
      }
    });
    return tokensBuilder.build();
  }
};

function highlighting(document: string) {
	const list = [];
	const tree = parserDocument(document);

	(function f(node: Parser.SyntaxNode) {
		switch (true) {
			case node.type === 'baseType' || node.type === 'parType':
				list.push({
					type: 'type',
					start: node.startPosition,
					end: node.endPosition
				});
				break;
			case node.type === 'graphName' || node.type === 'queryName':
				list.push({
					type: 'class',
					start: node.startPosition,
					end: node.endPosition
				});
				return;
			case node.type === 'comment':
				list.push({
					type: 'comment',
					start: node.startPosition,
					end: node.endPosition
				});
				break;
			case node.type === 'constStr':
				list.push({
					type: 'string',
					start: node.startPosition,
					end: node.endPosition
				});
				break;
			case node.type === 'name':
				list.push({
					type: 'property',
					start: node.startPosition,
					end: node.endPosition
				});
				break;
			case node.type === 'gaccName':
				list.push({
					type: 'variable',
					start: node.startPosition,
					end: node.endPosition
				});
				break;
			case node.type === 'vaccName':
				list.push({
					type: 'property',
					start: node.startPosition,
					end: node.endPosition
				});
				break;
			case node.type === 'constInt':
				list.push({
					type: 'number',
					start: node.startPosition,
					end: node.endPosition
				});
				break;
		}

		node.children.forEach(child => f(child));
	})(tree.rootNode);
	return list;
}

export default vscode.languages.registerDocumentSemanticTokensProvider(SELECTOR, provider, legend);
