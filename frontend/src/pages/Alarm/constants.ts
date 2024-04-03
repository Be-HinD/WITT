export interface IFollowEvent {
	data: {
		content: [
			{
				notificationId: number
				readStatus: boolean
				type: string
				event: string
				message: string
				receiverId: number
				senderId: number
				senderName: string
				senderImg: string
				time: string
			}
		]
	}
}
