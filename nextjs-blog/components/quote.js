import Image from "next/image";

const Quote = ({ imageUrl, author }) => {
  return (
    <div className="grid max-w-6xl justify-items-center">
      <div>
        <Image
          src={imageUrl}
          width={100}
          height={100}
          className={`rounded-full `}
        />
      </div>
      <div className="pt-3">
        <p className="italic text-lg text-slate-600 dark:text-slate-200">
          {author}
        </p>
      </div>
    </div>
  );
};

export default Quote;
