import { DataSource } from 'typeorm';
import { User } from '@/database/entities/user.entity';
import { Role } from '@/database/entities/role.entity';
import { UserRepository, RoleRepository } from '@/database/repositories';
import { adminToAdd, userToAdd } from '../data/users';
import { RoleEnum } from '@/common/enums/roles.enum';

export class UsersSeeder {
  static async seed(dataSource: DataSource): Promise<void> {
    const roleRepository = new RoleRepository(dataSource.getRepository(Role));
    const userRepository = new UserRepository(
      dataSource.getRepository(User),
      roleRepository,
    );

    const users = [adminToAdd, userToAdd];

    for (const userData of users) {
      const existingUser = await userRepository.findByUsername(
        userData.username,
      );
      if (!existingUser) {
        console.log(`Seeding user ${userData.username}...`);

        const role =
          userData.username === 'admin' ? RoleEnum.ADMIN : RoleEnum.USER;
        await userRepository.create(userData, role);
        console.log(`User ${userData.username} seeded successfully`);
      } else {
        console.log(`User ${userData.username} already seeded`);
      }
    }
  }
}
