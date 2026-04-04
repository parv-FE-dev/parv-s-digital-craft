"use client";

import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  role: "user" | "bot";
}

function renderMarkdown(text: string): React.ReactNode[] {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];

  lines.forEach((line, i) => {
    if (i > 0) elements.push(<br key={`br-${i}`} />);

    const isBullet = /^[-•]\s/.test(line.trim());
    const content = isBullet ? line.trim().replace(/^[-•]\s/, "") : line;

    // Process inline formatting
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\))/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push(content.slice(lastIndex, match.index));
      }
      if (match[2]) {
        parts.push(<strong key={`b-${i}-${match.index}`}>{match[2]}</strong>);
      } else if (match[3] && match[4]) {
        parts.push(
          <a
            key={`a-${i}-${match.index}`}
            href={match[4]}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary hover:text-primary/80"
          >
            {match[3]}
          </a>
        );
      }
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < content.length) {
      parts.push(content.slice(lastIndex));
    }

    if (isBullet) {
      elements.push(
        <span key={`li-${i}`} className="flex gap-1.5 ml-2">
          <span>•</span>
          <span>{parts}</span>
        </span>
      );
    } else {
      elements.push(<span key={`l-${i}`}>{parts}</span>);
    }
  });

  return elements;
}

export default function ChatMessage({ content, role }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed",
          isUser
            ? "bg-primary text-primary-foreground rounded-2xl rounded-br-md"
            : "bg-secondary text-foreground rounded-2xl rounded-bl-md"
        )}
      >
        {renderMarkdown(content)}
      </div>
    </div>
  );
}
