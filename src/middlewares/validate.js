const validate = (schema, source = "body") => {
    return (req, res, next) => {
        try {
            const data = schema.parse(req[source]);

            req[`validated${source.charAt(0).toUpperCase() + source.slice(1)}`] = data;

            next();

        } catch (error) {
            return res.status(400).json({
                message: "Validation failed.",
                errors: error.issues
            });
        }
    };
};

export default validate;