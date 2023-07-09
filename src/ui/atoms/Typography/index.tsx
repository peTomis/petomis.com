import classNames from "classnames"
import React from "react"

export declare type ThemeColor = "white" | "black"

export declare type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "base"

export declare type FontWeight =
  | "regular"
  | "bold"
  | "extraBold"
  | "light"
  | "thin"

export declare type FontFamily = "opensans"

export interface TextProps {
  textClassName?: string
  font?: FontFamily
  component?: string
  underline?: boolean
  capitalize?: boolean
  textCenter?: boolean
  textRight?: boolean
  textLeft?: boolean
  textJustify?: boolean
  truncate?: boolean
  color?: ThemeColor
  variant?: TextVariant
  fontSize?: TextVariant
  fontSizeValue?: string
  weight?: FontWeight
  fillLine?: boolean
}

export interface CustomTypographyProps extends Omit<TextProps, "component"> {
  children: React.ReactNode
  className?: string
  onClick?: any
  style?: React.CSSProperties
  component?: keyof JSX.IntrinsicElements
  fontFamily?: string
  lineTrough?: boolean
  error?: boolean
  innerRef?: React.LegacyRef<any>
}

interface CompProps {
  tag: keyof JSX.IntrinsicElements
}

const HtmlTag: React.FunctionComponent<
  CompProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ tag: Wrapper = "p", children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>
}

const fontWeight = (weight: FontWeight) => {
  switch (weight) {
    case "regular":
      return "font-regular"
    case "bold":
      return "font-bold"
    case "extraBold":
      return "font-extraBold"
    case "thin":
      return "font-thin"
    case "light":
      return "font-light"
    default:
      return null
  }
}

const getColor = (color: ThemeColor) => {
  switch (color) {
    case "black":
      return "text-black"
    case "white":
      return "text-white"
    default:
      return null
  }
}

const Typography = ({
  children,
  className,
  style,
  onClick,
  error,
  fontFamily,
  innerRef,
  ...props
}: CustomTypographyProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "tw-typography",
        {
          capitalize: props.capitalize,
          truncate: props.truncate,
          "md:text-h1": props.variant === "h1",
          "md:text-h2": props.variant === "h2",
          "md:text-h3": props.variant === "h3",
          "md:text-h4": props.variant === "h4",
          "md:text-h5": props.variant === "h5",
          "md:text-h6": props.variant === "h6",
          "md:text-subtitle1": props.variant === "subtitle1",
          "md:text-subtitle2": props.variant === "subtitle2",
          // "font-ebGaramond":props.font === "opensans",
          "text-justify": props.textJustify,
          "text-left": props.textLeft,
          "text-right": props.textRight,
          "text-center": props.textCenter,
          underline: props.underline,
        },
        props.textClassName,
        className
      )}
      style={{
        fontFamily,
        ...style,
      }}
      ref={innerRef}
    >
      {children}
    </div>
  )
}

Typography.defaultProps = {
  variant: "base",
}

export default Typography
