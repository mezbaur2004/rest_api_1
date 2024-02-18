exports.HelloGet = (req, res) => {
    // Implementation of the Hello function
    res.status(200).json({ status: "Success", data: "Hello, I'm Cristiano Ronaldo" });
};

exports.HelloPost = (req,res)=> {
    res.status(201).json({ status:"success", data: "Hello, I'm Leo Messi" })
}