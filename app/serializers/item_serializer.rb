class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :units




	has_one :category, through: :item_category

  belongs_to :restaurant
  has_many :records
end
