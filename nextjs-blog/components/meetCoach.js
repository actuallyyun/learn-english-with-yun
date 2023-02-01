import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

const MeetCoach = () => {
  return (
    <div>
      <div class=" bg-violet-900 rounded-lg">
        <div class="mx-6 py-7 md:mx-12 lg:ml-20 md:py-11 max-w-4xl">
          <div class="w-3/4 pb-11 md:pb-10 text-slate-50">
            <p class={`${utilStyles.heading2Xl}`}>
              Hi I'm Yun and I will be your private English coach
            </p>
            <div class={`${utilStyles.headingMd}`}>
              <p>
                I have been helping hundreds of students to learn English both
                online and in person after finishing my Teaching and Learning
                Englsh as a Second/Foreign Langugae Master's Degree in Spain. I
                help students setting their learning goals, finding areas they
                are interested in, and keep them motivated. My teaching uses
                evidence based methodologies to achieve optimal learning result.
              </p>
              <p>When I am not teaching, I code and climb rocks.</p>
            </div>
          </div>
          <div class="w-full rounded-xl">
            <Image
              src="/images/blueMountainsYun.jpg"
              width={900}
              height={800}
              class="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetCoach;
