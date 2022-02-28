import User from '../../models/User';

const UserResolver = {
    Query: {
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
        },//@ts-ignore
        user: async (_, {id}) => {
            try {
                const fetchedUser = await User.findById(id)
                return {
                    ...fetchedUser._doc,
                    id: fetchedUser.id,
                    createdAt: new Date(fetchedUser._doc.createdAt).toISOString()
                }
            } catch (err) {
                throw err
            }
        }
    },
    Mutation: { //@ts-ignore
        async createUser(_, { user }) {
            try {
                const { email, name } = user
                const modelUser = new User({email, name})
                const newUser = await modelUser.save()
                return { ...newUser._doc, id: newUser.id }
            } catch (err) {
                throw err
            }
        },//@ts-ignore
        async deleteUser(_, { id }) {
            try {               
                const deletedUser = await User.findByIdAndDelete(id)
                return {
                    ...deletedUser._doc,
                    id: deletedUser.id,
                    createdAt: new Date(deletedUser._doc.createdAt).toISOString()
                }
            } catch (err) {
                throw err
            }
        }
      },
}

export default UserResolver;