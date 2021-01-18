import { FormikProps } from "formik"
import React from "react"
import Select from "react-select"

interface Option {
  label: string
  value: string
}

interface Props {
  name: string
  value: string
  metadata: unknown
  fieldId: string
  handleChange: (value: string) => void
}

interface EnumMetadataItem {
  id: string
  label: string
}

export default function EnumEditor(props: Props) {
  const { name, metadata, handleChange, fieldId, value } = props

  if (!Array.isArray(metadata)) {
    console.error(
      `found non array metadata on field ${fieldId}: ${JSON.stringify(
        metadata
      )}`
    )
    return null
  }

  const tmpMetadata = metadata as EnumMetadataItem[]

  const options: { [key: string]: Option } = {}

  for (let item of tmpMetadata) {
    options[item.id] = { label: item.label, value: item.id }
  }

  console.log(value)
  console.log(options)
  console.log(tmpMetadata)

  const nullValue = value ? { value, label: options[value].label } : null

  return (
    <Select
      name={name}
      options={Object.values(options)}
      value={nullValue}
      onChange={option => handleChange(option.value)}
    />
  )
}
