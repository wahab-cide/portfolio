"use client";

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ children, filename }: CodeBlockProps) {
  // Simple syntax highlighting for TypeScript/JavaScript
  const highlightCode = (code: string) => {
    let parts: Array<{ text: string; isCode: boolean }> = [{ text: code, isCode: true }];

    // Helper to apply highlighting without affecting already-highlighted parts
    const applyHighlight = (regex: RegExp, replacement: (match: string) => string) => {
      const newParts: Array<{ text: string; isCode: boolean }> = [];

      parts.forEach(part => {
        if (!part.isCode) {
          newParts.push(part);
          return;
        }

        const text = part.text;
        let lastIndex = 0;
        let match;
        let hasMatches = false;

        regex.lastIndex = 0;

        while ((match = regex.exec(text)) !== null) {
          hasMatches = true;

          // Add unmatched text before this match (if any)
          if (match.index > lastIndex) {
            newParts.push({
              text: text.substring(lastIndex, match.index),
              isCode: true
            });
          }

          // Add highlighted match
          newParts.push({
            text: replacement(match[0]),
            isCode: false
          });

          lastIndex = regex.lastIndex;
        }

        // Add remaining unmatched text (if any)
        if (hasMatches && lastIndex < text.length) {
          newParts.push({
            text: text.substring(lastIndex),
            isCode: true
          });
        } else if (!hasMatches) {
          // No matches found, keep original part
          newParts.push(part);
        }
      });

      parts = newParts;
    };

    // Highlight comments first
    applyHighlight(
      /(\/\/.*$)/gm,
      (match) => `<span class="text-neutral-500 italic">${match}</span>`
    );

    applyHighlight(
      /(\/\*[\s\S]*?\*\/)/g,
      (match) => `<span class="text-neutral-500 italic">${match}</span>`
    );

    // Highlight strings
    applyHighlight(
      /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g,
      (match) => `<span class="text-emerald-400">${match}</span>`
    );

    // SQL keywords
    const sqlKeywords = [
      'SELECT', 'FROM', 'WHERE', 'INSERT', 'UPDATE', 'DELETE', 'CREATE',
      'TABLE', 'INDEX', 'JOIN', 'ON', 'AND', 'OR', 'NOT', 'NULL',
      'ORDER', 'BY', 'LIMIT', 'OFFSET', 'GROUP', 'HAVING', 'ASC', 'DESC',
      'FILTER', 'RETURNING', 'CAST', 'TIMESTAMPTZ', 'UUID', 'ENUM'
    ];

    sqlKeywords.forEach(keyword => {
      applyHighlight(
        new RegExp(`\\b(${keyword})\\b`, 'g'),
        (match) => `<span class="text-purple-400 font-medium">${match}</span>`
      );
    });

    // JavaScript/TypeScript keywords
    const keywords = [
      'import', 'export', 'const', 'let', 'var', 'function', 'async', 'await',
      'return', 'if', 'else', 'for', 'while', 'try', 'catch', 'throw',
      'class', 'interface', 'type', 'enum', 'from', 'as', 'default',
      'new', 'this', 'super', 'extends', 'implements'
    ];

    keywords.forEach(keyword => {
      applyHighlight(
        new RegExp(`\\b(${keyword})\\b`, 'g'),
        (match) => `<span class="text-pink-400">${match}</span>`
      );
    });

    // Numbers
    applyHighlight(
      /\b(\d+)\b/g,
      (match) => `<span class="text-orange-400">${match}</span>`
    );

    // Function calls
    applyHighlight(
      /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g,
      (match) => `<span class="text-blue-400">${match}</span>`
    );

    // Types (capitalized words, but not at start of line to avoid matching comments)
    applyHighlight(
      /(?<!^|\s*\/\/.*)\b([A-Z][a-zA-Z0-9_]*)\b/g,
      (match) => `<span class="text-cyan-300">${match}</span>`
    );

    return parts.map(p => p.text).join('');
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-neutral-800 bg-[#0d1117]">
      {filename && (
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border-b border-neutral-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-neutral-500 ml-2">{filename}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
          <code
            className="font-mono"
            dangerouslySetInnerHTML={{ __html: highlightCode(children) }}
          />
        </pre>
      </div>
    </div>
  );
}
