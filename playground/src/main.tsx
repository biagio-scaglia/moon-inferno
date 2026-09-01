import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

interface WebMcpContext {
  registerTool: (tool: {
    name: string;
    description: string;
    parameters: {
      type: string;
      properties: Record<string, unknown>;
      required?: string[];
    };
    handler: (args: any) => Promise<unknown> | unknown;
  }) => void;
}

// WebMCP (Web Model Context Protocol) AI Agent Browser Tools Registration
if (typeof window !== 'undefined') {
  const registerWebMcpTools = () => {
    const docContext = (document as unknown as Record<string, unknown>).modelContext;
    const navContext = (navigator as unknown as Record<string, unknown>).modelContext;
    const modelContext = (docContext || navContext) as WebMcpContext | undefined;

    if (modelContext && typeof modelContext.registerTool === 'function') {
      try {
        modelContext.registerTool({
          name: 'get_moon_inferno_component_info',
          description: 'Get documentation, code snippets, and accessibility details for a specific Moon-Inferno UI component.',
          parameters: {
            type: 'object',
            properties: {
              componentName: {
                type: 'string',
                description: 'The name of the component, e.g. Button, MoonRPGGrid, MoonHealthMeter, DatePicker, HoloCard, Tabs, Select',
              },
            },
            required: ['componentName'],
          },
          handler: async ({ componentName }: { componentName: string }) => {
            return {
              framework: 'Moon-Inferno UI Framework',
              creator: 'Biagio Scaglia',
              component: componentName,
              cdnSnippet: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/moon-inferno@0.4.8/dist/styles.css">',
              npmPackage: 'moon-inferno',
              accessibility: 'WCAG 2.1 AA Compliant with keyboard navigation & high contrast states',
            };
          },
        });

        modelContext.registerTool({
          name: 'get_moon_inferno_themes',
          description: 'List all supported retro & cyberpunk themes in Moon-Inferno UI framework.',
          parameters: { type: 'object', properties: {} },
          handler: async () => {
            return {
              themes: [
                { id: 'moon-inferno', name: 'Moon-Inferno (Solar Orange & Obsidian)' },
                { id: 'terminal', name: 'Terminal CRT (Phosphor Green Matrix)' },
                { id: 'y2k', name: 'Y2K Cyber (Pastel Chrome & Cyan)' },
              ],
            };
          },
        });
      } catch (err) {
        console.debug('WebMCP registration notice:', err);
      }
    }
  };

  if (document.readyState === 'complete') {
    registerWebMcpTools();
  } else {
    window.addEventListener('load', registerWebMcpTools);
  }
}
