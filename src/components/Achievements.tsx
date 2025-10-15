import { Users, GraduationCap, TrendingUp, Building, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Users,
    title: "40 Thành viên",
    description: "Duy trì số lượng thành viên nòng cốt, trong đó có 7 thành viên Ban Chủ nhiệm",
  },
  {
    icon: GraduationCap,
    title: "Hỗ trợ học tập",
    description: "Tổ chức thành công chương trình 'Chinh phục mùa thi' ôn tập các môn cơ sở ngành như Cơ sở lập trình, Kỹ thuật lập trình",
  },
  {
    icon: TrendingUp,
    title: "Phát triển Kỹ năng",
    description: "100% thành viên được tham gia các khóa tập huấn kiến thức lập trình và giao lưu cùng doanh nghiệp",
  },
  {
    icon: Building,
    title: "Giao lưu thực tế",
    description: "Tổ chức thành công chuyến tham quan doanh nghiệp phần mềm cho sinh viên",
  },
  {
    icon: Trophy,
    title: "Thi đấu Lập trình",
    description: "Thường xuyên tổ chức các cuộc thi trực tuyến trên nền tảng Codeforce, VNOJ để bồi dưỡng kiến thức và giải thuật",
  },
];

const Achievements = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-center mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Nhìn Lại Nhiệm Kỳ
            </span>
          </h2>
          <p className="text-center text-2xl font-montserrat font-semibold text-muted-foreground mb-16">
            2022 - 2023
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300 group"
              >
                <div className="bg-primary/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <achievement.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-3 text-foreground">
                  {achievement.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
