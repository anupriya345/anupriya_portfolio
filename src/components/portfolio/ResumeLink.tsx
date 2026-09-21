import { Download } from "lucide-react";
import resumeAsset from "@/assets/Anupriya-Singh-Resume.pdf.asset.json";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters: Record<string, string>) => void;
  }
}

export function ResumeLink({ className, label = "Download Résumé" }: { className?: string; label?: string }) {
  const trackDownload = () => {
    window.gtag?.("event", "resume_download", {
      file_name: "Anupriya-Singh-Resume.pdf",
      link_text: label,
    });
    window.dispatchEvent(
      new CustomEvent("portfolio:resume-download", {
        detail: { fileName: "Anupriya-Singh-Resume.pdf", source: label },
      }),
    );
  };

  return (
    <a
      href={resumeAsset.url}
      download="Anupriya-Singh-Resume.pdf"
      target="_blank"
      rel="noreferrer"
      onClick={trackDownload}
      aria-label={`${label} as a PDF`}
      className={cn("inline-flex items-center justify-center gap-2", className)}
    >
      <Download className="size-4" aria-hidden />
      {label}
    </a>
  );
}