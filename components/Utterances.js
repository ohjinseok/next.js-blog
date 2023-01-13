import React, { memo } from 'react'

function Utterances() {
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return
        }
        const scriptElement = document.createElement('script')
        scriptElement.src = 'https://utteranc.es/client.js'
        scriptElement.async = true
        scriptElement.setAttribute('repo', 'ohjinseok/next.js-blog')
        scriptElement.setAttribute('issue-term', 'pathname')
        scriptElement.setAttribute('theme', 'gruvbox-dark')
        scriptElement.crossOrigin = 'anonymous'
        elem.appendChild(scriptElement)
      }}
    />
  )
}

export default memo(Utterances)
