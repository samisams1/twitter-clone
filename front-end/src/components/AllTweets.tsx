import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import React from "react"
import { Link } from "react-router-dom"
import { ME_QUERY } from "../pages/Profile"
import "../styles/allTweets.css"
import moment from "moment";
import DeleteLike from "./DeleteLike"
import LikeTweet from "./LikeTweet"
import CreateComment from "./CreateComment"

export const TWEETS_QUERY = gql`
query Tweets {
	tweets {
	  id
	  content
    createdAt
	  author {
      id
      name
		Profile {
		  loaction
		  avatar
		}
	  }
	  likes {
		id
		content
	  }
	  comments {
		id
		content
	  }
	}
  }
`

export default function AllTweets() {
	const { loading, error, data } = useQuery(TWEETS_QUERY)
	
	const { loading: meLoading, error: meError, data: meData } = useQuery(ME_QUERY)
console.log(meData)
	if (loading) return <p>Loading...</p>
	if (error) return <p>{error.message}</p>

	if (meLoading) return <p>Loading...</p>
	if (meError) return <p>{meError.message}</p>

	interface AllTweets {
		id: number
		content: string
		createdAt: string
		likes: []
		comments: []
		author: {
			id: number
			name: string
			Profile: {
				loaction:string
				avatar: string
			}
		}
	}
	interface LikedTweets {
		id: number
		Tweet: {
			id: number
		}
	}

	return (
		<div>
			{data.tweets.map((tweet: AllTweets) => (
				
				<div className="tweet-container">
					<Link to={`/tweet/${tweet.id}`}>
						<div className="tweet-header">
							<img
								src={tweet.author.name}
								style={{ width: "40px", borderRadius: "50%" }}
								alt="avatar"
							/>
							<Link to={`/user/${tweet.author.id}`}>
								<h4 className="name">
									{tweet.author.id+ "baba"} </h4>
							</Link>
							
							<p className="date-time">
							{  tweet.createdAt} ago
							
							</p>
						</div>
						<p>{tweet.content}</p>
					</Link>
				
						<div className="likes">
						{meData.me.LikedTweet.map((t: LikedTweets) => t.Tweet.id).includes(tweet.id) ? (
							<span>
								<DeleteLike
									id={
										meData.me.likedTweet.filter(
											(like: LikedTweets) => like.Tweet.id === tweet.id
										)[0].id
									}
								/>
								{tweet.likes.length}
							</span>
						) : (
							<span>
								<LikeTweet id={tweet.id} />
								{tweet.likes.length}
							</span>
						)}
						<span style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
							<CreateComment
								avatar={tweet.author.name}
								name={tweet.author.name}
								tweet={tweet.content}
								id={tweet.id}
							/>
							{tweet.comments.length > 0 ? tweet.comments.length : null}
						</span>
					</div>
				</div>
			))}
		</div>
	)
}