/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { DescriptionProps } from "../primitives/Description"
import { IconProps } from "../primitives/Icon"
import { LabelButtonProps } from "../primitives/LabelButton"
import { TaglineProps } from "../primitives/Tagline"
import { TitleProps } from "../primitives/Title"
import { Frame } from "../frames/Frame"
import { ButtonProps } from "../elements/Button"
import { ButtonBarProps, ButtonBar } from "../elements/ButtonBar"
import {
  TextblockDetailsProps,
  TextblockDetails,
} from "../elements/TextblockDetails"

export type CardProductProps = HTMLAttributes<HTMLElement> & {
  textblockDetailsProps?: TextblockDetailsProps
  textblockDetailsTaglineProps?: TaglineProps
  textblockDetailsTitleProps?: TitleProps
  textblockDetailsDescriptionProps?: DescriptionProps
  buttonBarProps?: ButtonBarProps
  buttonBarButtonProps?: ButtonProps
  buttonBarButtonIconProps?: IconProps
  buttonBarButtonLabelButtonProps?: LabelButtonProps
  buttonBarButton2Props?: ButtonProps
  buttonBarButton2IconProps?: IconProps
  buttonBarButton2LabelButtonProps?: LabelButtonProps
}

export const CardProduct = ({
  style,
  textblockDetailsProps,
  textblockDetailsTaglineProps,
  textblockDetailsTitleProps,
  textblockDetailsDescriptionProps,
  buttonBarProps,
  buttonBarButtonProps,
  buttonBarButtonIconProps,
  buttonBarButtonLabelButtonProps,
  buttonBarButton2Props,
  buttonBarButton2IconProps,
  buttonBarButton2LabelButtonProps,
  ...props
}: CardProductProps) => {
  const styles = style || defaultStyles

  return (
    <Frame style={styles} {...{ ...defaultProps.component, ...props }}>
      <TextblockDetails
        style={{
          cursor: "pointer",
          borderBottomStyle: "none",
          overflow: "hidden",
          flexWrap: "nowrap",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginTop: "1rem",
          marginRight: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
        {...{
          ...defaultProps.children.textblockDetailsProps,
          ...textblockDetailsProps,
        }}
        taglineProps={{
          ...defaultProps.children.textblockDetailsTaglineProps,
          ...textblockDetailsTaglineProps,
        }}
        titleProps={{
          ...defaultProps.children.textblockDetailsTitleProps,
          ...textblockDetailsTitleProps,
        }}
        descriptionProps={{
          ...defaultProps.children.textblockDetailsDescriptionProps,
          ...textblockDetailsDescriptionProps,
        }}
      ></TextblockDetails>
      <ButtonBar
        style={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          marginTop: "1rem",
          marginRight: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
          width: "fit-content",
          height: "fit-content",
        }}
        {...{ ...defaultProps.children.buttonBarProps, ...buttonBarProps }}
        buttonProps={{
          ...defaultProps.children.buttonBarButtonProps,
          ...buttonBarButtonProps,
        }}
        buttonIconProps={{
          ...defaultProps.children.buttonBarButtonIconProps,
          ...buttonBarButtonIconProps,
        }}
        buttonLabelButtonProps={{
          ...defaultProps.children.buttonBarButtonLabelButtonProps,
          ...buttonBarButtonLabelButtonProps,
        }}
        button2Props={{
          ...defaultProps.children.buttonBarButton2Props,
          ...buttonBarButton2Props,
        }}
        button2IconProps={{
          ...defaultProps.children.buttonBarButton2IconProps,
          ...buttonBarButton2IconProps,
        }}
        button2LabelButtonProps={{
          ...defaultProps.children.buttonBarButton2LabelButtonProps,
          ...buttonBarButton2LabelButtonProps,
        }}
      ></ButtonBar>
    </Frame>
  )
}
type DefaultProps = {
  component: CardProductProps
  children: CardProductProps
}
const defaultProps: DefaultProps = {
  component: {},
  children: {
    textblockDetailsProps: {},
    textblockDetailsTaglineProps: {
      children: "Tagline",
    },
    textblockDetailsTitleProps: {
      children: "Product Card Title",
    },
    textblockDetailsDescriptionProps: {
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus. Donec euismod in fringilla.",
    },
    buttonBarProps: {},
    buttonBarButtonProps: {},
    buttonBarButtonIconProps: {
      icon: "__default__",
    },
    buttonBarButtonLabelButtonProps: {
      children: "Label",
    },
    buttonBarButton2Props: {},
    buttonBarButton2IconProps: {
      icon: "__default__",
    },
    buttonBarButton2LabelButtonProps: {
      children: "Label",
    },
  },
}
const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 8%)",
  backgroundImage:
    "linear-gradient(90deg, hsl(0deg 0% 15% / 80%) 0%, hsl(0deg 0% 15% / 0%) 75%)",
  cursor: "pointer",
  borderTopWidth: "var(--hairline)",
  borderTopStyle: "solid",
  borderTopColor: "hsl(0deg 0% 15%)",
  borderRightWidth: "var(--hairline)",
  borderRightStyle: "solid",
  borderRightColor: "hsl(0deg 0% 15%)",
  borderBottomWidth: "var(--hairline)",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(0deg 0% 15%)",
  borderLeftWidth: "var(--hairline)",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(0deg 0% 15%)",
  borderTopRightRadius: "1rem",
  borderBottomRightRadius: "1rem",
  borderBottomLeftRadius: "1rem",
  borderTopLeftRadius: "1rem",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  paddingTop: "0.5rem",
  paddingRight: "0.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "0.5rem",
  alignSelf: "stretch",
  height: "fit-content",
}
