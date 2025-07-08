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
            theme: 'base',
            themeVariables: {
              primaryColor: '#3b82f6',
              primaryTextColor: '#1f2937',
              primaryBorderColor: '#1e40af',
              lineColor: '#6b7280',
              sectionBkgColor: '#f3f4f6',
              altSectionBkgColor: '#e5e7eb',
              gridColor: '#d1d5db',
              secondaryColor: '#10b981',
              tertiaryColor: '#f59e0b',
              background: '#ffffff',
              mainBkg: '#ffffff',
              secondBkg: '#f9fafb',
              tertiaryBkg: '#f3f4f6'
            },
            flowchart: {
              useMaxWidth: true,
              htmlLabels: true,
              curve: 'basis'
            },
            sequence: {
              useMaxWidth: true,
              wrap: true,
              diagramMarginX: 50,
              diagramMarginY: 10
            },
            gantt: {
              useMaxWidth: true,
            },
            securityLevel: 'loose'
          });

          // Clear previous content
          elementRef.current.innerHTML = '';
          
          const id = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
          const wrapper = document.createElement('div');
          wrapper.id = id;
          wrapper.className = 'mermaid';
          wrapper.textContent = chart;
          elementRef.current.appendChild(wrapper);
          
          await mermaid.run({
            querySelector: `#${id}`,
          });
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error);
          if (elementRef.current) {
            elementRef.current.innerHTML = `
              <div class="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <pre class="text-sm text-gray-700 whitespace-pre-wrap overflow-x-auto">${chart}</pre>
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
