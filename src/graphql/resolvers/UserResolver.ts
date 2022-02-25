import User from '../../models/User';

const UserResolver = {
    users: async () => {
        try {
            const usersFetched = await User.find();
            return usersFetched.map(user => (
                {
                    ...user._doc,
                    id: user.id,
                    createdAt: new Date(user._doc.createdAt).toISOString()
                }
            ))
        } catch(err) {
            throw err
        }
    }
}

export default UserResolver;