import aboutUs from "@/public/images/aboutUs.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 justify-center">
            <Image src={aboutUs} height={400} width={400} alt="About us" />
          </div>
          <div className="md:7/12 lg:w-6/12  rounded-lg bg-slate-100 p-8">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Exam Help Online
            </h2>
            <p className="mt-6 text-gray-600">
              We have a team of professionals PhD-level experts who will do your
              exam online for you with a guarantee of good grades. We are
              helping the students with their exams for the last few years. Our
              experts are competent in taking every kind of exam related to any
              subject.
            </p>
            <p className="mt-4 text-gray-600">
              We have thousands of exams experts for more than 50 + different
              subjects. Our exam experts possess higher educational
              qualifications from top colleges and years of taking exams for
              students. We have been helping the students for the last seven
              years, and we have served more than 18,750+ students with our
              services. Our experts are proficient in solving the exams for a
              wide range of important subjects such as statistics, accounting,
              medical, mathematics, finance, computer science, programming,
              management, nursing, history, chemistry, and many more subjects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
