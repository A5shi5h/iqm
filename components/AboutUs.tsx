"use client";

export default function AboutUs() {
  return (
    <section className="bg-white py-16">
      {/* Stats */}
      <div className="max-w-6xl mx-auto text-center grid grid-cols-4 gap-4 mb-12">
        <div>
          <h2 className="text-6xl font-bold">1000+</h2>
          <p className="mt-1 text-4xl font-stretch-100% font-normal">Students</p>
        </div>
        <div>
          <h2 className="text-6xl font-bold">5</h2>
          <p className="mt-1 text-4xl font-thin">Exams</p>
        </div>
        <div>
          <h2 className="text-6xl font-bold">10+</h2>
          <p className="mt-1 text-4xl font-light">Courses</p>
        </div>
        <div>
          <h2 className="text-6xl font-bold">6+</h2>
          <p className="mt-1 text-4xl font-thin">Teachers</p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto bg-teal-700 text-white rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold underline mb-4">About Us</h3>
          <p className="mb-6 leading-relaxed font-thin">
            In the midst of the global pandemic, a need was felt. That need gave
            rise to IQM — a place where curiosity meets clarity. What started as
            a problem has evolved into a mission: to make learning accessible,
            intuitive, and inspiring.
          </p>
          <button className="bg-white text-teal-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
            Know more
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          {/* <Image
            src={teamImage}
            alt="Team Illustration"
            className="w-full h-auto"
          /> */}
        </div>
      </div>
    </section>
  );
}
