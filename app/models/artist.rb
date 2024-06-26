class Artist < ApplicationRecord
  has_one_attached :photo
  validates :artist_name, presence: true


  def self.search(search)
    if search
      where('artist_name ILIKE ?', "%#{search}%") if search.present?
    else
      all
    end
  end

  has_many :albums,
    foreign_key: :artist_id,
    class_name: 'Album'

  has_many :follows,
    foreign_key: :artist_id,
    class_name: 'Follow'

  has_many :followers,
    through: :follows,
    source: :user

  has_many :tracks,
    through: :albums,
    source: :tracks

  has_many :listed_top_tracks,
    foreign_key: :artist_id,
    class_name: 'TopTrack'

  has_many :top_tracks,
    through: :listed_top_tracks,
    source: :track


end
