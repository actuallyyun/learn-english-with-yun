import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

const MeetCoach = () => {
  return (
    <div>
      <div class=" bg-violet-900 rounded-lg">
        <div class="mx-6 py-7 md:mx-12 lg:ml-20 md:py-11 max-w-4xl">
          <div class="w-3/4 pb-11 md:pb-20 text-slate-50">
            <p class={`${utilStyles.heading2Xl}`}>
              Hi I'm Yun and I will be your private English coach
            </p>
            <p class={`${utilStyles.headingMd}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              repudiandae, ut corrupti similique suscipit accusantium vel? A,
              deleniti libero vel fuga commodi velit cum rerum, iure, nam
              voluptas dignissimos perspiciatis?
            </p>
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
