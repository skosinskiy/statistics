import { string } from "prop-types"

export const parseStr = (tagstring) => {
  return { __html: tagstring }
}