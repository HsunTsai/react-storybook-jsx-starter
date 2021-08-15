const isDevelopMode = () => window.location === 'localhost' || process.env.NODE_ENV === 'development';

export default isDevelopMode;
