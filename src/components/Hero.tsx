import { Calendar, MapPin, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl leading-tight">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              ĐẠI HỘI THÀNH VIÊN
            </span>
            <br />
            <span className="text-foreground">CÂU LẠC BỘ IT</span>
          </h1>
          
          <p className="font-montserrat font-semibold text-2xl md:text-3xl text-muted-foreground">
            Lần thứ IV, Nhiệm kỳ 2023 – 2024
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-montserrat font-semibold text-lg mb-2">Thời gian</h3>
                  <p className="text-muted-foreground">17h30, Thứ Tư</p>
                  <p className="text-muted-foreground">Ngày 24 tháng 1 năm 2024</p>
                  <p className="text-sm text-primary mt-2">* Điểm danh lúc 17h00</p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-left">
                  <h3 className="font-montserrat font-semibold text-lg mb-2">Địa điểm</h3>
                  <p className="text-muted-foreground">Trường Đại học</p>
                  <p className="text-muted-foreground">Thủ Dầu Một</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
