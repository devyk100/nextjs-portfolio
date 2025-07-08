"use client";

import React, { useEffect, useRef } from 'react';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className = "" }: MermaidDiagramProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (typeof window !== 'undefined' && elementRef.current) {
        try {
          const mermaid = (await import('mermaid')).default;
          
          mermaid.initialize({
            startOnLoad: false,
            theme: 'dark',
            themeVariables: {
              primaryColor: '#3b82f6',
              primaryTextColor: '#ffffff',
              primaryBorderColor: '#1e40af',
              lineColor: '#6b7280',
              sectionBkgColor: '#1f2937',
              altSectionBkgColor: '#374151',
              gridColor: '#4b5563',
              secondaryColor: '#10b981',
              tertiaryColor: '#f59e0b',
            },
            flowchart: {
              useMaxWidth: true,
              htmlLabels: true,
            },
            sequence: {
              useMaxWidth: true,
              wrap: true,
            },
            gantt: {
              useMaxWidth: true,
            },
          });

          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          elementRef.current.innerHTML = `<div id="${id}">${chart}</div>`;
          
          await mermaid.run({
            querySelector: `#${id}`,
          });
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error);
          if (elementRef.current) {
            elementRef.current.innerHTML = `
              <div class="p-4 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20 dark:border-red-800">
                <p class="text-red-700 dark:text-red-300">Error rendering diagram</p>
              </div>
            `;
          }
        }
      }
    };

    renderDiagram();
  }, [chart]);

  return (
    <div 
      ref={elementRef} 
      className={`mermaid-container overflow-x-auto ${className}`}
      style={{ minHeight: '200px' }}
    />
  );
}
