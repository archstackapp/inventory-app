import React from "react"
import { cx } from "../../lib/reexports"

interface Props {
  title: string
  color?: string
  className?: string
  style?: { borderColor?: string }
}

export default function Badge(props: Props): JSX.Element {
  const style: any = props.style || {}

  if (props.color) {
    style.backgroundColor = props.color
  }

  return (
    <div
      className={cx(
        "rounded-full px-2 py-1 bg-gray-600 text-white text-sm",
        props.className
      )}
      style={style}>
      {props.title}
    </div>
  )
}
