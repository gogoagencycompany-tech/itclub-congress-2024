const About = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-8">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Lời Mở Đầu
            </span>
          </h2>
          
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card">
            <p className="font-inter text-lg md:text-xl leading-relaxed text-foreground/90">
              Đại hội là sự kiện quan trọng, đánh dấu từng bước trưởng thành của Câu lạc bộ IT, 
              đồng thời xác định phương hướng và nhiệm vụ cho nhiệm kỳ 2023 – 2024. 
              Đây là nơi thể hiện sự quyết tâm của toàn thể Ban chủ nhiệm và thành viên 
              hướng tới mục tiêu xây dựng một câu lạc bộ vững mạnh, nâng cao chất lượng sinh viên, 
              và đóng góp các hoạt động học thuật và xã hội cho cộng đồng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
