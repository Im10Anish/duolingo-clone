import { Button } from "@/components/ui/button";
import Image from "next/image";

const footerFlags = [
  {
    language: "Croatian",
    src: "/hr.svg",
  },
  {
    language: "French",
    src: "/fr.svg",
  },
  {
    language: "Spanish",
    src: "/es.svg",
  },
  {
    language: "Italian",
    src: "/it.svg",
  },
  {
    language: "Japanese",
    src: "/jp.svg",
  },
];

const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {footerFlags.map(({ language, src }) => (
          <Button size="lg" variant="ghost" className="w-full" key={language}>
            <Image
              src={src}
              alt={language}
              height={32}
              width={40}
              className="mr-4 rounded-md"
            />
            {language}
          </Button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
