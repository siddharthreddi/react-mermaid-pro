// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState, FC } from 'react'
import mermaid from 'mermaid'

interface ReactMermaidProProps {
  definition: string
  _key: string
  syntaxError?: React.ReactNode | ((message: string) => React.ReactNode)
}

const ReactMermaidPro: FC<ReactMermaidProProps> = (props) => {
  const { _key, definition, syntaxError } = props
  const [error, setError] = useState('')
  const id = `mermaid-${_key}`
  const ref = useRef<any>()

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false
    })
  }, [])

  useEffect(() => {
    if (ref.current) {
      try {
        mermaid.parse(definition)
        mermaid.mermaidAPI.render(id, definition, (result: any) => {
          ref.current.innerHTML = result
        })
        setError('')
      } catch (error) {
        console.log({ error })
        setError(error.str)
      }
    }
  }, [definition, id])

  return (
    <div>
      <div key='faux' id={id} />

      <div key='preview' ref={ref} />
      {error &&
        (syntaxError ? (
          syntaxError === true ? (
            <span>{error}</span>
          ) : (
            syntaxError
          )
        ) : null)}
    </div>
  )
}

export default ReactMermaidPro
