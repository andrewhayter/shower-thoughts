class PagesController < ApplicationController
  def home
    @first_thought_id = Thought.first.id
  end
end
