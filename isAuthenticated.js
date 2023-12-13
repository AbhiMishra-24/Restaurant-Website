function isAuthenticated(req, res, done) {
    if (req.user) return done();
    res.redirect("/login");
}

function isLoginAuthenticated(req, res, done) {
    if (!req.user) return done();
    res.redirect("/home");
}

export { isAuthenticated, isLoginAuthenticated };