import { User } from "lucide-react";

const Leadership = () => {
  // Placeholder for 9 team members
  const teamMembers = Array(9).fill(null);

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-center mb-8">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Ra Mắt Ban Chủ Nhiệm
            </span>
          </h2>
          <p className="text-center text-2xl font-montserrat font-semibold text-muted-foreground mb-8">
            Nhiệm Kỳ 2023 - 2024
          </p>

          <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12 mb-12 shadow-card">
            <p className="font-inter text-lg md:text-xl text-center leading-relaxed text-foreground/90">
              Thông tin về Ban Chủ nhiệm mới sẽ được cập nhật ngay sau khi Đại hội kết thúc. 
              Họ là những nhân tố nòng cốt, được tín nhiệm để dẫn dắt Câu lạc bộ IT trong nhiệm kỳ mới, 
              đảm bảo tính kế thừa, năng lực và sự sáng tạo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((_, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                  <User className="w-16 h-16 text-muted-foreground" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-montserrat font-bold text-xl text-foreground">
                    Thành viên {index + 1}
                  </h3>
                  <p className="font-inter text-primary">Chức vụ</p>
                  <p className="font-inter text-sm text-muted-foreground">
                    Thông tin chi tiết sẽ được cập nhật sau Đại hội
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
