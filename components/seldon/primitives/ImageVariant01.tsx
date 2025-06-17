/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLImg } from "../native-react/HTML.Img"
import { CSSProperties, ImgHTMLAttributes } from "react"

export type ImageVariant01Props = ImgHTMLAttributes<HTMLImageElement> & {}

export const ImageVariant01 = ({ style, ...props }: ImageVariant01Props) => {
  const styles = style || defaultStyles

  return <HTMLImg style={styles} {...{ ...defaultProps.component, ...props }} />
}
type DefaultProps = {
  component: ImageVariant01Props
  children: ImageVariant01Props
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
  borderTopColor: "hsl(207deg 2% 10%)",
  borderRightWidth: "var(--hairline)",
  borderRightStyle: "solid",
  borderRightColor: "hsl(207deg 2% 10%)",
  borderBottomWidth: "var(--hairline)",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(207deg 2% 10%)",
  borderLeftWidth: "var(--hairline)",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(207deg 2% 10%)",
  objectFit: "cover",
  alignSelf: "stretch",
  flex: "1 0 0",
}
