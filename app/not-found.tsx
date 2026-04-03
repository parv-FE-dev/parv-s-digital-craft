"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    console.error("404 Error: User attempted to access a non-existent route");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center font-mono space-y-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl text-muted-foreground">
          <span className="vscode-comment">// </span>Page not found
        </p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
        >
          goHome()
        </a>
      </div>
    </div>
  );
}
