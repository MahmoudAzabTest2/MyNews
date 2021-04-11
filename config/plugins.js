module.exports = ({
  env
}) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME", 'mahmoudazabtest2'),
      api_key: env("CLOUDINARY_KEY", '182125893565713'),
      api_secret: env("CLOUDINARY_SECRET", '9L9ZTt9Lp1Pb230EHYmHicHP0z0'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
});
