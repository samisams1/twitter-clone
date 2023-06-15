import { gql, useQuery } from "@apollo/client"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import CreateProfile from "../components/CreateProfile"
import Following from "../components/Following"
import LeftNav from "../components/LeftNav"
import LikedTweets from "../components/LikedTweets"
import PopularTweets from "../components/PopularTweets"
import UpdateProfile from "../components/UpdateProfile"
import "../styles/primary.css"
import "../styles/profile.css"

export const ME_QUERY = gql`
  query profiles {
    me {
      id
      bio
      avatar
      website
      
     }
  }
`

function Profile() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(ME_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  return (
    <>
      <div className="primary">
        <div className="left">
          <LeftNav />
        </div>
        <div className="profile">
          <div className="profile-info">
            <div className="profile-head">
              <span className="back-arrow" onClick={() => navigate('/')}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </span>
              <span className="nickname">
                <h3>{data.me.name}</h3>
              </span>
            </div>
            <div className="avatar">
              {data.me.Profile?.avatar ? (
                <img
                  src={data.me.Profile.avatar}
                  style={{ width: "150px", borderRadius: "50%" }}
                  alt="avatar"
                />
              ) : (
                <i className="fa fa-user fa-5x" aria-hidden="true"></i>
              )}
            </div>
            <div className="make-profile">
              {data.me.Profile ? <UpdateProfile /> : <CreateProfile />}
            </div>

            <h3 className="name">{data.me.name}</h3>

            {data.me.Profile ? (
              <p>
                <i className="fas fa-link"> </i>{" "}
                <Link
                  to={{ pathname: `http://${data.me.Profile.website}` }}
                  target="_blank"
                >
                  {data.me.Profile.website}
                </Link>
              </p>
            ) : null}
            <div className="followers">
            <Following/>
              <p>384 followers</p>
            </div>
          </div>
          <LikedTweets tweets={data.me} />
        </div>
        <div className="right">
          <PopularTweets/>
        </div>
      </div>
    </>
  )
}

export default Profile
