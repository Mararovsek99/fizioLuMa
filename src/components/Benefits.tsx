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
  const imageRight = props.imgPos === "right" || data.imgPos === "right";

  return (
    <Container className="mb-20 px-4 sm:px-6 lg:p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:gap-12 xl:flex-row xl:items-center xl:gap-16">
        {/* SLIKA */}
        <div
          className={`flex w-full items-center justify-center xl:w-1/2 ${
            imageRight ? "xl:order-2" : ""
          }`}
        >
          <div className="w-full max-w-[520px] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={data.image}
              width={521}
              height={521}
              alt={data.title}
              placeholder="blur"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 521px"
              quality={80}
              className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[420px] xl:h-[521px]"
            />
          </div>
        </div>

        {/* TEKST */}
        <div
          className={`flex w-full items-center ${
            imageRight ? "xl:order-1 xl:justify-start" : "xl:justify-start"
          } xl:w-1/2`}
        >
          <div className="w-full min-w-0 max-w-[560px]">
            <div className="mt-4 flex w-full flex-col text-center xl:mt-0 xl:text-left">
              <h3 className="mx-auto max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:mx-0">
                {data.title}
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg lg:text-xl xl:mx-0">
                {data.desc}
              </p>
            </div>

            <div className="mt-8 w-full">
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
          className: "h-7 w-7 text-indigo-50",
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
