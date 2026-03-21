import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}

export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;

  return (
    <Container className="mb-20">
      <div className="flex flex-col gap-10 lg:flex-nowrap lg:gap-10 xl:flex-row">
        {/* SLIKA */}
        <div
          className={`flex w-full items-center justify-center xl:w-1/2 ${
            props.imgPos === "right" ? "xl:order-1" : ""
          }`}
        >
          <div className="w-full overflow-hidden xl:max-w-[521px] xl:rounded-2xl xl:shadow-2xl">
            <Image
              src={data.image}
              width={521}
              height={521}
              alt="Aboutmw"
              className="h-[260px] w-full object-cover sm:h-[320px] xl:h-auto xl:rounded-2xl"
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        {/* TEKST */}
        <div
          className={`flex w-full items-center xl:w-1/2 ${
            data.imgPos === "right" ? "xl:justify-end" : "xl:pl-40"
          }`}
        >
          <div className="w-full min-w-0 p-5">
            <div className="mt-4 flex w-full flex-col text-center xl:text-left">
              <h3 className="mx-auto max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:mx-0">
                {data.title}
              </h3>

              <p className="mx-auto max-w-2xl p-4 text-base leading-7 text-gray-500 sm:text-lg lg:text-xl xl:mx-0">
                {data.desc}
              </p>
            </div>

            <div className="mt-6 w-full">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

function Benefit(props: any) {
  return (
    <div className="mt-8 flex items-start space-x-3">
      <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-themecolor">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-indigo-50",
        })}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="text-lg font-medium text-gray-800 sm:text-xl">
          {props.title}
        </h4>
        <p className="mt-1 text-sm leading-6 text-gray-500 sm:text-base">
          {props.children}
        </p>
      </div>
    </div>
  );
}
