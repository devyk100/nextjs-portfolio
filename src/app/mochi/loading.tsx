import { Loader2, FileCode } from "lucide-react";

export default function MochiLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 p-8 rounded-lg bg-card border shadow-lg">
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <FileCode className="w-6 h-6 text-pink-600" />
            <span className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Mochi
            </span>
          </div>
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
          <div className="absolute inset-0 w-8 h-8 rounded-full border-2 border-pink-500/20 animate-ping mx-auto mt-6" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">Loading Template Manager...</p>
          <p className="text-xs text-muted-foreground mt-1">Preparing competitive programming tools</p>
        </div>
      </div>
    </div>
  );
}
