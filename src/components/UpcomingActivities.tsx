import contestImg from "@/assets/upcoming-contest.jpg";
import laptopRepairImg from "@/assets/upcoming-laptop-repair.jpg";
import partnershipImg from "@/assets/upcoming-partnership.jpg";
import companyTourImg from "@/assets/upcoming-company-tour.jpg";

const activities = [
  {
    image: contestImg,
    title: "Cuộc Thi Lập Trình Cấp Trường",
    description: "Một cuộc thi lập trình thi đấu quy mô toàn trường sẽ được tổ chức để tạo ra sân chơi học thuật đỉnh cao, khuyến khích tinh thần học hỏi và khẳng định tài năng của sinh viên IT.",
  },
  {
    image: laptopRepairImg,
    title: "Chương Trình 'Tân Trang Laptop' Vì Cộng Đồng",
    description: "CLB lên kế hoạch triển khai một chương trình vì cộng đồng ý nghĩa: hỗ trợ tân trang và sửa chữa laptop cho các bạn sinh viên và giảng viên trong trường Đại học Thủ Dầu Một.",
  },
  {
    image: partnershipImg,
    title: "Hợp Tác Đào Tạo Chuyên Sâu",
    description: "Trong nhiệm kỳ mới, CLB sẽ kết hợp với các đơn vị đào tạo bên ngoài để tổ chức 2 khóa học chuyên ngành, giúp sinh viên tiếp cận kiến thức thực tiễn và có cơ hội nhận các chứng chỉ giá trị, hoàn thiện hồ sơ cá nhân.",
  },
  {
    image: companyTourImg,
    title: "Tiếp Tục Các Chuyến Tham Quan Doanh Nghiệp",
    description: "CLB sẽ tiếp tục tổ chức 1 chuyến tham quan thực tế đến những công ty phần mềm hàng đầu, giúp sinh viên có định hướng nghề nghiệp rõ ràng và học hỏi kinh nghiệm từ các anh chị đi trước.",
  },
];

const UpcomingActivities = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-center mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Chào Nhiệm Kỳ 2023-2024
            </span>
          </h2>
          <p className="text-center text-2xl font-montserrat font-semibold text-muted-foreground mb-16">
            Những Hoạt Động Hấp Dẫn Sắp Tới
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-xl mb-3 text-foreground">
                    {activity.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {activity.description}
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

export default UpcomingActivities;
