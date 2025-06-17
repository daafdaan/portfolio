/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLImg } from "../native-react/HTML.Img"
import { CSSProperties, ImgHTMLAttributes } from "react"

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {}

export const Image = ({ style, ...props }: ImageProps) => {
  const styles = style || defaultStyles

  return <HTMLImg style={styles} {...{ ...defaultProps.component, ...props }} />
}
type DefaultProps = {
  component: ImageProps
  children: ImageProps
}
const defaultProps: DefaultProps = {
  component: {
    src: "https://static.seldon.app/image-default.jpg",
  },
  children: {},
}
const defaultStyles: CSSProperties = {
  cursor: "pointer",
  borderTopWidth: "var(--hairline)",
  borderTopStyle: "solid",
  borderTopColor: "hsl(18deg 60% 45%)",
  borderRightWidth: "var(--hairline)",
  borderRightStyle: "solid",
  borderRightColor: "hsl(18deg 60% 45%)",
  borderBottomWidth: "var(--hairline)",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(18deg 60% 45%)",
  borderLeftWidth: "var(--hairline)",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(18deg 60% 45%)",
  objectFit: "cover",
  alignSelf: "stretch",
  flex: "1 0 0",
}
