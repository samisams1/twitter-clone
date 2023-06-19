import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import React from "react"
import { Link } from "react-router-dom"
import { ME_QUERY } from "../pages/Profile"
//import "../styles/allTweets.css"

export const TWEETS_QUERY = gql`
	query TWEETS_QUERY {
		tweets {
			id
			createdAt
			content
			likes {
				id
			}
			comments {
				id
			}
			author {
				id
				name
				Profile {
					id
					avatar
				}
			}
		}
	}
`

export default function AllTweets() {
	const { loading, error, data } = useQuery(TWEETS_QUERY)
	const { loading: meLoading, error: meError, data: meData } = useQuery(ME_QUERY)

	if (loading) return <p>Loading...</p>
	if (error) return <p>{error.message}</p>

	if (meLoading) return <p>Loading...</p>
	if (meError) return <p>{meError.message}</p>

	interface AllTweets {
		id: number
		content: string
		createdAt: Date
		likes: []
		comments: []
		author: {
			id: number
			name: string
			Profile: {
				avatar: string
			}
		}
	}

	interface LikedTweets {
		id: number
		tweet: {
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
								src={tweet.author.Profile.avatar}
								style={{ width: "40px", borderRadius: "50%" }}
								alt="avatar"
							/>
							<Link to={`/user/${tweet.author.id}`}>
								<h4 className="name">{tweet.author.name} </h4>
							</Link>
							<p className="date-time">
								ago
							</p>
						</div>
						<p>{tweet.content}</p>
					</Link>
					<div className="likes">
						{meData.me.likedTweet.map((t: LikedTweets) => t.tweet.id).includes(tweet.id) ? (
							<span>
								DeleteLike
								
								{tweet.likes.length}
							</span>
						) : (
							<span>
								LikeTweet
								{tweet.likes.length}
							</span>
						)}
						<span style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
							CreateComment
							
							{tweet.comments.length > 0 ? tweet.comments.length : null}
						</span>
					</div>
				</div>
			))}
		</div>
	)
}