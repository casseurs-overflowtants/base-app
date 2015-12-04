Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '170671703285319', '25f515b914461fcf063dcd3d33fd074a'
end
