"use client"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { getById } from "@/convex/documents"
import { useQuery } from "convex/react"
import React from "react"

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">
  }
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const document = useQuery(api.documents / getById, {
    documentId: params.documentId,
  })

  if (document === undefined) {
    return <div>Loading..</div>
  }
  ;``
  return (
    <div className="pb-40">
      <div className="md:max-x-3xl lg:max-w-4xl mx-auto">
        <Toolbar initalData={document} />
      </div>
    </div>
  )
}

export default DocumentIdPage
