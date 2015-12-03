# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!
Rails.logger = Le.new('0f1cef8d-b05f-363c-8b75-4bb23c4a9374', :debug => true, :local => true)
