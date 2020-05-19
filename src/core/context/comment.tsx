import * as React from 'react'

export type Comment = {
  name: string
  email: string
  rating: number
  comment: string
  datetime: Date
}

interface CommentContextValue {
  comments: Comment[]
  setComments: React.SetStateAction<any>
}

type CommentContextOrUndefined = CommentContextValue | undefined

const CommentContext = React.createContext<CommentContextOrUndefined>(undefined)

export function useComment(): CommentContextValue {
  const context = React.useContext<CommentContextOrUndefined>(CommentContext)

  if (context === undefined) {
    throw new Error(`useComment must be used within CommentProvider`)
  }

  return context
}

export const STORAGE_COMMENTS = 'comments'
const initialComments = [
  {
    name: 'Alejandro Garcia Anglada',
    email: 'aganglada@gmail.com',
    rating: 4,
    comment: 'Very nice app!',
    datetime: 1589901845787,
  },
  {
    name: 'Emily Arack',
    email: 'emily.atack@gmail.com',
    rating: 4,
    comment: 'Really like the interface',
    datetime: 1589901732108,
  },
  {
    name: 'Tez Ilyas',
    email: 'Tez.ilyas@gmail.com',
    rating: 5,
    comment: 'Really useful stuff!',
    datetime: 1589901396038,
  },
]

export function CommentProvider(props: { children: JSX.Element }) {
  const [comments, setComments] = React.useState(
    JSON.parse(window.localStorage.getItem(STORAGE_COMMENTS) as string) ||
      initialComments
  )

  React.useEffect(() => {
    window.localStorage.setItem(STORAGE_COMMENTS, JSON.stringify(comments))
  }, [comments])

  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {props.children}
    </CommentContext.Provider>
  )
}
