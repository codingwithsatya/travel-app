import User from '../models/User.js'

export const createUser = async(req, res) => {
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()

        res.status(200).json({ success: true, message: "Successfully Created", data: savedUser })
    } catch (error) {

        res.status(500).json({ success: false, message: "Error while creating User. Try again."})
    }
}

// updateUser
export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updateUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true})
        res.status(200).json({ success: true, message: "Successfully Updated", data: updateUser })
    } catch (error) {
        res.status(500).json({ success: false, message: "Error while updating User. Try again."})
    }
}

// deleteUser
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Successfully deleted" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Error while deleting User. Try again."})
    }
}

// getSingle User
export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id)

        res.status(200).json({ success: true, message: "Successfull", data: user })
    } catch (error) {
        res.status(404).json({ success: false, message: "No Data available"})
    }
}


// getAll User
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({})
        
        res.status(200).json({ success: true, message: "Successfull", data: users })
    } catch (error) {
        res.status(404).json({ success: false, message: "No Data available"})
    }
}
