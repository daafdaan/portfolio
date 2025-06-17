/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { IconProps } from "../primitives/Icon"
import { LabelButtonProps } from "../primitives/LabelButton"
import { ButtonProps, Button } from "../elements/Button"

// [insert:imports]

export type BarNavigationProps = HTMLAttributes<HTMLElement> & {
  buttonProps?: ButtonProps
  buttonIconProps?: IconProps
  buttonLabelButtonProps?: LabelButtonProps
  button2Props?: ButtonProps
  button2IconProps?: IconProps
  button2LabelButtonProps?: LabelButtonProps
  button3Props?: ButtonProps
  button3IconProps?: IconProps
  button3LabelButtonProps?: LabelButtonProps
  button4Props?: ButtonProps
  button4IconProps?: IconProps
  button4LabelButtonProps?: LabelButtonProps
  button5Props?: ButtonProps
  button5IconProps?: IconProps
  button5LabelButtonProps?: LabelButtonProps
} // [replace:types]

export const BarNavigation = ({
  style,
  buttonProps,
  buttonIconProps,
  buttonLabelButtonProps,
  button2Props,
  button2IconProps,
  button2LabelButtonProps,
  button3Props,
  button3IconProps,
  button3LabelButtonProps,
  button4Props,
  button4IconProps,
  button4LabelButtonProps,
  button5Props,
  button5IconProps,
  button5LabelButtonProps,
  ...props
}: BarNavigationProps) => {
  const styles = style || defaultStyles

  return (
    <Frame style={styles} {...{ ...defaultProps.component, ...props }}>
      <Button
        style={{
          backgroundColor: "hsl(0deg 0% 75%)",
          cursor: "pointer",
          borderTopRightRadius: "0.5rem",
          borderBottomRightRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
          borderTopLeftRadius: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          paddingTop: "1rem",
          paddingRight: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
        {...{ ...defaultProps.children.buttonProps, ...buttonProps }}
        iconProps={{
          ...defaultProps.children.buttonIconProps,
          ...buttonIconProps,
        }}
        labelButtonProps={{
          ...defaultProps.children.buttonLabelButtonProps,
          ...buttonLabelButtonProps,
        }}
      ></Button>
      <Button
        style={{
          cursor: "pointer",
          borderTopRightRadius: "0.5rem",
          borderBottomRightRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
          borderTopLeftRadius: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          paddingTop: "1rem",
          paddingRight: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
        {...{ ...defaultProps.children.button2Props, ...button2Props }}
        iconProps={{
          ...defaultProps.children.button2IconProps,
          ...button2IconProps,
        }}
        labelButtonProps={{
          ...defaultProps.children.button2LabelButtonProps,
          ...button2LabelButtonProps,
        }}
      ></Button>
      <Button
        style={{
          cursor: "pointer",
          borderTopRightRadius: "0.5rem",
          borderBottomRightRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
          borderTopLeftRadius: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          paddingTop: "1rem",
          paddingRight: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
        {...{ ...defaultProps.children.button3Props, ...button3Props }}
        iconProps={{
          ...defaultProps.children.button3IconProps,
          ...button3IconProps,
        }}
        labelButtonProps={{
          ...defaultProps.children.button3LabelButtonProps,
          ...button3LabelButtonProps,
        }}
      ></Button>
      <Button
        style={{
          cursor: "pointer",
          borderTopRightRadius: "0.5rem",
          borderBottomRightRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
          borderTopLeftRadius: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          paddingTop: "1rem",
          paddingRight: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
        {...{ ...defaultProps.children.button4Props, ...button4Props }}
        iconProps={{
          ...defaultProps.children.button4IconProps,
          ...button4IconProps,
        }}
        labelButtonProps={{
          ...defaultProps.children.button4LabelButtonProps,
          ...button4LabelButtonProps,
        }}
      ></Button>
      <Button
        style={{
          cursor: "pointer",
          borderTopRightRadius: "0.5rem",
          borderBottomRightRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
          borderTopLeftRadius: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          paddingTop: "1rem",
          paddingRight: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
        {...{ ...defaultProps.children.button5Props, ...button5Props }}
        iconProps={{
          ...defaultProps.children.button5IconProps,
          ...button5IconProps,
        }}
        labelButtonProps={{
          ...defaultProps.children.button5LabelButtonProps,
          ...button5LabelButtonProps,
        }}
      ></Button>
    </Frame>
  )
}
type DefaultProps = {
  component: BarNavigationProps
  children: BarNavigationProps
}
const defaultProps: DefaultProps = {
  component: {},
  children: {
    buttonProps: {},
    buttonIconProps: {
      icon: "__default__",
    },
    buttonLabelButtonProps: {
      children: "Label",
    },
    button2Props: {},
    button2IconProps: {
      icon: "__default__",
    },
    button2LabelButtonProps: {
      children: "Label",
    },
    button3Props: {},
    button3IconProps: {
      icon: "__default__",
    },
    button3LabelButtonProps: {
      children: "Label",
    },
    button4Props: {},
    button4IconProps: {
      icon: "__default__",
    },
    button4LabelButtonProps: {
      children: "Label",
    },
    button5Props: {},
    button5IconProps: {
      icon: "__default__",
    },
    button5LabelButtonProps: {
      children: "Label",
    },
  },
}
const defaultStyles: CSSProperties = {
  cursor: "pointer",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "start",
  gap: "0.5rem",
  alignSelf: "stretch",
  height: "fit-content",
}
