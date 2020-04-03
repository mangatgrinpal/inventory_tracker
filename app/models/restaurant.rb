class Restaurant < ApplicationRecord
	has_one_attached :image
	has_many :items
	

	validates :name, presence: true, length: { maximum: 64 }



	default_scope { order(created_at: :asc)}
end
