import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="md:flex bg-green-600 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="/farhan.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Hello! I'm Farhan, a driven and ambitious student currently in Class 12th at Khawaja Fareed College in Rahim Yar Khan. When I'm not hitting the books, you can find me exploring my passion for freelancing, taking on new projects and challenges that help me grow both personally and professionally. With a strong work ethic and dedication to delivering high-quality work, I'm always looking for opportunities to learn and expand my skills.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        FARHAN ALI
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Freelancing engineer, GKFC
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
