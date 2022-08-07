import React from 'react'
import { useRouter } from 'next/router'
function Commentid() {
  const router = useRouter()
  const { commentid, blogid } = router.query
  return (
    <div>Commentid {commentid} blogid={blogid}</div>
  )
}

export default Commentid