import React from "react";

import { Button, Img, Line, Text } from "components";
import { KeyObject } from "crypto";

type FrameThreeColumnunsplasheq9sa7tProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "p30completed"
  | "p20m"
  | "widenmyworld"
  | "howtogrowyour"
  | "janedoeregional"
  | "janedoeregionalOne"
  | "card"
> &
  Partial<{
    p30completed: string;
    p20m: string;
    widenmyworld: string;
    howtogrowyour: string;
    janedoeregional: string;
    janedoeregionalOne: string;
    card: object;
  }>;

const FrameThreeColumnunsplasheq9sa7t: React.FC<
  FrameThreeColumnunsplasheq9sa7tProps
> = (props) => {
  //console.log(props);
  return (
    <>
      <div className={props.className}>
        <div className="relative w-full">
          <Img
            className="h-[120px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
            src={props.card['image'].uri}
            alt="unsplasheq9sa7t"
          />
          <Button
            className="absolute cursor-pointer flex items-center justify-center min-w-[125px] completed-percent-bar"
            leftIcon={
              <div className="h-3 mt-px mb-0.5 mr-1 w-3 top-[1%] bottom-[2%] right-[2%]">
                <Img className="h-3" src="images/img_vector.svg" alt="Vector" />
              </div>
            }
            shape="round"
            color="gray_50"
            size="sm"
            variant="fill"
          >
            <div className="!text-blue_gray-900 font-bold font-ppneuemontreal leading-[normal] text-left text-xs tracking-[0.18px]">
              {props?.p30completed}
            </div>
          </Button>
          <div className="flex flex-row items-center justify-between mt-auto mx-auto w-[94%] md:w-full">
            <div className="flex flex-col items-start justify-start w-6">
              <Button
                className="flex h-6 items-center justify-center w-6"
                shape="circle"
                color="orange_A700"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-3.5"
                  src="images/img_contrast.svg"
                  alt="contrast"
                />
              </Button>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[59px] rounded-[12px]"
              leftIcon={
                <div className="h-3 mr-1 w-3 bg-white-A700 my-px">
                  <Img className="h-3" src="images/img_clock.svg" alt="clock" />
                </div>
              }
              color="black_900_b2"
              size="xs"
              variant="fill"
            >
              <div className="!text-white-A700 font-bold font-ppneuemontreal leading-[normal] text-right text-xs tracking-[0.18px]">
                {props?.p20m}
              </div>
            </Button>
          </div>
          <div className="absolute bottom-[0] h-0.5 inset-x-[0] mx-auto w-full">
            <Line className="absolute bg-gray-300 h-0.5 inset-[0] justify-center m-auto w-full" />
            <Line className="absolute bg-orange-A700 h-0.5 inset-y-[0] left-[0] my-auto w-[33%]" />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-4 h-full items-start justify-between pb-3 pt-2 px-2 rounded-bl-lg rounded-br-lg w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="flex flex-col gap-0.5 items-start justify-start w-full">
              <Text
                className="text-gray-600 text-xs tracking-[0.18px] w-full"
                size="txtPPNeueMontrealMedium12"
              >
                {props.card['name']}
              </Text>
              <Text
                className="max-w-[228px] md:max-w-full text-base text-black-900 tracking-[0.24px]"
                size="txtPPNeueMontrealBold16"
              >
                {props?.howtogrowyour}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-gray-800 text-xs tracking-[0.18px] w-full"
                size="txtPPNeueMontrealMedium12Gray800"
              >
                {props.card['experts'][0]["firstName"]} {props.card['experts'][0]["lastName"]}
              </Text>
              <Text
                className="text-gray-600 text-xs tracking-[0.18px] w-full"
                size="txtPPNeueMontrealBold12"
              >
                {props?.janedoeregionalOne}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-end w-full">
            <Img className="h-4 w-4" src="images/img_share.svg" alt="share" />
            <Img
              className="h-4 w-4"
              src="images/img_bookmark.svg"
              alt="bookmark"
            />
          </div>
        </div>
      </div>
    </>
  );
};

FrameThreeColumnunsplasheq9sa7t.defaultProps = {
  p30completed: "30% Completed",
  p20m: "20m",
  widenmyworld: "COMMUNICATING AS A LEADER",
  howtogrowyour: "Peak Performance: Going From Good to Great with Simon Taudel",
  janedoeregional: "Jane Doe",
  janedoeregionalOne: "Subway APAC",
};

export default FrameThreeColumnunsplasheq9sa7t;
