class ChatroomController < ApplicationController

  before_action :require_user, except: [:welcome]

  def index
    @message = Message.new
    @messages = Message.custom_display
  end

  def welcome
    redirect_to index_path if logged_in?
  end

end
