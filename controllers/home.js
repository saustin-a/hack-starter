/**
 * GET /
 * Home page.
 * this is a test
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};
