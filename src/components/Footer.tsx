import { Facebook, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="font-montserrat font-bold text-2xl md:text-3xl">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              CÂU LẠC BỘ IT
            </span>
          </h3>
          <p className="font-montserrat font-semibold text-lg text-muted-foreground">
            VIỆN KỸ THUẬT & CÔNG NGHỆ
          </p>
          
          <div className="py-6">
            <p className="font-inter text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Mọi thông tin chi tiết và hoạt động sắp tới sẽ được cập nhật trên các kênh truyền thông của CLB. 
              Hãy theo dõi chúng tôi!
            </p>
          </div>

          <div className="flex justify-center gap-6 pt-4">
            <a
              href="#"
              className="bg-primary/20 p-4 rounded-full hover:bg-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-primary" />
            </a>
            <a
              href="#"
              className="bg-primary/20 p-4 rounded-full hover:bg-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
            <a
              href="#"
              className="bg-primary/20 p-4 rounded-full hover:bg-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="Website"
            >
              <Globe className="w-6 h-6 text-primary" />
            </a>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="font-inter text-sm text-muted-foreground">
              © 2024 Câu Lạc Bộ IT - Trường Đại học Thủ Dầu Một
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
