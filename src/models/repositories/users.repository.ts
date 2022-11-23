import { UsersEntity } from 'src/models/entities/users.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UsersEntity)
export class UserRepository extends Repository<UsersEntity> {
  async findUserByAccountId(accountId: number): Promise<UsersEntity> {
    const user = await this.createQueryBuilder('users')
      .select('*')
      .innerJoin('accounts', 'accounts', 'accounts.ownerId = users.id')
      .where('accounts.id = :accountId', { accountId })
      .execute();
    if (user[0]) {
      return user[0];
    } else return null;
  }
}
