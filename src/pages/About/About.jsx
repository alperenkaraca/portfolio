import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Engineer, Problem Solver, Lifelong Learner
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Ali Alperen Karaca"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Ali Alperen Karaca, a dedicated Software Engineer with a Bachelor's degree in Computer Science and proven expertise in{" "}
                <span className="font-bold text-white">
                  React.js, Java and REST APIs
                </span>
                . With a strong foundation in software development, I excel in creating efficient and scalable solutions.
              </p>
              <p className="text-white">
                My experience includes collaborating in agile environments and delivering high-quality applications that meet client needs. I'm adept at problem-solving and continuously enhancing my technical skills to stay current with industry trends.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I am committed to driving project success through innovative and reliable software engineering practices. Currently working at{" "}
                    <span className="font-bold text-cyan-400">Türkiye Cumhuriyet Merkez Bankası (TCMB)</span>
                    , building mission-critical financial systems with microservice architecture.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Ali Alperen Karaca — Senior Software Engineer
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🏦</span>
                      <span className="text-gray-300">Türkiye Cumhuriyet Merkez Bankası</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
