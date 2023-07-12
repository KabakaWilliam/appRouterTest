import Button from "@/components/Button";
import ShowIpButton from "@/components/ShowIpButton";

const page = () => {
  return (
    <main className="md:grid grid-cols-3 flex flex-col items-center gap-y-2 md:px-[20%]">
      <div className="md:h-[200px] md:flex items-center justify-center outline outline-red-400">
        <Button />
      </div>
      <div className="md:h-[200px] md:flex items-center justify-center">
        <ShowIpButton />
      </div>
      <div className="md:h-[200px] md:flex items-center justify-center">
        <Button />
      </div>
    </main>
  );
};

export default page;
