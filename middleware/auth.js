const Users=require('../models/User');
const jwt=require('jsonwebtoken');
const auth=async(req, res,next) => {
	try {
		const token=req.header('Authorization');
		if (!token) {
			return res.status(400).json({message: 'Invalid authentication'});
		}
		const decoded=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
		if (!decoded) {
			return res.status(400).json({message: 'Invalid authentication'});
		}
		const user=await Users.findOne({_id:decoded.id});
		req.user = user;
		next();
	} catch (err) {
		return res.status(500).json({msg: err.message});
	}
}
module.exports=auth;