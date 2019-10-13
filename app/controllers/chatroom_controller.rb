class ChatroomController < ApplicationController

  before_action :require_user, except: [:welcome]

  def index
    @messages = Message.all
  end

  def welcome
  end

end
