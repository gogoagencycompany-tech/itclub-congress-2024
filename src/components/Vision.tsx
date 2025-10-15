import { Target, Sparkles, Handshake, Award, Heart } from "lucide-react";

const visionItems = [
  {
    icon: Target,
    title: "Mục tiêu chung",
    description: "Trở thành cầu nối giữa sinh viên với nhà trường và doanh nghiệp, tạo môi trường trải nghiệm và kết nối những người cùng đam mê lập trình",
  },
  {
    icon: Sparkles,
    title: "Đa dạng hóa hoạt động",
    description: "Đẩy mạnh các sân chơi học thuật, đổi mới mô hình sinh hoạt để đáp ứng nhu cầu thực tiễn của sinh viên",
  },
  {
    icon: Handshake,
    title: "Hợp tác Doanh nghiệp",
    description: "Tổ chức 1 chuyến tham quan doanh nghiệp và 2 khóa học kết hợp với các đơn vị đào tạo bên ngoài",
  },
  {
    icon: Award,
    title: "Phát triển Phong trào",
    description: "Tổ chức 1 cuộc thi lập trình cấp trường và 2 buổi sinh hoạt chuyên đề trang bị kỹ năng",
  },
  {
    icon: Heart,
    title: "Hoạt động cộng đồng",
    description: "Lên kế hoạch cho các chương trình vì cộng đồng như 'Tân trang laptop' cho sinh viên",
  },
];

const Vision = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-center mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Phương Hướng Nhiệm Kỳ
            </span>
          </h2>
          <p className="text-center text-2xl font-montserrat font-semibold text-muted-foreground mb-16">
            2023 - 2024
          </p>

          <div className="space-y-6">
            {visionItems.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-accent p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-bold text-2xl mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
