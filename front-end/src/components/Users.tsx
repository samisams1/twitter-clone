import { gql, useQuery } from "@apollo/client"
//import React from "react"
const USERS_QUERY = gql`
  query USERS_QUERY {
    users {
      name
    }
  }
`
interface User {
  name: string
}
export default function Users() {
  const { loading, error, data } = useQuery(USERS_QUERY)
  console.log("data");
  console.log(data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  console.log("data");
  console.log(data)
  return (
    <div>
      {data.users.map((user: User) => (
        <p>{user.name}</p>
      ))}
    </div>
  )
}