exports.loginValidator = (req, res, next) => {
  const { email, password } = req.body;

  const errors = [];

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    errors.push('Valid email is required');
  }

  if (!password || typeof password !== 'string' || password.trim() === '') {
    errors.push('Password is required' );
  }

  if (errors.length > 0) {
    res.status(400).json({ errors });
  } else {
    next();
  }
};

exports.registerValidator = (req, res, next) => {
  const { name, email, password } = req.body;

  const errors = [];

  if (!name || typeof name !== 'string' || name.trim() === '' || name.length < 3) {
    errors.push('Name is required and must be at least 3 characters long');
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    errors.push('Valid email is required');
  }

  if (!password || typeof password !== 'string' || password.trim() === '') {
    errors.push('Password is required' );
  }

  if (password.length < 8) {
    errors.push('password must be greterthen 8');
  }

 if (errors.length > 0) {
    res.status(400).json({ errors });
  } else {
    next();
  }
};

