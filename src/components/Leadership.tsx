import { User } from "lucide-react";

interface Member {
  role: string;
  name: string;
  description: string;
}

const Leadership = () => {
  // Hierarchical structure: 1 President, 2 VPs, 3 Heads, 3 Members = 9 total
  const president: Member = {
    role: "Chủ Nhiệm",
    name: "Họ và Tên",
    description: "Lãnh đạo và định hướng phát triển CLB",
  };

  const vicePresidents: Member[] = [
    {
      role: "Phó Chủ Nhiệm",
      name: "Họ và Tên",
      description: "Hỗ trợ điều hành và quản lý hoạt động",
    },
    {
      role: "Phó Chủ Nhiệm",
      name: "Họ và Tên",
      description: "Phối hợp tổ chức các sự kiện",
    },
  ];

  const departmentHeads: Member[] = [
    {
      role: "Trưởng Ban",
      name: "Họ và Tên",
      description: "Quản lý Ban Học Thuật",
    },
    {
      role: "Trưởng Ban",
      name: "Họ và Tên",
      description: "Quản lý Ban Truyền Thông",
    },
    {
      role: "Trưởng Ban",
      name: "Họ và Tên",
      description: "Quản lý Ban Tổ Chức",
    },
  ];

  const members: Member[] = [
    {
      role: "Ủy Viên",
      name: "Họ và Tên",
      description: "Hỗ trợ hoạt động chuyên môn",
    },
    {
      role: "Ủy Viên",
      name: "Họ và Tên",
      description: "Hỗ trợ các chương trình CLB",
    },
    {
      role: "Ủy Viên",
      name: "Họ và Tên",
      description: "Phối hợp tổ chức sự kiện",
    },
  ];

  const MemberCard = ({ member }: { member: Member }) => (
    <div className="bg-card border-2 border-border rounded-xl p-4 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300 group">
      <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
        <User className="w-10 h-10 text-foreground" />
      </div>
      <div className="text-center space-y-1">
        <p className="font-inter text-sm font-semibold text-primary">{member.role}</p>
        <h3 className="font-montserrat font-bold text-lg text-foreground">{member.name}</h3>
        <p className="font-inter text-xs text-muted-foreground">{member.description}</p>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
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

          {/* Organizational Chart */}
          <div className="relative">
            {/* President Level */}
            <div className="flex justify-center mb-8">
              <div className="w-64">
                <MemberCard member={president} />
              </div>
            </div>

            {/* Vertical Line from President */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-border"></div>
            </div>

            {/* Vice Presidents Level */}
            <div className="flex justify-center mb-8 relative">
              {/* Horizontal Line connecting VPs */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-0.5 bg-border hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl relative">
                {vicePresidents.map((vp, index) => (
                  <div key={index} className="relative">
                    {/* Vertical line to VP */}
                    <div className="hidden md:flex justify-center mb-2">
                      <div className="w-0.5 h-6 bg-border"></div>
                    </div>
                    <MemberCard member={vp} />
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Lines from VPs to Heads */}
            <div className="flex justify-center mb-2">
              <div className="w-0.5 h-8 bg-border"></div>
            </div>

            {/* Department Heads Level */}
            <div className="flex justify-center mb-8 relative">
              {/* Horizontal Line connecting Heads */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-0.5 bg-border hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl relative">
                {departmentHeads.map((head, index) => (
                  <div key={index} className="relative">
                    {/* Vertical line to Head */}
                    <div className="hidden md:flex justify-center mb-2">
                      <div className="w-0.5 h-6 bg-border"></div>
                    </div>
                    <MemberCard member={head} />
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Lines from Heads to Members */}
            <div className="flex justify-center mb-2">
              <div className="w-0.5 h-8 bg-border"></div>
            </div>

            {/* Members Level */}
            <div className="flex justify-center relative">
              {/* Horizontal Line connecting Members */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-0.5 bg-border hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl relative">
                {members.map((member, index) => (
                  <div key={index} className="relative">
                    {/* Vertical line to Member */}
                    <div className="hidden md:flex justify-center mb-2">
                      <div className="w-0.5 h-6 bg-border"></div>
                    </div>
                    <MemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
