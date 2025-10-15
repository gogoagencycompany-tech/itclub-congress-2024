import { FileText, BookOpen } from "lucide-react";
import { DocumentViewer } from "./DocumentViewer";

export const Documents = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Tài Liệu Đại Hội
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Xem trực tiếp các văn kiện và tài liệu chính thức của Đại hội ngay trên website
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <FileText className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  Văn Kiện Đại Hội CLB IT
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nhiệm kỳ 2022 - 2023 | Tài liệu chính thức
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Bao gồm: Lời nói đầu, Chương trình đại hội, Quy chế làm việc, Báo cáo tổng kết nhiệm kỳ và Phương hướng hoạt động mới
                </p>
              </div>

              <div className="flex-shrink-0">
                <DocumentViewer
                  documentUrl="/documents/van-kien-dai-hoi.docx"
                  documentName="Văn Kiện Đại Hội CLB IT 2022-2023"
                  documentType="docx"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Mẹo:</strong> Bạn có thể xem tài liệu trực tiếp trên website hoặc tải về để đọc offline
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
