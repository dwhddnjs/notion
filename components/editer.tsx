"use client"

import React from "react"
import { BlockNoteEditor, PartialBlock } from "@blocknote/core"
import { useBlockNote, BlockNoteView } from "@blocknote/react"
import { useTheme } from "next-themes"

import "@blocknote/react/style.css"

interface EditerProps {
  onChange: (value: string) => void
  initialContent?: string
  editable?: boolean
}

export const Editer = ({ onChange, initialContent, editable }: EditerProps) => {
  const { resolvedTheme } = useTheme()
  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2))
    },
  })

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  )
}
