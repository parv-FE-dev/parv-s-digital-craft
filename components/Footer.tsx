import { Container } from "@/components/Section";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-border bg-vscode-sidebar">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-sm">
          <p className="text-muted-foreground">
            <span className="vscode-comment">// </span>
            © {new Date().getFullYear()} Parv Saxena. All rights reserved.
          </p>
          <p className="text-muted-foreground">
            <span className="vscode-keyword">export default</span>{" "}
            <span className="vscode-function">Portfolio</span>
            <span className="text-foreground">;</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;