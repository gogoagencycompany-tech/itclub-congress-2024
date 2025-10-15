import { Flag, Users, FileText, UserMinus, UserPlus, CheckCircle } from "lucide-react";

const agendaItems = [
  {
    time: "17:00",
    title: "Đón tiếp và Sinh hoạt Đại biểu",
    icon: Users,
  },
  {
    time: "17:30",
    title: "Nghi thức Chào cờ & Tuyên bố lý do",
    icon: Flag,
  },
  {
    time: "",
    title: "Báo cáo tổng kết nhiệm kỳ 2022 – 2023 và trình bày phương hướng hoạt động nhiệm kỳ 2023 – 2024",
    icon: FileText,
  },
  {
    time: "",
    title: "Ban chủ nhiệm nhiệm kỳ 2022 – 2023 tuyên bố từ nhiệm",
    icon: UserMinus,
  },
  {
    time: "",
    title: "Hiệp thương và ra mắt Ban chủ nhiệm nhiệm kỳ 2023 – 2024",
    icon: UserPlus,
    highlight: true,
  },
  {
    time: "",
    title: "Phát biểu chỉ đạo, thông qua Nghị quyết và Bế mạc Đại hội",
    icon: CheckCircle,
  },
];

const Agenda = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-center mb-16">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Chương Trình Đại Hội
            </span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-accent md:left-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {agendaItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full ${
                    item.highlight ? 'bg-secondary animate-pulse' : 'bg-primary'
                  } transform -translate-x-1/2 border-4 border-background`}></div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-16 md:ml-0`}>
                    <div className={`inline-block bg-card border ${
                      item.highlight ? 'border-secondary shadow-glow' : 'border-border'
                    } rounded-xl p-6 shadow-card hover:scale-105 transition-all duration-300`}>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          item.highlight ? 'bg-secondary/20' : 'bg-primary/20'
                        }`}>
                          <item.icon className={`w-6 h-6 ${
                            item.highlight ? 'text-secondary' : 'text-primary'
                          }`} />
                        </div>
                        <div className="flex-1 text-left">
                          {item.time && (
                            <p className="font-montserrat font-bold text-primary text-lg mb-2">
                              {item.time}
                            </p>
                          )}
                          <p className="font-inter text-foreground/90 leading-relaxed">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
