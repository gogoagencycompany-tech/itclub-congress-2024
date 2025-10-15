import { useState } from "react";
import { FileText, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DocumentViewerProps {
  documentUrl: string;
  documentName: string;
  documentType: "pdf" | "docx";
}

export const DocumentViewer = ({
  documentUrl,
  documentName,
  documentType,
}: DocumentViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Use Google Docs Viewer for Word documents and PDFs
  const getViewerUrl = () => {
    // Convert relative URL to absolute URL
    const absoluteUrl = window.location.origin + documentUrl;
    return `https://docs.google.com/viewer?url=${encodeURIComponent(absoluteUrl)}&embedded=true`;
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = documentUrl;
    link.download = documentName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="group relative overflow-hidden border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
        >
          <FileText className="mr-2 h-5 w-5 text-primary transition-transform group-hover:scale-110" />
          <span className="font-medium">Xem Văn Kiện Đại Hội</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              {documentName}
            </DialogTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="ml-auto mr-2"
            >
              <Download className="mr-2 h-4 w-4" />
              Tải về
            </Button>
          </div>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={getViewerUrl()}
            className="w-full h-full border-0"
            title={documentName}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
