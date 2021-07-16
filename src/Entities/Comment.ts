export class Comment {
  readonly id!: string
  description!: string
  audio!: string

  constructor(props: Omit<Comment, 'id'>, id: string) {
    Object.assign(this, props)

    this.id = id
  }
}
