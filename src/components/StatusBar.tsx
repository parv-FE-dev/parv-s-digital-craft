import { GitBranch, Bell, CheckCircle, AlertCircle, Wifi } from "lucide-react";

const StatusBar = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-6 bg-vscode-statusbar flex items-center justify-between px-2 text-xs text-white font-mono">
      {/* Left side */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 cursor-pointer">
          <GitBranch className="w-3.5 h-3.5" />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 cursor-pointer">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>0</span>
          <AlertCircle className="w-3.5 h-3.5 ml-1" />
          <span>0</span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <span className="hover:bg-white/10 px-2 py-0.5 cursor-pointer">Ln 1, Col 1</span>
        <span className="hover:bg-white/10 px-2 py-0.5 cursor-pointer">Spaces: 2</span>
        <span className="hover:bg-white/10 px-2 py-0.5 cursor-pointer">UTF-8</span>
        <span className="hover:bg-white/10 px-2 py-0.5 cursor-pointer">TypeScript React</span>
        <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 cursor-pointer">
          <Wifi className="w-3.5 h-3.5" />
        </div>
        <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 cursor-pointer">
          <Bell className="w-3.5 h-3.5" />
        </div>
      </div>
    </footer>
  );
};

export default StatusBar;