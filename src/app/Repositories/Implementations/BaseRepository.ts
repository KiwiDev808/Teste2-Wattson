import dotenv from 'dotenv'
import { default as knex, Knex } from 'knex'
import { knexConfig } from '../../../config/database'

dotenv.config()

export class BaseRepository {
  private static dbConnection: Knex | null
  protected static connection(): Knex {
    if (!this.dbConnection) {
      this.dbConnection = knex(knexConfig)
    }

    return this.dbConnection
  }

  protected static async destroy(): Promise<void> {
    if (this.dbConnection) {
      await this.dbConnection.destroy()
      this.dbConnection = null
    }
    return
  }
}
