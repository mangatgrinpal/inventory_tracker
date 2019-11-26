class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :units, :category

  belongs_to :restaurant
  has_many :records
end
