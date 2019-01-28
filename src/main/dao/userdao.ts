import { User } from '../models/user';
import { SessionFactory } from '../util/session-factory';
import { Role } from '../models/role';

export class UserDao {

    public async getAllUsers(): Promise<User[]> {
        const pool = SessionFactory.getConnectionPool();
        const client = await pool.connect();
        const result = await client.query('SELECT * from "user"');

        const user = result.rows;
        const userData = [];
        user.forEach(use => {
        userData.push(new User,
        use.userid,
        use.username,
        use.password,
        use.firstname,
        use.lastname,
        use.email,
        new Role(use.role, 'testrole')
        );

        });
        return userData;


    }
}