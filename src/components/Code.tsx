import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ({ children }: { children: any }) => (
    <SyntaxHighlighter {...{ language: 'javascript', style: atelierCaveDark }}>
        { children }
    </SyntaxHighlighter>
);

export default Code;
