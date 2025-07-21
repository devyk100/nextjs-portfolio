import { Loader2, Brain } from "lucide-react";

export default function MemorivaLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 p-8 rounded-lg bg-card border shadow-lg">
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-6 h-6 text-purple-600" />
            <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Memoriva
            </span>
          </div>
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
          <div className="absolute inset-0 w-8 h-8 rounded-full border-2 border-purple-500/20 animate-ping mx-auto mt-6" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">Loading AI Document Management...</p>
          <p className="text-xs text-muted-foreground mt-1">Preparing RAG pipeline details</p>
        </div>
      </div>
    </div>
  );
}
