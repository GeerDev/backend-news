const typeError = (err, req, res, next) => {
    if(err.name !== 'ValidationError') return res.status(500).send("There was a problem in the creation of the news item");
    let errors = Object.values(err.errors).map(el => el.message);
    if(errors.length > 1) {
        let chain = "";
        for (let i = 0; i < errors.length; i++) {
          chain += errors[i] + " || ";
        }
        const string = chain.slice(0, -4);
        res.status(400).send({messages: string});
    } else {
        res.status(400).send({messages: errors[0]});
    }
 }

module.exports = { typeError }