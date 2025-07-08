"use client";

import React, { useEffect, useRef, useState } from 'react';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className = "" }: MermaidDiagramProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !elementRef.current) return;

    const renderDiagram = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        
        // Initialize mermaid with proper configuration
        mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          securityLevel: 'loose',
          fontFamily: 'Arial, sans-serif',
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
          },
          sequence: {
            useMaxWidth: true,
            wrap: true
          },
          gantt: {
            useMaxWidth: true
          }
        });

        // Clear previous content
        if (elementRef.current) {
          elementRef.current.innerHTML = '';
          
          // Create unique ID for this diagram
          const id = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
          
          // Render the diagram
          const { svg } = await mermaid.render(id, chart);
          elementRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error('Error rendering Mermaid diagram:', error);
        // Fallback to code display
        if (elementRef.current) {
          elementRef.current.innerHTML = `
            <div class="p-4 border border-red-200 rounded-lg bg-red-50">
              <p class="text-red-600 text-sm mb-2">Diagram failed to render. Showing code:</p>
              <pre class="text-sm text-gray-700 whitespace-pre-wrap overflow-x-auto">${chart}</pre>
            </div>
          `;
        }
      }
    };

    const timeoutId = setTimeout(renderDiagram, 100);
    return () => clearTimeout(timeoutId);
  }, [chart, isClient]);

  if (!isClient) {
    return (
      <div className={`mermaid-container overflow-x-auto ${className}`} style={{ minHeight: '200px' }}>
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <p className="text-gray-600 text-sm">Loading diagram...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={elementRef} 
      className={`mermaid-container overflow-x-auto ${className}`}
      style={{ minHeight: '200px' }}
    />
  );
}
