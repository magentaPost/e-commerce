const pageNotFoundHandler = (req, res) => {
    res.status(404).send("Error 404: Page not found");
}

export default pageNotFoundHandler;