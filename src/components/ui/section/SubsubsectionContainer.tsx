import * as React from "react"

import * as style from "./section.module.css"
import { cx } from "../../../lib/reexports"

interface Props {
  className?: string
}

const SubsubsectionContainer: React.FC<Props> = props => {
  const classes = cx(style.subsubsectionContainer, props.className)

  return <div className={classes}>{props.children}</div>
}

export default SubsubsectionContainer
