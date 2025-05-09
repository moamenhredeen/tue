export type IssueDescription = {
	type: string
	version: number
	content: IssueContent[]
}

export type IssueContent = {
	type: string
	text: string | null
	content: IssueContent[] | null
}
