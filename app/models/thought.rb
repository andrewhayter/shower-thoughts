class Thought < ApplicationRecord

  def next_id
    self.class.where('id > ?', self.id).pluck(:id).first
  end

  def previous_id
    self.class.where('id < ?', self.id).pluck(:id).last
  end
  
  def self.update_from_feed()
    xml = HTTParty.get('https://www.reddit.com/r/showerthoughts/.rss').body
    feed = Feedjira::Feed.parse xml
    feed.entries.each do |entry|
      unless exists? :guid => entry.entry_id
        create!(
          :text => entry.title,
          :guid => entry.entry_id
        )
      end
    end
  end
end
