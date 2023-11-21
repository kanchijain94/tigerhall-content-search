import React from "react";

const sizeClasses = {
  txtPPNeueMontrealMedium12: "font-medium font-ppneuemontreal",
  txtRobotoBold80: "font-bold font-roboto",
  txtPPNeueMontrealBold16: "font-bold font-ppneuemontreal",
  txtPPNeueMontrealMedium12Gray800: "font-medium font-ppneuemontreal",
  txtPPNeueMontrealBold12: "font-bold font-ppneuemontreal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
