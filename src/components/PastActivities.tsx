import studyGroupImg from "@/assets/activity-study-group.jpg";
import codingContestImg from "@/assets/activity-coding-contest.jpg";
import companyVisitImg from "@/assets/activity-company-visit.jpg";
import workshopImg from "@/assets/activity-workshop.jpg";

const activities = [
  {
    image: studyGroupImg,
    title: "Chương trình 'Chinh Phục Mùa Thi'",
    description: "Nhằm giúp các bạn sinh viên ôn tập và củng cố kiến thức trước kỳ thi, CLB đã tổ chức các chương trình ôn tập tập trung vào các môn cơ sở ngành Công nghệ thông tin như Cơ sở lập trình, Kỹ thuật lập trình, và Cơ sở dữ liệu.",
  },
  {
    image: codingContestImg,
    title: "Bồi Dưỡng Lập Trình Thi Đấu Chuyên Sâu",
    description: "CLB đã thường xuyên tổ chức các cuộc thi trực tuyến trên các nền tảng như Codeforce, Free Contest, VNOJ, ATCoder để các thành viên có cơ hội trau dồi kiến thức giải thuật, chuẩn bị cho các kỳ thi lập trình các cấp.",
  },
  {
    image: companyVisitImg,
    title: "Giao Lưu và Tham Quan Doanh Nghiệp",
    description: "Trong nhiệm kỳ qua, 100% thành viên CLB đã tham gia các buổi giao lưu doanh nghiệp tại trường và CLB cũng đã tổ chức thành công một chuyến tham quan thực tế tại doanh nghiệp phần mềm, giúp sinh viên có cái nhìn cận cảnh về môi trường làm việc chuyên nghiệp.",
  },
  {
    image: workshopImg,
    title: "Tổ Chức Các Buổi Sinh Hoạt Chuyên Đề",
    description: "CLB đã tổ chức buổi sinh hoạt chuyên đề nhằm trang bị những kiến thức và kỹ năng lập trình cần thiết cho cán bộ chủ chốt, thành viên và các bạn sinh viên quan tâm, góp phần nâng cao năng lực chuyên môn.",
  },
];

const PastActivities = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-center mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Nhìn Lại Nhiệm Kỳ 2022-2023
            </span>
          </h2>
          <p className="text-center text-2xl font-montserrat font-semibold text-muted-foreground mb-16">
            Những Hoạt Động Nổi Bật
          </p>

          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center bg-card border border-border rounded-xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-300 group`}
              >
                <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="font-montserrat font-bold text-2xl mb-4 text-foreground">
                    {activity.title}
                  </h3>
                  <p className="font-inter text-lg text-muted-foreground leading-relaxed">
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

export default PastActivities;
